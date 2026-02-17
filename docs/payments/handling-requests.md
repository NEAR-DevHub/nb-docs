---
id: handling-requests
title: Handling Payment Requests
description: Learn how to review, approve, or reject payment requests in your treasury.
---

Once a request is created, it will be listed as a **`Pending Request`** in the **Requests** section of the left sidebar. 

![Request](/docs/payments/pending-requests.png)

---

## Voting on a Request

Click on a request to review its details, including the recipient, the amount, the token, and any comments added by the requester. After reviewing the request, you can cast your vote to either approve or reject it.

![Request Details](/docs/payments/request-details.png)

:::warning Finance Role
Only team members with the **[Finance](../treasury/roles-and-permissions.md#finance) role** can review the details of the request and cast their vote to either **approve** or **reject** it.
:::

:::info Insufficient Funds

If the treasury does not have enough funds to cover the payment request, you will need to top-up the treasury with the required tokens before the request can be approved

:::


---

## Filtering Payment Requests

You can filter payment requests by the following fields: `Request Type`, `Created Date`, `Recipient`, `Token`, `Requester`, `Approver`, `My Vote status`.

To filter payment requests click on the **`Filter`** icon:

![Request](/docs/request-filter.png)

Then simply add as many filters as needed:

![Request](/docs/payments/filtered-requests.png)

:::tip
To see only payment requests, filter by `Request Type` -> `Payments`
:::