const mongoose = require('mongoose')

const URI = process.env.MONGODB_URI ?  process.env.MONGODB_URI :process.env.MONGO_ATLAS

mongoose.connect(URI, {
    useNewUrlParser: true,

})


const conection = mongoose.connection;

conection.once('open', ()=>{
    console.log('Mongoose está conectado')
})