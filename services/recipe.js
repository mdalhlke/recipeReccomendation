const spoonacular = require('./spoonacular');
const fetch = require('node-fetch');

module.exports = {

    async getRandom(number) {
        try {
            let url = spoonacular.url + 'random?number=' + number + '&apiKey=' + spoonacular.apiKey;
            let response = await fetch(url);
            let data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    },

    async getNutrition(id) {
        try {
            let url = spoonacular.url + id + '/nutritionWidget.json?apiKey=' + spoonacular.apiKey;
            let response = await fetch(url);
            let data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    },

    async getIngredients(id) {
        try {
            let url = spoonacular.url + id + '/ingredientWidget.json?apiKey=' + spoonacular.apiKey;
            let response = await fetch(url);
            let data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    },

    async getInstructions(id) {
        try {
            let url = spoonacular.url + id + '/analyzedInstructions?apiKey=' + spoonacular.apiKey;
            let response = await fetch(url);
            let data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    },

    async getTailored(preferences = {}, number) {
        try {
            debugger;
            let params = []
            Object.keys(preferences).forEach(key => {
                params.push(key + '=' + preferences[key]);
            });

            let url = spoonacular.url + 'complexSearch?apiKey=' + spoonacular.apiKey;
            url += '&query=None&' + params.join('&')

            let response = await fetch(url);
            let data = response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    }

};

