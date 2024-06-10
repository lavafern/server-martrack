const router = require('express').Router()


router.get('/hello',(req,res,next) => {
    res.send('heloo')
})

module.exports = router