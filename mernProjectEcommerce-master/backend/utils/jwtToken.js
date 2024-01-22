// Create Token and saving in cookie

const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();
//user ka token fetch hoga
  
  
  res.status(statusCode).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
