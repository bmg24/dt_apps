import type { CliOptions } from 'dt-app';

const config: CliOptions = {
  environmentUrl: 'https://anr47691.sprint.apps.dynatracelabs.com/',
  app: {
    name: 'gary_lab',
    version: '0.0.0',
    description: 'A starting project with routing, fetching Grail™ data, and charting',
    id: 'my.gary.lab',
    scopes: [{ name: 'storage:logs:read', comment: 'default template' }, { name: 'storage:buckets:read', comment: 'default template' }]
  },
};

module.exports = config;