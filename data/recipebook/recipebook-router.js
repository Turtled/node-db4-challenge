const express = require('express');
const recipeHelper = require('./recipebook-model');

const router = express.Router();

router.get('/', (req, res) => {

    recipeHelper.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error at getRecipes()' });
    });

  });

  router.get('/:id/shoppingList', (req, res) => {
      //
    const { id } = req.params;

    recipeHelper.getShoppingList(id)
    .then(ingredients => {
      res.status(200).json(ingredients);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error at getShoppingList()' });
    });

  });

  router.get('/:id/instructions', (req, res) => {

    const { id } = req.params;

    recipeHelper.getInstructions(id)
    .then(instructions => {
      res.json(instructions);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error at getInstructions()' });
    });

  });

  module.exports = router;