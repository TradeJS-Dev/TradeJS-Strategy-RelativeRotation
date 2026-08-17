# @tradejs/strategy-relative-rotation

TradeJS strategy plugin providing `RelativeRotation`.

## Strategy overview

`RelativeRotation` trades an asset's rotation against BTC rather than its
absolute trend alone. It combines 24-hour alpha and ratio returns,
short-horizon relative strength, ratio trend, benchmark regime, ADX,
correlation, volume, and volatility filters before sizing ATR-based risk.

## Logic at a glance

![RelativeRotation strategy logic](https://raw.githubusercontent.com/TradeJS-Dev/TradeJS-Strategy-RelativeRotation/main/docs/strategy-logic.svg)

## Install

```bash
yarn add @tradejs/strategy-relative-rotation
```

Register the package in `tradejs.config.ts`:

```ts
import { defineConfig } from "@tradejs/core/config";

export default defineConfig({
  strategies: ["@tradejs/strategy-relative-rotation"],
});
```

The package exports `strategyEntries` for the TradeJS plugin loader together
with its strategy definitions, manifests, default configs, and public AI/ML
adapters. Strategy implementation changes are released from this repository,
independently of the TradeJS engine.

## Development

```bash
yarn install --immutable
yarn checks
```

Publishing is triggered by a GitHub release and delegated to the pinned
`TradeJS-Workflows@v1` reusable workflow.

Keywords: ai, claude, codex.
