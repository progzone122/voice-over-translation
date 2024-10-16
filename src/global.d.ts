import type { GrainPlayer as GrainPlayerType } from "tone";

declare global {
  const DEBUG_MODE: boolean;
  const IS_BETA_VERSION: boolean;
  const AVAILABLE_LOCALES: string[];
  const Tone: {
    GrainPlayer: typeof GrainPlayerType;
  };
  namespace Tone {
    export type GrainPlayer = GrainPlayerType;
  }
}
