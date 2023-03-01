const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const vehicleSchema = new Schema({
    year: {
        type: Number,
    },
    make: {
        type: String,
    },
    model: {
        type: String,
    },
    color: {
        type: String,
    },
    services: {
        type: String,
    enum: ['Auto Repair', 'Alignment', 'Batteries', 'Oil Change', 'Tires']
    },
    driveable: Boolean,
    reports: [{
        type: Schema.Types.ObjectId,
    ref: 'Report',
}]
}, { 
    timestamps: true

});


module.exports = mongoose.model('Vehicle', vehicleSchema);