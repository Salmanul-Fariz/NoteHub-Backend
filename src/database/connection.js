const mongoose = require('mongoose');

const { DATABASE_URL } = require('../config');

// Connect MogoDB using mongoose
module.exports = async () => {
  try {
    // DeprecationWarning: Mongoose: the `strictQuery` :- to suppress this warning.
    mongoose.set('strictQuery', true);

    await mongoose.connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database Connected');
  } catch (error) {
    console.log('============ DataBase Error ============');
    console.log(error);
  }
};
