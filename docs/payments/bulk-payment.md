---
id: bulk-payment
title: Proposing Multiple Payments
description: Learn how to request payments for a specific recipient
---

The treasury funds can be used to send payments to an external account. In this section, you will learn how to create bulk payment requests to pay multiple recipients at once.

:::warning Requestor Role

Payment requests can only be created by team members with the [Requestor](../treasury/roles-and-permissions.md#requestor) role, and they require approval from team members with the [Finance](../treasury/roles-and-permissions.md#finance) role before they can be executed

:::

---

## Bulk Payment Request

Navigate to the **`Payments`** section in the left sidebar, then click on the **`Bulk Payments`**.

![Bulk Payment Button](/docs/payments/bulk-payment-button.png)

You will need to specify in which token you want to pay the recipients - all recipients will be paid in the same token. Then, you will need to manually enter the payment details for each recipient or upload a `.csv` file with the information.

![Bulk Payment Request](/docs/payments/bulk-payment-request.png)

<details>

<summary>Bulk Payment Format</summary>

The expected format is a list of recipients with their wallet address and the amount to be paid, e.g. if we want to pay `10.50 USDC` to `alice.near` and `21.34 USDC` to `bob.near`, you can manually provide the payment data in the **Provide Data** section as follows:

```csv
alice.near, 10.50
bob.near, 21.34
```

Or download our [template](/docs/bulk_payment_template.csv) and fill in the payment details, then upload the file in the **Upload File** section.

</details>


<hr class="subsection" />

## Reviewing the Request

Make sure to review the bulk payment request before submitting it. You can also add a comment to provide more context to the approvers.

![Bulk Payment Review](/docs/payments/bulk-payment-review.png)

:::danger Double-check the payment details

Make sure to select the right blockchain and enter the correct wallet addresses, as payments are irreversible

:::

---

## What's Next?

After submitting the payment request, it will be ready for the [Finance](../treasury/roles-and-permissions.md#finance) team members to review and vote on the request.

:::tip Part of the Finance team?

Head to [Handling Payment Requests](./handling-requests.md) to learn how to review and vote on payment requests

:::
