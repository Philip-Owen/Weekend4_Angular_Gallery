// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const imagesRouter = require('./routes/images.router');
const app = express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('server/public'));

// routes
app.use('/images', imagesRouter);

// Port Listener
var port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`Server up on port: ${port}`));