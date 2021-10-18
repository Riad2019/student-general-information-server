import express from 'express';
import mongoose from 'mongoose';
import route from './route/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import DotEnv from 'dotenv';


const app = express();
DotEnv.config();

app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/users',route);

const PORT = process.env.PORT || 8000;

const URL ='mongodb+srv://studentInformation:DCSD1835!@cluster0.vtemd.mongodb.net/studentGeneralInformation?retryWrites=true&w=majority'


mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true}).then(() => { 
    // we need .then because
    //it returns a promise 
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
}).catch((error) => {
    console.log('Error:', error.message)
})
