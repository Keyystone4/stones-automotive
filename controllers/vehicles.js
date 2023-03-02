const Vehicle = require('../models/vehicle');
const Report = require('../models/report');

module.exports = {
    new: newVehicle,
    create,
    index,
    show,
    delete: deleteVehicle
};

async function deleteVehicle(req, res, next) {
    await Vehicle.deleteOne({_id:req.params.id});
    res.redirect('/vehicles');
}

async function show(req, res) {
    let vehicle = await Vehicle.findOne({'_id': req.params.id})
    .populate('reports')
    .exec(function(err, vehicle) {
        Report.populate(vehicle.reports, 
            { path: 'user' }, function(err, reports) {
            res.render('vehicles/show', { vehicle, reports});
        });
    });
}
function index(req, res) { 
    Vehicle.find({}, function(err, vehicles) {
        res.render('vehicles/index', { vehicles });
    }
)};

function create(req, res) {
    req.body.driveable = !!req.body.driveable;
    const vehicle = new Vehicle(req.body);
    vehicle.save(function(err) {
        if (err) return res.redirect('/vehicles/new');
       
        res.redirect('vehicles/');
    });
}

function newVehicle(req, res) {
    res.render('vehicles/new');
}