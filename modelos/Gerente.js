/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Gerente', {
      cod_G: {
        type: DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true
      },
      vista_Gerente: {
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
      tableName: 'Gerente'
    });
  };