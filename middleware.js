module.exports=(req,res,next)=>{
    //console.log("reqFilter");
    if(!req.query.age){
        res.send("Please provide your age");
    }
    else if(req.query.age<18){
        res.send("You are under aged");
    }
    else{
        next();
    }
}