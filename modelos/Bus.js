/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Bus', {
      id_bus: {
        type: DataTypes.NUMBER(),
        allowNull: false,
        primaryKey: true
      },
      id_flota: {
        type: DataTypes.NUMBER(),
        allowNull: false,
        primaryKey: true
      },
      id_chofer: {
        type: DataTypes.NUMBER(),
        allowNull: false,
        primaryKey: true
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      }
    }, {
      tableName: 'Bus'
    });
  };