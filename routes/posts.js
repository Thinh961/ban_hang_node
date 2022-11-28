const router = require('express').Router();
const User = require('../model/User');
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
    // res.json({
    //     posts: {
    //         title: 'my first posts',
    //         description: 'random data you shouldnt access'
    //     }
    // })
    res.send(req.user);
    User.findById({_id: req.user})
})

module.exports = router;