const express = require('express');

const Auth = require('../Auth.js')
const UserService = require('../services/UserService.js')

const router = express.Router();


router.get('/user', function (req, res) {
  return Auth()
    .then(client => UserService(client))
    .then(userService => userService.findAll())
    .then(data => {
      res.send(data)
    })
    .catch(data => {
      res.send(data)
    })

});

router.get('/user/:id', function (req, res) {
  return Auth()
    .then(client => UserService(client))
    .then(userService => userService.findById(req.params.id))
    .then(data => {
      res.send(data)
    })
    .catch(data => {
      res.send(data)
    })

});

module.exports = router