exports.seed = function(knex) {
  return knex('instructions').insert([
    {recipeId: 1, instructions: 'Add ingredients'},
    {recipeId: 1, instructions: 'Mix'},
    {recipeId: 1, instructions: 'Bake'},
    {recipeId: 2, instructions: 'Put chocolate on chicken'},
    {recipeId: 2, instructions: 'Boil'},
    {recipeId: 3, instructions: 'Add butter to pot'},
    {recipeId: 3, instructions: 'Simmer on high for 30min'},
  ]);
};