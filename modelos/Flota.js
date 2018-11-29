/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Flota', {
      id_flota: {
        type: DataTypes.NUMBER(),
        allowNull: false,
        primaryKey: true
      },
      jefe:{
        type: DataTypes.STRING(255),
        allowNull: false
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
      tableName: 'Flota'
    });
  };