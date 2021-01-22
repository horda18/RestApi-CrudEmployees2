const mongoose = require('mongoose');

const URI = 'mongodb://localhost/rest-api';

mongoose.connect(URI)
    .then(db => console.log('Db is connected'))
    .catch(err => console.err(err));

module.exports = mongoose;