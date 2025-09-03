import Mongoose from'mongoose';

const userShema = new Mongoose.Schema({
    username: { 
        type: String, 
        required: [true, "Please Enter Your Valid username"] },
    email: { 
        type: String, 
        required: [true, "Please Enter Your Valid Email"] },
    password: { 
        type: String, 
        required: [true, "Please Enter a Strong Password"] },
    isActive: { 
        type: Boolean, 
        default: false }

});


//ya to user banega direct ya default rahega
const User = Mongoose.model.users || Mongoose.model('users', userShema);

export default User;