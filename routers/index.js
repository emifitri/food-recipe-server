const bookmarkRoutes = require('./bookmark')
const categoryRoutes = require('./category')
const recipeRoutes = require('./recipe')
const userRoutes = require('./user')
const routes = require('express').Router()

routes.use(userRoutes)
routes.use(recipeRoutes)
routes.use(categoryRoutes)
routes.use(bookmarkRoutes)

module.exports = routes