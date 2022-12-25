const cookiesCleaner = (req, res, next) => {
  if (req.cookies.sid && !req.session.uid) {
    console.log('в куках');
    res.clearCookie('sid');
    next()
  } else {
    console.log('отработала middleware cookiesCleaner');
    next();
  }
};

const sessionChecker = (req, res, next) => {
  if (!req.cookies.sid && req.session.uid) {
    console.log('в сеcсии');
    req.session.destroy()
    next()
  } else {
    console.log('отработала middleware sessionChecker');
    next();
  }
};


module.exports = { cookiesCleaner, sessionChecker };
