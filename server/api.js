const express = require('express');
const router = express.Router();
const db = require('./config');
const http = require('http');

router.get('/', (req, res) =>{
    res.send('api works');
});

const Sequelize = require('sequelize')
const Op = Sequelize.Op;
const sequelize = require('./config');
const reportes_fsm4 = sequelize.import('reportes_fsm4', require("../modelos/reportes_fsm4"));
const reports = sequelize.import('reports', require("../modelos/reports"));
const reportes_fsm1 = sequelize.import('reportes_fsm1', require("../modelos/reportes_fsm1"));  
const users = sequelize.import('users', require("../modelos/users"));
const path = require('path');

//Test de conexi´on
sequelize.authenticate().then(() => {
console.log("Conexión establecida");
 }).catch(err => {
console.error("No te puedes conectar: ", err);
});


//select 'Fecha', 'Fuel_used_during_idle','Fuel_used_during_PTO' from reportes where fecha;

router.post('/getreportes_fsm4', (req, res) =>{
    reportes_fsm4.findAll({
                    attributes: ['Fecha','Hora', 'Asset_id', 'Duration_driving', 'Duration_cruise_active', 'Fuel_used_during_idle', 'Duration_PTO', 'Fuel_used_during_PTO'],
                    where:{
                        Fecha: {
                        $between:[req.body.Fecha,req.body.FechaF]},
                        Asset_id: {
                            $between: [req.body.id, req.body.id2]},
                    }}).then(rows => {
    res.status(200).send(rows);
    });
});

//select * from reportes_fsm1 where fecha;
router.post('/getreportes_fsm1', (req, res) =>{
    reportes_fsm1.findAll({attributes: ['Fecha','Hora', 'Asset_id', 'Total_fuel'],
                            where:{
                                Fecha: {
                                $between:[req.body.Fecha,req.body.FechaF]
                                    },
                                    Asset_id: {
                                        $between: [req.body.id, req.body.id2]},
                                }}).then(rows => {
                                res.status(200).send(rows);
                            });
});


router.post('/getreportesb_fsm4', (req, res) =>{
    reportes_fsm4.findAll({
                    attributes: ['Fecha','Hora', 'Asset_id', 'Ts', 'Dev_id', 'Duration_driving', 'Duration_cruise_active', 'Idling_time', 'Fuel_used_during_idle', 'Duration_PTO', 'Fuel_used_during_PTO', 'Number_brake_applications', 'Num_brake_apps', 'Num_clutch_presses', 'dle_duration', 'IDuration_engine_torque', 'Duration_speed', 'Duration_RPM', 'Duration_acceleration' ],
                    where:{
                        Fecha: {
                        $between:[req.body.Fecha,req.body.FechaF]},
                        Asset_id: {
                            $between: [req.body.id, req.body.id2]},
                    }}).then(rows => {
    res.status(200).send(rows);
    });
});

//select * from reportes_fsm1 where fecha;
router.post('/getreportesb_fsm1', (req, res) =>{
    reportes_fsm1.findAll({attributes: ['Fecha','Hora', 'Asset_id', 'Ts', 'Dev_id', 'Odometer', 'Total_fuel', 'Engine_hours', 'Actual_speed', 'Actual_engine_speed', 'Actual_engine_torque', 'Kick_down_switch', 'Accelerator_pedal_position', 'Brake_switch', 'Clutch_switch', 'Cruise_active', 'PTO_active', 'Fuel_level', 'Engine_Temperatura', 'Turbo_pressure', 'Axle_weight_0', 'Axle_weight_1', 'Axle_weight_2', 'Axle_weight_3', 'Service_distance'],
                            where:{
                                Fecha: {
                                $between:[req.body.Fecha,req.body.FechaF]
                                    },
                                    Asset_id: {
                                        $between: [req.body.id, req.body.id2]},
                                }}).then(rows => {
                                res.status(200).send(rows);
                            });
});


//select Fecha,Hora,Actual_speed,Duration_cruise_active,Duration_driving from reportes_fsm1,reportes_fsm4 where asset_id=asset_id;
reportes_fsm1.hasMany(reportes_fsm4,{foreignKey: 'Asset_id'});
reportes_fsm4.belongsTo(reportes_fsm1, {foreignKey: 'Asset_id'});
router.post('/joinreportes_fsm1-4', (req, res) =>{
    reportes_fsm1.findAll({attributes: ['Fecha','Hora', 'Asset_id','Actual_speed','Duration_cruise_active','Duration_driving'],
                            include:[{
                                model: reportes_fsm4,
                                required: false,
                                where: { Asset_id: Sequelize.col('reportes_fsm1.Asset_id')}
                            }],
                            where:{
                                Fecha: {
                                $between:[req.body.Fecha,req.body.FechaF]
                                    },
                                Asset_id: [req.body.id]
                                }}).then(rows => {
                                res.status(200).send(rows);
                            });
});
//

router.post('/getUs3r5', (req, res) =>{
    users.findAll({attributes: ['nick','empresa','nombre','cargo','password'],
                            where:{
                                nick: [req.body.nick],
                                password: [req.body.pass]
                                }}).then(rows => {
                                res.status(200).send(rows);
                            });
});

////API CNE

http.get('http://cne.cloudapi.junar.com/api/v2/datastreams/BENCI-EN-LINEA-V2-80280/data.json/?auth_key=ecafc1015d8bbfa90cb1943dd076377eebe31e14&limit=1817', (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        getapi(data);
    });
}).on("error", (err) => {
   console.log("Error: " + err.message);
});

function getapi(arrayAPI){
    router.get('/APIdata',(req,res)=>{
    res.send(arrayAPI);})
};



module.exports = router;
