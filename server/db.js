const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/nodejs-mongo', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
.then(( res ) => console.log(`Conectado a Mongo`))
.catch(( err ) => console.log(err));