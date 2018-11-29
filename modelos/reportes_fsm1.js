/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reportes_fsm1', {
    Fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Hora: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Asset_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Ts: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Dev_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Odometer: {
      type: "DOUBLE",
      allowNull: true
    },
    Total_fuel: {
      type: "DOUBLE",
      allowNull: true
    },
    Engine_hours: {
      type: "DOUBLE",
      allowNull: true
    },
    Actual_speed: {
      type: "DOUBLE",
      allowNull: true
    },
    Actual_engine_speed: {
      type: "DOUBLE",
      allowNull: true
    },
    Actual_engine_torque: {
      type: "DOUBLE",
      allowNull: true
    },
    Kick_down_switch: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Accelerator_pedal_position: {
      type: "DOUBLE",
      allowNull: true
    },
    Brake_switch: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Clutch_switch: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Cruise_active: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PTO_active: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Fuel_level: {
      type: "DOUBLE",
      allowNull: true
    },
    Engine_Temperatura: {
      type: "DOUBLE",
      allowNull: true
    },
    Turbo_pressure: {
      type: "DOUBLE",
      allowNull: true
    },
    Axle_weight_0: {
      type: "DOUBLE",
      allowNull: true
    },
    Axle_weight_1: {
      type: "DOUBLE",
      allowNull: true
    },
    Axle_weight_2: {
      type: "DOUBLE",
      allowNull: true
    },
    Axle_weight_3: {
      type: "DOUBLE",
      allowNull: true
    },
    Service_distance: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'reportes_fsm1'
  });
};
