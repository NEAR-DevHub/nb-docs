---
id: members-and-roles
title: Members and Roles
description: Discover the different roles and permissions in NEAR Treasury, and how they enable secure and collaborative management of your treasury funds.
---

import Card from '@site/src/components/Card';

Treasuries are composed by multiple members, each with specific roles and permissions that determine what actions they can perform within the treasury.

![Members](/docs/governance/members.png)

:::info Team Members
You can manage your team members and their roles in the **`Members`** section in the left sidebar.
:::

---

## Roles & Permissions

There are three roles in a treasury: [**Requestor**](#requestor), [**Finance**](#finance), and [**Governance**](#governance). Each role has specific permissions that determine what actions members can perform within the treasury.

:::tip Multiple Roles
Members can have multiple roles assigned, and will have the combined permissions granted by each of their assigned roles
:::

<hr class="subsection" />

### Requestor

Allows to create requests related to the treasury's funds (e.g. treasury transaction requests).

<div className="row margin-top--lg margin-bottom--lg" style={{ gridGap: '1rem 0' }}>
  <div className="auto-col">
    <Card title="Can">
      <ul>
        <li><a href="#">✅ Create payment requests</a></li>
        <li><a href="#">✅ Create staking, unstaking, and withdraw requests</a></li>
        <li><a href="#">✅ Create asset exchange requests</a></li>
        <li><a href="#">✅ Delete their own treasury transaction requests</a></li>
      </ul>
    </Card>
  </div>
  <div className="auto-col">
    <Card title="Cannot">
      <ul>
        <li><a href="#">❌ Vote on any request</a></li>
      </ul>
    </Card>
  </div>
</div>

<hr class="subsection" />

### Finance

Responsible for reviewing and voting on treasury transaction requests.

<div className="row margin-top--lg margin-bottom--lg" style={{ gridGap: '1rem 0' }}>
  <div className="auto-col">
    <Card title="Can">
      <ul>
        <li><a href="#">✅ Vote to approve or reject requests created by Requestors</a></li>
      </ul>
    </Card>
  </div>
  <div className="auto-col">
    <Card title="Cannot">
      <ul>
        <li><a href="#">❌ Create, edit or delete requests</a></li>
      </ul>
    </Card>
  </div>
</div>

<hr class="subsection" />

### Governance

Responsible for configuring the treasury's settings and member configuration.

<div className="row margin-top--lg margin-bottom--lg" style={{ gridGap: '1rem 0' }}>
  <div className="auto-col">
    <Card title="Can">
      <ul>
        <li><a href="#">✅ Create requests to add, edit, or delete members</a></li>
        <li><a href="#">✅ Create requests to update the voting duration</a></li>
        <li><a href="#">✅ Create requests to update the treasury's theme and logo</a></li>
        <li><a href="#">✅ Set the treasury's voting threshold</a></li>
        <li><a href="#">✅ Vote on any treasury configuration requests</a></li>
        <li><a href="#">✅ Delete their own requests</a></li>
      </ul>
    </Card>
  </div>
  <div className="auto-col">
    <Card title="Cannot">
      <ul>
        <li><a href="#">❌ Create financial requests (e.g., payments, staking)</a></li>
        <li><a href="#">❌ Vote on financial requests created by Requestors</a></li>
      </ul>
    </Card>
  </div>
</div>

---

## Permission Matrix

The following table shows the actions users can perform for each role:

| Action                                                     | Requestor | Finance | Governance |
|------------------------------------------------------------|-----------|---------|------------|
| Create Payment Requests                                    | ✅         | ❌       | ❌          |
| Create Stake Delegation Requests (Stake/Unstake/Widthdraw) | ✅         | ❌       | ❌          |
| Create Asset Exchange Requests                             | ✅         | ❌       | ❌          |
| Vote on Treasury Transaction Requests                      | ❌         | ✅       | ✅          |
| Create Add/Edit/Delete Member Requests                     | ❌         | ❌       | ✅          |
| Create Voting Duration Update Requests                     | ❌         | ❌       | ✅          |
| Create Theme/Logo Update Requests                          | ❌         | ❌       | ✅          |
| Create Voting Thresholds Requests                          | ❌         | ❌       | ✅          |
| Vote on Configuration Requests                             | ❌         | ❌       | ✅          |
| Delete Own Pending  Requests                               | ✅         | ❌       | ✅          |
| Delete Others' Pending Requests                            | ❌         | ❌       | ❌          |

---

## Best Practices

When assigning roles and permissions within your treasury, consider the following best practices:

-   **Least Privilege**: Assign the least privilege necessary for each member to perform their duties. This enhances security and reduces the risk of errors
-   **Regular Review**: Periodically review assigned roles and permissions to ensure they align with your treasury's current needs
-   **Administrator Caution**: Exercise caution when assigning the Governance role, as this role has extensive control over the treasury's settings

