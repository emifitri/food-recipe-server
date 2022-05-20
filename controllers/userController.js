const { comparePassword } = require('../helpers/bcrypt');
const { signToken } = require('../helpers/jwt');
const {User} = require('../models')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

class UserController {
    static register (req, res, next) {
        const newUser = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role || "",
            phone: req.body.phone,
            address: req.body.address
        }
        User.create(newUser)
        .then((user) => {
           res.status(201).json({
                id: user.id, 
                email: user.email,
            })
        }).catch((err) => {
            next(err)
            // res.json(err)
        });
    }

    static login (req, res, next) {
        const { email, password } = req.body
        
        User.findOne({ 
            where: { email }
         })
         .then((user) => {
             if (!user) {
                throw {
                    status: 401,
                    message: 'invalid username or email or password'
                } 
             } else {
                 if (comparePassword(password, user.password)){
                     const access_token = signToken({ email: user.email})

                     res.status(200).json({
                         access_token,
                         username: user.username,
                         email: user.email,
                         role: user.role
                     })
                 } else {
                    throw {
                        status: 401,
                        message: 'invalid username or email or password'
                    } 
                 }
             }
         })
         .catch((err) => {
            next(err)
         });
    }

    static googleLogin (req, res, next) {
        const { id_token } = req.body
        let payload

        client.verifyIdToken({
            idToken: id_token,
            audience: process.env.CLIENT_ID
        })
        .then((ticket) => { // mendapatkan data google user login
            //console.log(ticket);
            payload = ticket.getPayload()
            //console.log(payload.email);
            return User.findOne({
                where : {
                    email : payload.email
                }
            })
        })
        .then(user => {
            if (!user) { // jika user tidak ada
                return User.create({
                    username : payload.email.split('@')[0],
                    email : payload.email,
                    password : 'qwerty123',
                    role : 'customer',
                    phone : '082',
                    address : 'jln.'
                })
            } else { // jika user ada
                return user
            }
        })
        .then(data => {
            console.log(data);
            const access_token = sign({ email: data.email})
            res.status(200).json({
                access_token,
                username: data.username,
                email: data.email,
                role: data.role
            })
            
        })
        .catch((err) => {
            next(err)
        });
    }
}

module.exports = UserController