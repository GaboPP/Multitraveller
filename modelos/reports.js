/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reports', {
    Report_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Ts: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Hora_ts: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Asset_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Dev_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Server_timestamp: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hora_serv_timestamp: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Frame_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Latitude: {
      type: "DOUBLE",
      allowNull: true
    },
    Longitude: {
      type: "DOUBLE",
      allowNull: true
    },
    Speed: {
      type: "DOUBLE",
      allowNull: true
    },
    Heading: {
      type: "DOUBLE",
      allowNull: true
    },
    GPS_fixed: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Satellites: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Power_volt: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Backup_volt: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'reports'
  });
};
