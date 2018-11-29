/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Chofer', {
      id_chofer: {
        type: DataTypes.NUMBER(),
        allowNull: false,
        primaryKey: true
      },
      nombre: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      jefe: {
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
      tableName: 'Chofer'
    });
  };