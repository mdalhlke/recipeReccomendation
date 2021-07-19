module.exports = {

    getRandomPreferences() {
        let cuisines = ['African', 'American', 'British', 'Cajun', 'Caribbean', 'Chinese', 'Eastern European', 'European', 'French', 'German', 'Greek', 'Indian', 'Irish', 'Italian', 'Japanese', 'Jewish', 'Korean', 'Latin American', 'Mediterranean', 'Mexican', 'Middle Eastern', 'Nordic', 'Southern', 'Spanish', 'Thai', 'Vietnamese'];
        let diets = ['Gluten Free', 'Ketogenic', 'Vegetarian', 'Lacto-Vegetarian', 'Ovo-Vegetarian', 'Vegan', 'Pescatarian', 'Paleo', 'Primal', 'Whole30', 'None'];
        let intolerances = ['Dairy', 'Egg', 'Gluten', 'Grain', 'Peanut', 'Seafood', 'Sesame', 'Shellfish', 'Soy', 'Sulfite', 'Tree Nut', 'Wheat', 'None'];

        let cuisine = cuisines[Math.floor(Math.random() * cuisines.length)];
        let diet = diets[Math.floor(Math.random() * diets.length)];
        // this would have to account for if someone has more than one intolerance though...
        let intolerance = intolerances[Math.floor(Math.random() * intolerances.length)];

        return result = { cuisine, diet, intolerance };
    }
};