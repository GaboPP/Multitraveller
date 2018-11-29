/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reportes_fsm4', {
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
    Duration_driving: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Duration_cruise_active: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Idling_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Fuel_used_during_idle: {
      type: "DOUBLE",
      allowNull: true
    },
    Duration_PTO: {
      type: "DOUBLE",
      allowNull: true
    },
    Fuel_used_during_PTO: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Number_brake_applications: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Num_brake_apps: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Num_clutch_presses: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    dle_duration: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    IDuration_engine_torque: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Duration_speed: {
      type: "DOUBLE",
      allowNull: true
    },
    Duration_RPM: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Duration_acceleration: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'reportes_fsm4'
  });
};
