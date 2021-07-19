const router = require('express').Router();

router.get('/:id', (req, res) => {
    res.send('nutrition')
})

router.get('/calories/:id', (req, res) => {
    res.send('nutrition calories');
})

module.exports = router;