const mong = require('mongoose');
require('dotenv').config();

mong.set('strictQuery', true);

export const mongoConnect = async () => {
    try {
        console.log('Connecting to MongoDB...');
        await mong.connect(process.env.MONGO_URL as string,
            {useNewUrlParser: true, useUnifiedTopology: true});        
        console.log('Sucessfully connected')
    } catch (error) {
        console.log('Connection error: ', error)
    }
}

/*
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/frases', {
    useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false
}, () => {
    console.log('Connected to MongoDB');
});
*/