import mongoose, {ConnectOptions} from 'mongoose';
import config from './config';

(async () => {
  try {
    const mongooseOption: ConnectOptions = {
        useUnifiedTopology: true ,
        useNewUrlParser: true,
        // user: config.MONGO_USER,
        // pass: config.MONGO_PASSWORD
    }
    const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`, mongooseOption);
    console.log('database is conected:' , db.connection.name);
  } catch (error) {
      console.log(error);
  }
})()