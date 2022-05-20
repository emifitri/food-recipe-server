const BookmarkController = require('../controllers/bookmark')
const { authentication } = require('../middleware/auth')

const bookmarkRoutes = require('express').Router()

bookmarkRoutes.get('/bookmark',authentication, BookmarkController.getBookmark)
bookmarkRoutes.post('/bookmark/:recipeId',authentication, BookmarkController.postBookmark)


module.exports = bookmarkRoutes 


