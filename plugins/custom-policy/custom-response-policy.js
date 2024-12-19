module.exports = {
    name: 'custom-response',
    policy: () => {
      return (req, res, next) => {
        const originalSend = res.send;
        res.send = function (body) {
            let responseBody;
            if (typeof body === 'string') {
              responseBody = {
                status: 200,
                data: body,
                responseTime: `${Date.now() - Number(req.headers['x-start-time'])}ms`,
              };
            } else {
              responseBody = {
                status: 200,
                data: body,
                responseTime: `${Date.now() - Number(req.headers['x-start-time'])}ms`,
              };
            }
            originalSend.call(res, responseBody);
        };
  
        // Proceed to the next middleware
        next();
      };
    }
  };
  
