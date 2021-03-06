const jwt = require('jsonwebtoken');

exports.authenticated = (req, res, next) => {
   let header, token;

   if (
      !(header = req.header('Authorization')) ||
      !(token = header.replace('Bearer ', ''))
   ) {
      return res.status(400).send({
         status: 'failed',
         message: 'Access Denied',
      });
   }

   try {
      const secretKey = 'asdf1234';

      const verified = jwt.verify(token, secretKey);
      console.log(token);
      req.user = verified;
      next();
   } catch (error) {
      res.status(400).send({
         status: 'failed',
         message: 'Invalid Token !',
      });
   }
};
