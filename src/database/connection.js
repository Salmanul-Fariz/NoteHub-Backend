const mongoose = require('mongoose');

const { DATABASE_URL, ATLAS_PASS, ATLAS_URL } = require('../config');

// Connect MogoDB using mongoose
module.exports = async () => {
  try {
    // DeprecationWarning: Mongoose: the `strictQuery` :- to suppress this warning.
    mongoose.set('strictQuery', true);

    if (process.env.NODE_ENV === 'dev') {
      await mongoose.connect(DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    } else {
      const DATABASE = ATLAS_URL.replace('<PASSWORD>', ATLAS_PASS);
      await mongoose.connect(DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }

    console.log('Database Connected');
  } catch (error) {
    console.log('============ DataBase Error ============');
    console.log(error);
  }
};
