module.exports = (err, req, res, next) => {
    let errStatus = err.status || 500
    let errMessage = err
 
    if (err.name === 'SequelizeValidationError') {
      let arrErr = err.errors.map(el => el.message)
 
      errStatus = 400
      errMessage = {
        status: 400,
        message: arrErr
      }
    }
 
    if (err.name === 'SequelizeUniqueConstraintError') {
     let arrErr = err.errors.map(el => el.message)
 
     errStatus = 400
     errMessage = {
       status: 400,
       message: arrErr
     }
   }
 
    res.status(errStatus).json(errMessage)  
 }
 
 