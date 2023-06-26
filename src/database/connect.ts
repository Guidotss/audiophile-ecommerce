import Config from '@/database/config/config';
import mongoose from 'mongoose';


export const connect = async () => {
    try{
        await mongoose.connect(Config.MONGO_URI, Config.options as mongoose.ConnectOptions);
        console.log('Connected to database');
    }catch(error){ 
        console.log(error);
        mongoose.connection.close();
        throw new Error(`Error connecting to database:${error}`);
    }
}
connect();