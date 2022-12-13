const express = require('express')
const router = express.Router()
const TodoModel = require('../models/todo')

const join = require('../controller/todo')

// routing endpoint users utama
router.get('/todos', join.server)
router.post('/todo', join.store)
router.put('/todo/:id', join.update )
router.delete('/todo/:id', join.junk )

module.exports = router