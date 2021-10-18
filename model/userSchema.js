import mongoose from 'mongoose';


const userSchema = mongoose.Schema({
    name: String,
    subject: String,
    email: String,
    phone: Number

});

const postUser = mongoose.model('user', userSchema);

export default postUser;