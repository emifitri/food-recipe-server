const { verifyToken } = require("../helpers/jwt");
const {User} = require('../models')

module.exports = {
    authentication (req, res, next) {
        try {
            const { access_token } = req.headers
            
            if(!access_token) {
                next({ status: 401, message: 'please login first!' })
            }
            const decoded = verifyToken(access_token)
            // console.log(decoded, 'ini decoded');
            User.findOne({
                where: {
                    email: decoded.email
                }
            })
            .then((user) => {
                if(user) {
                    req.user = { email: user.email, id: user.id, role: user.role }
                    next()
                } else {
                    throw { status: 401, message: 'please login first!' }
                }
            }).catch((err) => {
                next(err)
            });
        } catch (err) {
            // res.status(500).json(err)
            next(err)
        }
    }
}