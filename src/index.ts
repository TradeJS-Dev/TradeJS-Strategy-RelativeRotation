import { defineStrategyPlugin } from "@tradejs/core/config";
import type { StrategyConfig, StrategyRegistryEntry } from "@tradejs/types";
import { config as relativeRotationDefaultConfig } from "./RelativeRotation/config";
import { RelativeRotationStrategyDefinition } from "./RelativeRotation/strategy";

export const strategyEntries: StrategyRegistryEntry[] = [
  RelativeRotationStrategyDefinition,
];

const defaultConfigs: Record<string, StrategyConfig> = {
  RelativeRotation: relativeRotationDefaultConfig,
};

export const getBuiltInStrategyDefaultConfig = (
  strategyName: string,
): StrategyConfig | undefined => defaultConfigs[strategyName];

export { RelativeRotationStrategyDefinition } from "./RelativeRotation/strategy";
export { relativeRotationDefaultConfig };
export { relativeRotationManifest } from "./RelativeRotation/manifest";
export { relativeRotationAiAdapter } from "./RelativeRotation/adapters/ai";

export default defineStrategyPlugin({ strategyEntries });
