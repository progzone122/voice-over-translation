import { KeysOrDefaultValue } from "@toil/gm-types/types/utils";

import debug from "./debug";
import { StorageKey, storageKeys } from "../types/storage";
import { isSupportGM4 } from "./utils";

export async function convertData(
  data: Record<string, unknown>,
  option: StorageKey,
  oldValue: unknown,
  newValue: string | number | boolean,
  optionValue: string | number | boolean | undefined = undefined,
) {
  const optionVal = optionValue ?? data[option];
  if (optionVal !== oldValue) {
    return;
  }

  data[option] = newValue;
  await votStorage.set(option, newValue);
  console.log(`[VOT] Old ${option} converted to new ${newValue}`);
}

export const votStorage = new (class {
  supportGM: boolean;
  supportGMPromises: boolean;
  supportGMGetValues: boolean;

  constructor() {
    this.supportGM = typeof GM_getValue === "function";
    this.supportGMPromises = isSupportGM4 && typeof GM?.getValue === "function";
    this.supportGMGetValues =
      isSupportGM4 && typeof GM?.getValues === "function";
    debug.log(
      `[VOT Storage] GM Promises: ${this.supportGMPromises} | GM: ${this.supportGM}`,
    );
  }

  syncGet<T = unknown>(name: StorageKey, def?: unknown): T {
    if (this.supportGM) {
      return GM_getValue<T>(name, def);
    }

    let val = window.localStorage.getItem(name);
    if (!val) {
      return def as T;
    }

    try {
      return JSON.parse(val);
    } catch {
      return def as T;
    }
  }

  async get<T = unknown>(name: StorageKey, def?: unknown) {
    if (this.supportGMPromises) {
      return await GM.getValue<T>(name, def);
    }

    return Promise.resolve(this.syncGet<T>(name, def));
  }

  async getValues<
    T extends Record<StorageKey, KeysOrDefaultValue> = Record<
      StorageKey,
      KeysOrDefaultValue
    >,
  >(data: T): Promise<T> {
    if (this.supportGMGetValues) {
      return await GM.getValues<T>(data);
    }

    return Object.fromEntries(
      await Promise.all(
        Object.entries(data as Record<StorageKey, KeysOrDefaultValue>).map(
          async ([key, value]) => {
            const val = await this.get<T[keyof T]>(key as StorageKey, value);
            return [key, val];
          },
        ),
      ),
    );
  }

  syncSet<T extends KeysOrDefaultValue = undefined>(
    name: StorageKey,
    value: T,
  ) {
    if (this.supportGM) {
      return GM_setValue<T>(name, value);
    }

    return window.localStorage.setItem(name, JSON.stringify(value));
  }

  async set<T extends KeysOrDefaultValue = undefined>(
    name: StorageKey,
    value: T,
  ) {
    if (this.supportGMPromises) {
      return await GM.setValue<T>(name, value);
    }

    return Promise.resolve(this.syncSet<T>(name, value));
  }

  syncDelete(name: StorageKey) {
    if (this.supportGM) {
      return GM_deleteValue(name);
    }

    return window.localStorage.removeItem(name);
  }

  async delete(name: StorageKey) {
    if (this.supportGMPromises) {
      return await GM.deleteValue(name);
    }

    return Promise.resolve(this.syncDelete(name));
  }

  syncList(): readonly StorageKey[] {
    if (this.supportGM) {
      return GM_listValues<StorageKey>();
    }

    return storageKeys;
  }

  async list() {
    if (this.supportGMPromises) {
      return await GM.listValues<StorageKey>();
    }

    return Promise.resolve(this.syncList());
  }
})();
