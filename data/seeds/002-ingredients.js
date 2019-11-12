exports.seed = function(knex) {
  return knex('ingredients').insert([
    {name: 'Sugar'},
    {name: 'Salt'},
    {name: 'Pepper'},
    {name: 'Chicken'},
    {name: 'Chocolate'},
    {name: 'Milk'},
    {name: 'Garlic'},
    {name: 'Butter'},
  ]);
};