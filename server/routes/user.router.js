const router = require('express').Router()
const { User } = require('../db/models')
const bcrypt = require('bcrypt');

router.
  route('/init')
  .get((req, res) => {
    console.log('зашел на ручку инит');
    console.log(req.session);
    try {
      const { isAuth, email, uid } = req.session;
      if (isAuth) {
        res.status(200).json({ id: uid, email });
      } else {
        res.sendStatus(401)
      }
    } catch (error) { console.log(error.message); }
  })

router
  .route('/registration')
  .post(async (req, res) => {

    const { email, password } = req.body

    const [newUser, created] = await User.findOrCreate({ where: { email }, defaults: { password: (await bcrypt.hash(password, 10)) } })
    if (!created) {
      res.sendStatus(400)
    } else {
      req.session.uid = newUser.id;
      req.session.isAuth = true
      req.session.email = newUser.email
      res.status(200).json({ id: newUser.id, email })
    }
  })

// const [book, created] = await Book.findOrCreate({
//   where: { author: 'Fyodor Mikhailovich Dostoevsky' },
//   defaults: { title: 'Notes from Underground' },
//   });
//   console.log(book.author); // 'Fyodor Mikhailovich Dostoevsky'
//   console.log(created); // false если запись найдена или true если
//   создана

router
  .route('/login')
  .post(async (req, res) => {
    const { email, password } = req.body
    console.log('в логине');
    const user = await User.findOne({ where: { email } })
    if (user && await bcrypt.compare(password, user.password)) {
      req.session.uid = user.id;
      req.session.isAuth = true
      req.session.email = user.email
      res.status(200).json({ id: user.id, email })
    } else {
      res.sendStatus(400)
    }
  })

router
  .get('/logout', (req, res) => {
    req.session.destroy();
    res.clearCookie('sid');
    res.sendStatus(200)
  });

module.exports = router
