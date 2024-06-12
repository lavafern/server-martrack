const { getAll } = require('../controllers/vessel.controller')

const router = require('express').Router()

router.get('/vessel',getAll)

module.exports = router