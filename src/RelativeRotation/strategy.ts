import { createStrategyConfigParser } from "@tradejs/strategy-kit/config";
import type { ValidatedStrategyRegistryEntry } from "@tradejs/strategy-kit/config";
import { RelativeRotationConfig, config as DEFAULT_CONFIG } from "./config";
import { createRelativeRotationCore } from "./core";
import { relativeRotationManifest } from "./manifest";

export const RelativeRotationStrategyDefinition: ValidatedStrategyRegistryEntry<RelativeRotationConfig> =
  {
    defaults: DEFAULT_CONFIG,
    parseConfig: createStrategyConfigParser({
      strategyName: "RelativeRotation",
      defaults: DEFAULT_CONFIG,
    }),
    createCore: createRelativeRotationCore,
    manifest: relativeRotationManifest,
  };
