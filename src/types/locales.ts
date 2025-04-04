export type LocaleStorageKey =
  | "locale-phrases"
  | "locale-lang"
  | "locale-hash"
  | "locale-updated-at"
  | "locale-lang-override";

export type LocaleData = {
  [key: string]: any;
};
