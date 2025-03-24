// DEFINED IN WEBPACK
const DEBUG_MODE: boolean;
const IS_BETA_VERSION: boolean;
const AVAILABLE_LOCALES: string[];

// GM API
function GM_getValue<T = unknown>(
  name: string,
  def: unknown = undefined,
): Promise<T>;
function GM_getValue<T = unknown>(name: string, def: unknown = undefined): T;
function GM_setValue<T = unknown>(
  name: string,
  value: string | boolean | number | undefined,
): Promise<T>;
function GM_setValue<T = unknown>(
  name: string,
  value: string | boolean | number | undefined,
): T;
function GM_deleteValue(name: string): Promise<void>;
function GM_deleteValue(name: string): void;
function GM_listValues(): Promise<string[]>;
function GM_listValues(): string[];

function GM_notification(
  text: string,
  title?: string,
  image?: string,
  onclick?: () => void,
): undefined;

function GM_notification(
  options: import("./types/gm.ts").GMNotificationOptions,
): undefined;
