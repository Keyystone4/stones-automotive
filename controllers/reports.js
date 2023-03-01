const Vehicle = require('../models/vehicle');
const Report = require('../models/report');


module.exports = {
    create
}

 async function create(req, res) {

    Vehicle.findById(req.params.id, async function(err, vehicle) {
        req.body.user = req.user;
        let report = await new Report(req.body);
        vehicle.reports.push(report);
        report.save();
        vehicle.save(function(err) {
            res.redirect(`/vehicles/${vehicle.id}`);
        });
    }
)};