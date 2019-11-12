  exports.seed = function(knex) {
  return knex('recipes-ingredients').insert([
    {recipeId: 1, ingredientId: 1},
    {recipeId: 1, ingredientId: 2},
    {recipeId: 2, ingredientId: 1},
    {recipeId: 2, ingredientId: 4},
    {recipeId: 2, ingredientId: 6},
    {recipeId: 2, ingredientId: 7},
    {recipeId: 3, ingredientId: 8},
  ]);
};
