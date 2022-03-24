const mongoose = require('mongoose');

// enviroment variables to database 
const { NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE } = process.env;
MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;


// conecting to database
mongoose.connect(MONGODB_URI,{
  useUnifiedTopology: true,
  useNewUrlParser: true
})
.then(db => console.log('database is conected !!'))
.catch(err => console.log(err));