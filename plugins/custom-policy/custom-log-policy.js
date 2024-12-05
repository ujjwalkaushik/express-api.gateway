module.exports = {
  name: 'custom-log',
  policy: (actionParams) => {
    return (req, res, next) => {
      console.log(`[Custom Log] ${actionParams.message || 'Default message'} - ${req.method} ${req.url}`);
      next();
    };
  },
};

