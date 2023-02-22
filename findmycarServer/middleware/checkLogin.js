const jwt=require("jsonwebtoken")
const checkLogin=(req,res,next)=>{
const {authorization}=req.headers;
try {
    const token=authorization.split(" ")[1]
    if(!token){
return
    }
    const decoded=jwt.verify(token,process.env.JWT_SECRET)
    const {username,userId}=decoded
    req.username=username
    req.userId=userId
    next()
} catch (error) {
    res.status(403).json({
        status:"fail",
        error:error.message
    })
}
}
module.exports=checkLogin