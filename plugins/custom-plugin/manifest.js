module.exports = {
  version: "0.0.1",
  init: function (pluginContext) {
       let policy = require('./policies/custom-policy')
       pluginContext.registerPolicy(policy)
  },
  policies: ['custom-policy'],
  schema: {
    $id: "https://express-gateway.io/schemas/plugins/custom-plugin.json",
  },
};
