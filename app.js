const express = require('express');
const path = require('path');
let app = express();
app.use(express.static('public'));

app.set('view engine','ejs');

app.listen(3000);

app.get('/',(req,res,next) =>{
    res.sendFile(path.join(__dirname,'wordle.html'));
});