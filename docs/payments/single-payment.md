---
id: single-payment
title: Proposing a Payment
description: Learn how to request payments for a specific recipient
---

The treasury funds can be used to send payments to an external account. In this section, you will learn how to create a payment request to send a specific amount of a token to one recipient.

:::tip Multiple payments?
Need to request multiple payments at once? Check the [Proposing Multiple Payments](./bulk-payment.md) section
:::

:::warning Requestor Role

Payment requests can only be created by team members with the [Requestor](../treasury/roles-and-permissions.md#requestor) role, and they require approval from team members with the [Finance](../treasury/roles-and-permissions.md#finance) role before they can be executed.

:::

---

## Requesting a Payment

Navigate to the **`Payments`** section in the left sidebar, then simply fill in the required details: the recipient's **wallet address**, which **token** you want to send and the **amount**. 

![Payments Screen](/docs/payments/single-payment.png)

:::tip Payment request without tokens

You can create a payment request even if the treasury does not have the necessary tokens. This allows you to request payments, and the team can top-up the treasury with the required tokens later on.

:::

<hr class="subsection" />

## Reviewing the Payment Request

After filling in the payment details, you can review the payment request before submitting it. Feel free to add a comment to the payment to provide more context to the approvers.

![Review Payment](/docs/payments/single-payment-review.png)

:::danger Double-check the payment details

Make sure to select the right blockchain and enter the correct wallet address, as payments are irreversible

:::

---

## Frequently Asked Questions

Here is a list of frequently asked questions about creating payment requests, if you have any other questions, feel free to reach out to your team or contact us!

<br />

### Can I edit a payment request after submitting it?
No, once a payment request is submitted, it cannot be edited. If you need to make changes to a payment request, you will need to delete the existing request and create a new one with the correct details.

<br />

### What if the recipient's wallet address is incorrect?
If the payment request is approved and executed with an incorrect wallet address, the funds will be sent to the wrong address and may be unrecoverable.

Always double-check the wallet address before submitting the payment request to avoid any mistakes.

---

## What's Next?

After submitting the payment request, it will be ready for the [Finance](../treasury/roles-and-permissions.md#finance) team members to review and [vote on the request](./handling-requests.md).

:::tip Part of the Finance team?

Head to [Handling Payment Requests](./handling-requests.md) to learn how to review and vote on payment requests

:::
