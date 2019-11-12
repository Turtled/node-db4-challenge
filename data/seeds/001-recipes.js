exports.seed = function(knex) {
  return knex('recipes').insert([
    {name: 'Chocolate Chip Cookies', description: 'The best cookie recipe ever', calories:'200000'},
    {name: 'Chicken Thing', description: 'The best chicken recipe ever', calories:'200000'},
    {name: 'Butter Soup', description: 'The best butter recipe ever', calories:'200000'} 
  ]);
};
