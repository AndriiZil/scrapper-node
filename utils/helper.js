exports.timestamp = () => {
  return new Date().toISOString();
}

exports.setCORSHeaders = () => {
  return (req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Credentials', 'true');
      res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
      res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
      res.header('Access-Control-Expose-Headers', 'Conform_token, Total_count');
      if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
      }
    next();
  };
}