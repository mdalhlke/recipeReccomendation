const router = require('express').Router();
const recipes = require('../services/recipe');
const preferences = require('../services/preferences')

router.get('/random', async (req, res) => {
    debugger;
    let num = req.query.num;
    try {
        let data = await recipes.getRandom(num);
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/nutrition/:id', async (req, res) => {
    try {
        let data = await recipes.getNutrition(req.params.id);
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/ingredients/:id', async (req, res) => {
    try {
        let data = await recipes.getIngredients(req.params.id);
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/instructions/:id', async (req, res) => {
    try {
        let data = await recipes.getInstructions(req.params.id);
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/tailored', async (req, res) => {
    try {
        let prefs = preferences.getRandomPreferences();
        let data = await recipes.getTailored(prefs, 5);
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/:id', (req, res) => {
    res.send(` recipe  ${req.params.id}`);
});

module.exports = router;