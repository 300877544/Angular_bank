const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bank_server', {
    useNewUrlParser: true
});

const User = mongoose.model('User', {
    accno: String,
    name: String,
    mpin: String,
    balance: {
        type:Number
    },
    history: [{
        id: Number,
        amount: Number,
        typeOfAction: String,
        date: Date
    }]
});

module.exports = {
    User,
}