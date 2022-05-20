const {Recipe, User, Category} = require('../models')
const { Op } = require("sequelize");

class RecipeController {
    // static getAllRecipe (req, res,next) {
    //     Recipe.findAll({
    //         include: [User, Category],
    //         order: [['id', 'DESC']],
         
    //     })
    //     .then((data) => {
    //         res.status(200).json(data)
    //     }).catch((err) => {
    //         next({
    //             message: 'Internal Server Error'
    //         })
    //         // console.log(err);
    //     });
    // }   

    static getAllRecipe(req, res, next){
        const limitPage = 6
        const offsetPage = +req.query.page ? +req.query.page * + limitPage : 0
        const opt = {
            include : [{
                model : User,
                attributes : ["username","email","phone","role","address"]
            },{
                model : Category
            }],
            order: [['id', 'DESC']],
            offset : offsetPage,
            limit : limitPage,
        }
        const searchOpt = []
        if (req.query.title) {
            // opt.where.title = {
            //     [Op.iLike] : `%${req.query.title}%`
            // }
            searchOpt.push({title : {[Op.iLike] : `%${req.query.title}%`}})
        }
        if (req.query.description) {
            // opt.where.description = {
            //     [Op.iLike] : `%${req.query.description}%`
            // }
            searchOpt.push({description : {[Op.iLike] : `%${req.query.description}%`}})
        }

        if(searchOpt.length){
            opt.where = {
                [Op.or]: searchOpt
            }
        }
        Recipe.findAndCountAll(opt)
            .then((recipe) => {
                res.status(200).json(recipe)
            })
            .catch((err) => {
                next({message : err})
            });
    }


    static addRecipe (req, res, next) {
        let recipe
        let newRecipe = {
            title: req.body.title,
            imgUrl: req.body.imgUrl,
            description: req.body.description,
            UserId: req.user.id,
            CategoryId: req.body.CategoryId,
            ingredients: req.body.ingredients
        }
        Recipe.create(newRecipe)
        .then((data) => {
            recipe = data
            res.status(201).json(recipe)
        }).catch((err) => {
            // next(err)
            res.status(500).json(err)
        });
    }

    // static detailRecipe(req, res, next){
    //     Recipe.findOne({
    //         where : {
    //             id : req.params.recipeId
    //         },
    //         include : [
    //             {
    //                 model : User,
    //                 attributes : ['username','role']
    //             },
    //             {
    //                 model : Category,
    //                 attributes : ['name']
    //             }
    //         ]
    //     })
    //     .then((data) => {
    //         if (data === null) {
    //             throw {status : 404, message : 'Recipe not found'}
    //         } else {
    //             res.status(200).json(data)
    //         }
    //     })
    //     .catch((err) => {
    //         next(err)
    //     });
    // }
    static showDetail (req, res, next) {
        Recipe.findByPk(+req.params.recipeId)
        .then((data) => {
            if(!data) {
                throw {
                    status: 404,
                    message: 'Error not Found'
                }
            } else {
                res.status(200).json(data)
            }
        }).catch((err) => {
            next(err)
        });
    }

    // static editRecipe (req, res, next) {
    //     let recipe
    //     let newRecipe = {
    //         title: req.body.title,
    //         imgUrl: req.body.imgUrl,
    //         description: req.body.description,
    //         // UserId: req.user.id,
    //         CategoryId: req.body.CategoryId,
    //         ingredients: req.body.ingredients
    //     }
    //     Recipe.update(newRecipe, {
    //         where : {
    //             id: +req.params.recipeId
    //         }
    //     })
    //     .then((data) => {
    //         if(data[0] === 0){
    //             throw {
    //                 status: 404,
    //                 message: 'Recipes not found'
    //             }
    //         } else {
    //             recipe = data[1][0]
    //         }
    //     })
    //     .then(() => {
    //         res.status(200).json(recipe)
    //     })
    //     .catch((err) => {
    //         next(err)
    //     });
    // }

    static destroy(req, res){
        Recipe.destroy({
            where: {
                id: +req.params.recipeId
            },
            returning: true
        })
        .then(result => {
            res.status(200).json({message: `Id ${req.params.recipeId} success to delete`})
        })
        .catch(err => {
            res.send(err)
        })
    } 
}


module.exports = RecipeController