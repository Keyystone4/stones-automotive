const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reportSchema = new Schema({
    report: {
        type: String,
        required: true
},
    driveable: Boolean,

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('Report', reportSchema);