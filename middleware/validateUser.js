function validation(req,res,next){
    const userId = getDataFromDB();
    if(req.query.userId && userId === req.query.userId){
        next();
    }
    else{
        res.send(`<b>Unauthroised Login</b>`);
    }
}

function getDataFromDB(){
    return `1234567`
}

module.exports = validation