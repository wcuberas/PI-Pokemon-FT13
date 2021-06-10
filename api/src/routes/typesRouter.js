const router = require('express').Router();
const { Type } = require('../db');


router.get('/', async (req, res) => {
    const allTypes = await Type.findAll();
    res.send(allTypes);
})


module.exports = router;