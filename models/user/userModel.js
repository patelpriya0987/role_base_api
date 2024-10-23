const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    email:{
        type: String,
        unique: true
    },
    password: String,
    role : {
        type: String,
        enum: ['master', 'principal', 'teacher', 'student'],
        default: 'student'
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

const userModel = mongoose.model('user',userSchema);

module.exports = userModel;