const Feedback = require('./feedbackmodel');

exports.getFeedback = (req,res) => {
    Feedback.find().exec((err, items) => {
        if (err) {
            return res.status(400).json({
                error: "No categories found"
            });
        }
        res.json(items);
    });
}

exports.setFeedback = (req,res) => {
    const feedback = new Feedback(req.body);
    feedback.save((err,feedback)=>{
        if(err){
            return res.status(400).json({
                error: "Not able to save the feedback in the db"
            });
        }
        return res.json({
            feedback
        })
    })
}