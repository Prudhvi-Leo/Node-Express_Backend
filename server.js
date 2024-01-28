const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//static files
app.use(express.static('./public'))
//views
app.set('view engine' , 'ejs')
//Optional if you want to create different folder name 
//app.set('views' ,path.resolve(__dirname) + '\\templates')

//router
const {router } = require('./router/index')
app.use(router)


app.listen(PORT , ()=>{
    console.log(`Listening on port ${PORT}`)
});