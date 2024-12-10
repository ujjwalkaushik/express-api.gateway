module.exports = {
    name: 'rewrite',
    policy: (actionParams) => {
      return (req, res, next) => {
        req.url = req.url.replace(actionParams.search, actionParams.replace);
        next() // calling next policy
      };
    }
  };