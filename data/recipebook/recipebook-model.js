const db = require('../db-config.js')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db('recipes');
}

function getShoppingList(recipeId){
console.log(recipeId);
    return db('recipes-ingredients')
        .select('ingredients.name')
        .where({ recipeId })
        .join('ingredients', 'ingredients.id', 'recipes-ingredients.ingredientId');

}

function getInstructions(recipeId){

    return db('instructions')
        .select('recipes.name', 'instructions.instructions')
        .where({ recipeId })
        .join('recipes', 'recipes.id', 'instructions.recipeId')

}