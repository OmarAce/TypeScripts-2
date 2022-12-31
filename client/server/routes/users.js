// Dependancies
var express = require('express');
const User = require('../models/User')
var router = express.Router();

// User Register Method
router.post('/register', async function (req, res) {
  try {
    const { username, password } = req.body
    const userData = await User.create({
      username,
      password
    });
    const userDataClean = await userData.get({ plain: true })

    req.session.userId = userDataClean.id;
    req.session.username = userDataClean.username;
    req.session.loggedIn = true
    req.session.save(() => {
      res.status(200).json(userData)
    })
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

// User Logout
router.post('/logout', async function (req, res) {
  try {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(200).end()
      })
    } else {
      res.status(400).end()
    }
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

// User Login
router.post('/login', async function (req, res) {
  try {
    const { username, password } = req.body
    const userData = await User.findOne({ where: { username } })

    if (!userData) {
      console.log('cannot find user')
      return res.status(400).json({ message: 'We cannot find the user!' })
    }
    const userDataClean = await userData.get({ plain: true })

    const validPassword = userData.checkPassword(password)

    if (!validPassword) {
      console.log('cannot find user')
      return res.status(400).json({ message: 'Incorrect username or password!' })
    };
    req.session.userId = userDataClean.id;
    req.session.username = userDataClean.username;
    req.session.loggedIn = true

    req.session.save(() => {
      res.status(200).json({ message: 'You are logged in!', userId: `${userDataClean.id}` })
    })
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
// Export
module.exports = router;
