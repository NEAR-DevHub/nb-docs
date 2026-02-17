---
id: what-is
title: What is a Treasury?
---

import Card from '@site/src/components/Card';
import ConceptCard from '@site/src/components/ConceptCard';

In Trezu, a treasury is a shared wallet that allows teams to securely manage crypto assets across multiple blockchain. Treasuries are designed to be flexible and customizable, allowing teams to set their own rules and permissions for managing their funds. 

:::info

Trezu is a non-custodial solution, which means we do not have access to your private keys or funds. Your team retains full control over your assets.

:::

---

## Chains & Assets

Trezu treasuries can hold crypto assets on multiple chains, helping teams to manage a wide variety of assets from a **single platform**, and **without needing to use multiple wallets**.

<div className="row margin-top--lg margin-bottom--lg" style={{ gridGap: '1rem 0' }}>
  <div className="auto-col">
    <Card
      variant="icon"
      icon="/img/chains/ethereum.svg"
      title="All EVM Chains"
    >
      <!-- <ul>
        <li><a href="#"> ETH, BNB, MATIC, ...</a></li>
        <li><a href="#"> ERC-20 tokens</a></li>
      </ul> -->
    </Card>
  </div>
  
  <div className="auto-col">
    <Card
      variant="icon"
      icon="/img/chains/bitcoin.svg"
      title="Bitcoin Networks"
    >
      <!-- <ul>
        <li><a href="#">Bitcoin</a></li>
        <li><a href="#">Zcash</a></li>
      </ul> -->
    </Card>
  </div>  
  <div className="auto-col">
    <Card
      variant="icon"
      icon="/img/chains/solana.svg"
      title="Solana"
    >
    </Card>
  </div>
  <div className="auto-col">
    <Card
      variant="icon"
      icon="/img/chains/near.svg"
      title="NEAR Ecosystem"
    >
      <!-- <ul>
        <li><a href="#">NEAR native token</a></li>
        <li><a href="#">NEP-141 fungible tokens</a></li>
      </ul> -->
    </Card>
  </div>
  <div className="auto-col">
    <Card
      variant="icon"
      icon="/img/chains/sui.svg"
      title="SUI"
    >
      <!-- <ul>
        <li><a href="#">SUI native</a></li>
        <li><a href="#">wrapped tokens</a></li>
      </ul> -->
    </Card>
  </div>
  <div className="auto-col">
    <Card
      variant="icon"
      icon="/img/docusaurus.png"
      title="Tron, Stellar, ..."
    >
      <!-- <ul>
        <li><a href="#">TON + jettons</a></li>
        <li><a href="#">Ripple, Stellar, Tron, ...</a></li>
      </ul> -->
    </Card>
  </div>

</div>

New chains and assets are being added regularly, so if you don't see a specific chain or asset supported, please reach out to us and let us know!

---

## Team Members & Roles

Treasuries are composed by multiple members, and each member can be assigned multiple [roles and permissions](./governance/roles-and-permissions.md). There are three main roles in a treasury:

<div className="row margin-top--lg margin-bottom--lg" style={{ gridGap: '3rem 0rem' }}>
  <div className="auto-col">
    <Card
      title="🏛️ Governance"
      href="/treasury/roles-and-permissions#governance"
    >
      Manages team members and permissions, without the ability to make decisions on fund management
    </Card>
  </div>
  <div className="auto-col">
    <Card
      title="👤 Requestor"
      href="/treasury/roles-and-permissions#requestor"
    >
      Makes fund-related proposals (e.g. make a payment, swap tokens, etc) but has no voting power
    </Card>
  </div>
  <div className="auto-col">
    <Card
      title="💱 Finance"
      variant="image"
      href="/treasury/roles-and-permissions#finance"
    >
      Vote on fund-related proposals, but cannot manage team members or make proposals themselves
    </Card>
  </div>
  
</div>


:::info Multiple Roles

Team members can be assigned multiple roles, for example a member can be both Governance and Finance, which means they can manage team members and also vote on proposals.

:::

---

## Governance & Proposals

In a treasury, nobody can take unilateral decisions regarding the management of the funds or the team. Instead, each treasury defines a minimum number of members that need to be in agreement to perform a certain action - this is called the voting threshold.

All actions - be it making a payment, swapping tokens, or managing team members - needs to be **first proposed** and relevant team members get to vote on it. If the proposal reaches the required voting threshold, then it gets executed automatically by the system.

This way, treasuries ensure that all decisions are made collectively and with the agreement of the team, thus minimizing risks and maximizing security.



<!-- <hr class="subsection" />

### Requestor Proposals
Team members with the Requestor role can make proposals related to fund management, such as:

- Transfer funds to one or multiple external wallets, i.e. make a payment
- Perform a token swap - for example swapping USDC for ETH in Uniswap
- Stake tokens in a staking pool to earn rewards

Members with the Finance role can then vote on these proposals, and if the proposal reaches the required voting threshold, it gets executed automatically by the system.

<!-- - lockup: we gonna give tokens to a person, but they cannot use them until a certain date -->

<!-- ### Team Management Proposals
Meanwhile, team members with the Governance role can make proposals related to team management, such as:
- add/remove members
- edit permissions of members
- changing voting thresholds

:::tip Function Calls
For advanced users, treasuries can be used to make function calls, thus acting as non-custodial smart contract wallets
:::

---

Voting threshold

---

## Members and Permissions

Treasuries typically involve multiple members, and each member can be assigned specific roles and permissions. Common permissions include:

- **Admin**: Has full control over the treasury, including adding or removing members and managing funds.
- **Governance**: Participates in decision-making processes, such as voting on proposals related to fund allocation.
- **Requester**: Can propose making payments, swaps,  fund requests but cannot approve them.
- **Finance**: 

Whoever creates a request is the only that can delete it, others relevant roles can still vote on it, but cannot delete it. 




Governance (ex admin) -> can add / remove / edit members  -->

---

## Ready to get started?

[Create your treasury now](https://trezu.app/app) and start managing your team's crypto assets securely and collaboratively!