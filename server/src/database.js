const mongoose = require ('mongoose')


mongoose
    .connect('mongodb+srv://andresp:root1@cluster0.2b8yf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then((db) => console.log('DB is conected'))
    .catch((err) => console.error(err));