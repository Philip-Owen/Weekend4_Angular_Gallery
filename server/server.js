// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const imagesRouter = require('./routes/images.router');
const commentsRouter = require('./routes/comments.router');
const app = express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('server/public'));

// routes
app.use('/images', imagesRouter);
app.use('/comments', commentsRouter);

// Port Listener
var port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`Server up on port: ${port}`));