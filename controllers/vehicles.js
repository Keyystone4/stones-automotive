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
    Vehicle.findOne({
        'vehicles._id': req.body.id,
        'vehicles.user': req.user._id
      }).then(function(vehicle) {
        if (!vehicle) return res.redirect('/vehicles');
        vehicle.remove(req.body);
        vehicle.save().then(function() {
          res.redirect('/vehicles');
        }).catch(function(err) {
          return next(err);
        });
      });
    await Vehicle.deleteOne({_id:req.params.id});
    
}

async function show(req, res) {
    let vehicle = await Vehicle.findOne({'_id': req.params.id})
    .populate('reports')
    .exec(function(err, vehicle) {
        Report.populate(vehicle.reports, 
            { path: 'user' }, function(err, reports) {
                console.log(reports);
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