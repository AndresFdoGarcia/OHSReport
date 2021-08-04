const mongoose = require ('mongoose')


mongoose
    .connect('mongodb://Localhost/mean-employees',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then((db) => console.log('DB is conected'))
    .catch((err) => console.error(err));