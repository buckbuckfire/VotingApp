const mongoose = require('mongoose');

mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/vote', { useNewUrlParser: true });

module.exports.User = require('./user');
module.exports.Polls = require('./polls');