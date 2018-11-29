/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Jefe_f', {
      cod_JF: {
        type: DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true
      },
      vista_jf: {
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
      tableName: 'Jefe_f'
    });
  };