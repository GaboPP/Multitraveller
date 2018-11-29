/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Mensajes', {
      id_message: {
        type: DataTypes.NUMBER(),
        allowNull: false,
        primaryKey: true
      },
      message: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      emisor: {
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