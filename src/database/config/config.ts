import mongoose from "mongoose";


interface IConfig { 
    MONGO_URI: string;
    options: { 
        useNewUrlParser: boolean;
        useUnifiedTopology: boolean;
    }
}

const config: IConfig = {
    MONGO_URI: process.env.MONGO_URI || '',
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
}

export default config;