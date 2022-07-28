
const express = require("express");
const cors = require('cors')
const app = express();

//setting
app.set('port', process.env.PORT || 3002)
//middleware
app.use(cors())
app.use(express.json())
//routes
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
})
app.use('/api/users',require('./routes/users') );
app.use('/api/notes',require('./routes/notes') );


module.exports = app;
