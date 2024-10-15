const jwt = require('jsonwebtoken');


const verifyToken = async(req,res,next) => {
    try{
        let token = req.headers.authorization
        if(!token) return res.status(401).json({msg:"Access denied. No token"})

            let newtoken = token.slice(7);
           
            jwt.verify(newtoken,"juliforam",(err,record)=>{
                if(err){
                    return res.status(404).send({
                        success : false,
                        message: "Invalid token",
                    })
                }
                req.user = record
                return next();
            })
        
        
    }catch(err){
        console.log(err);
        return false;
        
    }
}


module.exports = {
    verifyToken
}