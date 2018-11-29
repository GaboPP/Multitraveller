/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Analista', {
      cod_A: {
        type: DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true
      },
      vista_a: {
        type: DataTypes.BOOLEAN(),
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
      tableName: 'Analista'
    });
  };