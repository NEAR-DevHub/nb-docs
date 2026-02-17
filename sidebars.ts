import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  trezu: [
    'index',
    'what-is',
    {
      type: 'html',
      value: '<hr/>',
    },
    {
      'Governance': [
        'governance/members-and-roles',
        'governance/voting-settings',
        'governance/handling-requests',
      ],
      'Payments': [
        'payments/single-payment',
        'payments/bulk-payment',
        'payments/handling-requests',
      ]
    },
    'swap',
  ],
};

export default sidebars;
