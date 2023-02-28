const mong = require('mongoose');
require('dotenv').config();

mong.set('strictQuery', true);

export const mongoConnect = async () => {
    try {
        console.log('Conecting to MongoDB...');
        await mong.connect(process.env.MONGO_URL as string,
            {useNewUrlParser: true, useUnifiedTopology: true});        
        console.log('Sucessfully connected')
    } catch (error) {
        console.log('Connection error: ', error)
    }
}