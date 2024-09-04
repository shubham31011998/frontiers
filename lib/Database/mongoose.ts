import mongoose, { Mongoose } from 'mongoose';
import { cache } from 'react';

const MONGO_DB_URL = process.env.MONGODB_URL;

interface MongooseConnection{
    conn: Mongoose | null;
    promise:Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if(!cached){
    cached = (global as any).mongoose = {
        conn: null,
        promise: null
    }
}

export const connectToDatabase = async () =>{
    if(cached.conn) return cached.conn

    if(!MONGO_DB_URL) throw new Error('Missing MONGO_DB_URL!');

    cached.promise = cached.promise || mongoose.connect(MONGO_DB_URL,{
        dbName:"webfrontiers",
        bufferCommands:false
    })

    cached.conn = await cached.promise

    return cached.conn
}