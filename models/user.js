const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    //array of events id created by the user referenced by the Event model
    createdEvents:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Event'
        }
    ]
    
});

module.exports = mongoose.model('User', userSchema);