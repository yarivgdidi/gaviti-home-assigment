const mongoose = require('mongoose');

mongoose.connect('customerInvoice:customerInvoice@mongodb://localhost:27017/customerInvoice', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

   console.log('Connected to mongo db' )
});


// mongoose.connection.on('open', function () {
//    mongoose.connection.db.listCollections().toArray(function (err, names) {
//       if (err) console.log(err);
//       else console.log(names);
//    });
// })


module.exports = { db }