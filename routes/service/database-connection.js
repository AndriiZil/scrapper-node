const mongoose = require('mongoose');

class DatabaseConnection {

  async connect() {
    try {
      await mongoose.connect('mongodb+srv://newUser:4dxj1lfEq47cxNow@cluster0-zxmde.mongodb.net/parser', {
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      });

      console.log('DATABASE CONNECTED');
    } catch (error) {
      console.log(error);
    }
  }

}

module.exports = new DatabaseConnection();