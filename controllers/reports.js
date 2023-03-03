const Vehicle = require('../models/vehicle');
const Report = require('../models/report');


module.exports = {
    create,
    edit,
    update
}

function update(req, res) {
    console.log(req.params);
    Report.findById(req.params.id, function(err, report) {
        console.log('hello', report);
        report.report = req.body.report;
        report.save(function(err) {
          res.redirect(`/vehicles/${req.params.vehicleId}`);
        });
      });
}

function edit(req, res) {
    Vehicle.findOne({'reports._id': req.params.id}, function(err, vehicle) {
        const report = vehicle.report.id(req.params.id);
        res.render('reports/edit', {report});
      });
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