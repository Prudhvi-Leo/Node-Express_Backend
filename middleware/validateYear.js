function validate(req,res ,next){
    if(req.query.y && req.query.y === '2024'){
        next()
    }
    else{
        res.send('<b>Old Login</b>');
    }
}

module.exports = validate