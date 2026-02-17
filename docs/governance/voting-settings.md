---
id: voting-settings
title: Voting Rules
description: Learn about voting thresholds and voting duration in NEAR Treasury, and how they impact the approval process for treasury transactions and configuration changes.=
---

import Card from '@site/src/components/Card';

When creating a treasury you will be able to setup the **voting threshold** for all requests in the treasury, this voting threshold is the **minimum number of votes** required for a proposal to be approved.

![Creating Treasury](/docs/governance/creating-treasury-members.png)

---

## Updating Voting Rules

Once the treasury is created, team members with the [Governance](./roles-and-permissions.md#governance) role can present proposals to change the treasury's configuration, including its voting thresholds and voting period.

![Creating Treasury](/docs/governance/voting.png)

:::warning Role Restriction
Only members with the [Governance](./roles-and-permissions.md#governance) role can create proposals to update the treasury's voting settings
:::

---

## Voting Settings Explained

There are two main configurations that can be updated through proposals: [Voting Thresholds](#voting-thresholds), and the [Voting Duration](#voting-duration).

<hr class="subsection"/>

### Voting Thresholds

A voting threshold is the **minimum number of votes required for a proposal to be approved**. For example, if the treasury has a voting threshold of 2, it means that at least **2 votes in favor are needed for the proposal to pass**.

Treasuries separately configure voting thresholds for Governance and Finance proposals, which means that the required number of votes for a proposal to be approved can differ based on the type of proposal being voted on.

<div className="row margin-top--lg margin-bottom--lg" style={{ gridGap: '1rem 0' }}>
  <div className="auto-col">
    <Card title="Governance Threshold">
      How many [Governance](./roles-and-permissions.md#governance) approvals are required for:
      <ul>
        <li><a href="#">Editing Team Members</a></li>
        <li><a href="#">Updating Voting Settings</a></li>
      </ul>
    </Card>
  </div>
  <div className="auto-col">
    <Card title="Finance Threshold">
      How many [Finance](./roles-and-permissions.md#finance) approvals are required for:
      <ul>
        <li><a href='#'>Making Payments</a></li>
        <li><a href='#'>Swapping Assets</a></li>
        <li><a href='#'>Handling Staked Assets</a></li>
      </ul>
    </Card>
  </div>
</div>

<hr class="subsection"/>

### Voting Duration

The voting duration is the **time period during which team members can cast their votes on a proposal**. For example, if the voting duration is set to 3 days, it means that team members will have 3 days to vote on a proposal after it has been created.

If the required number of votes is reached within the voting duration, the proposal is approved and executed immediately. However, if the not enough members vote in favor of the proposal within the voting duration, the proposal then expires and is automatically rejected by the system.

:::info All proposals have the same voting duration

In contrast to voting thresholds, which can be configured separately for Governance and Finance proposals, the voting duration is a single setting that applies to all proposals in the treasury, regardless of their type

:::

---

## What's Next?

After submitting the payment request, it will be ready for the [Governance](../treasury/roles-and-permissions.md#governance) team members to review and [vote on the request](./handling-requests.md).

:::tip Part of the Governance team?

Head to [Handling Payment Requests](./handling-requests.md) to learn how to review and vote on governance requests

:::
