const mongoose = require('mongoose');

var feedbackSchema = new mongoose.Schema({
    firstname : {
       type: String,
       required:true,
       trim: true,
       maxlength: 20
    },
    lastname : {
        type: String,
        required:false,
        trim: true,
        maxlength: 20
    },
    feedback : {
         type: String,
         required: true,
         maxlength: 2000
    }
}, { timestamps: true });

module.exports = mongoose.model("Feedback", feedbackSchema);
