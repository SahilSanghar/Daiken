import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
number: {
    type: Number,
    required: true,
},
pass: {
    type: String,
    required: true,
},
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
