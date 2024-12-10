module.exports = {
    version: '0.0.1',
    policies: ['custom-log', 'rewrite'], // Name of the policy
    init: (pluginContext) => {
      pluginContext.registerPolicy(require('./custom-log-policy'));
      pluginContext.registerPolicy(require('./rewrite-policy'));
    }
  };
  