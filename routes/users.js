const express = require('express')
const router = express.Router()

const join = require('../controller/user')

router.get('/users', join.show_all)

router.get('/users/:id', join.show)

router.post('/user', join.server)

router.put('/user/:id', join.update)

router.delete('/user/:id', join.junk)

router.get('/user/login', join.login_info)

module.exports = router