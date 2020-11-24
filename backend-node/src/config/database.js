const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/todo';
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

mongoose.connect(url, options);

module.exports = mongoose;