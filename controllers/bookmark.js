const { Bookmark, Recipe, Category,User } = require("../models")
const { Op } = require("sequelize");
  
class BookmarkController {
    static async getBookmark(req, res, next) {
        try {
            const bookmarks = await Bookmark.findAll({
                where: {
                    authorId: req.user.id,
                },
                include: [{
                    model: Recipe, 
                    include: [Category]
                }],
            });
            res.status(200).json(bookmarks);
        } catch (error) {
            next(error);
        }
    }  

    static postBookmark(req, res, next) {
        Recipe.findByPk(req.params.recipeId)
          .then((result) => {
            if (!result) {
              throw {
                status: 404,
                message: 'Recipe not found'
              }
            } else {
              return Bookmark.findOne({
                where : {
                  [Op.and]: [{ recipeId: req.params.recipeId }, { authorId: req.user.id }],
                }
              })
            }
          })
          .then((check)=> {
            if (check) {
              throw {
                status: 400,
                message: 'already exist this bookmark'
              }
            } else {
              return Bookmark.create({
                authorId: req.user.id,
                recipeId: req.params.recipeId
              })
            }
          })
          .then((bookmark) => {
            res.status(201).json(bookmark)
          })
          .catch((err) => {
            next(err)
          });
      }
}
  module.exports = BookmarkController 