---
id: swap
title: Swapping Assets
description: "Learn how to swap assets in Trezu"
---

Trezu allows you to swap assets directly from the platform, making it easy to manage your treasury's portfolio and access liquidity when needed.

![Swapping](/docs/swap/swap-landing.png)

:::tip NEAR Intents

Trezu integrates NEAR Intents, a platform for multi-chain asset swaps, that provides competitive rates and low fees for swapping assets across different blockchains

:::

---

## Creating a Swap Request

To swap assets, simply navigate to the **Exchange** section in the left sidebar, select the asset you want to swap from and the asset you want to swap to, enter the amount, and review the swap details before confirming the request.

![Swapping](/docs/swap/swap-review.png)

:::warning Role Restriction
Only team members with the [Request](./governance/roles-and-permissions.md#request) role can create swap requests
:::

---

## What's Next?

The swap request will then go through the same approval process as other treasury transactions, requiring the necessary votes from team members with the [Finance](./roles-and-permissions.md#finance) role based on the treasury's configured voting thresholds.
