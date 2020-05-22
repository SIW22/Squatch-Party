const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/big-foot';


mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.log(err);
  });



module.exports = {
    User: require('./User')
  };
  