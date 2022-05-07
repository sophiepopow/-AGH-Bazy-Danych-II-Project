const mongoose = require('mongoose')

const url = "mongodb+srv://Admin:admin1@cluster0.qfhhd.mongodb.net/Warzywniaczek?retryWrites=true&w=majority";

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })


const db = mongoose.connection

module.exports = db
