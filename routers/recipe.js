const RecipeController = require('../controllers/recipeController')
const { authentication } = require('../middleware/auth')
const recipeRoutes = require('express').Router()

recipeRoutes.get('/recipes', RecipeController.getAllRecipe)
recipeRoutes.post('/recipes', authentication, RecipeController.addRecipe)
recipeRoutes.get('/recipes/:recipeId', RecipeController.showDetail)
// recipeRoutes.put('/recipes/:recipesId', authentication, RecipeController.editRecipe)
recipeRoutes.delete('/recipes/:recipeId', authentication, RecipeController.destroy)

module.exports = recipeRoutes