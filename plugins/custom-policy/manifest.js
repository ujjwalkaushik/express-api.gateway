module.exports = {
    version: '0.0.1',
    policies: ['custom-log', 'rewrite', 'custom-response'], // Name of the policy
    init: (pluginContext) => {
      pluginContext.registerPolicy(require('./custom-response-policy'));
      pluginContext.registerPolicy(require('./custom-log-policy'));
      pluginContext.registerPolicy(require('./rewrite-policy'));
    }
  };
  