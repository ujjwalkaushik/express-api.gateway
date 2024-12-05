module.exports = {
    version: '0.0.1',
    policies: ['custom-log'], // Name of the policy
    init: (pluginContext) => {
      pluginContext.registerPolicy(require('./custom-log-policy'));
    }
  };
  