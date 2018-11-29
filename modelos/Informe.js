/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Informe', {
      id_informe: {
        type: DataTypes.NUMBER(),
        allowNull: false,
        primaryKey: true
      },
      contenido:{
        type: DataTypes.TEXT(),
        allowNull: false
      },
      autor:{
        type: DataTypes.STRING(255),
        allowNull: false
      },
      supervisor:{
        type: DataTypes.STRING(255),
        allowNull: false
      },      
      jefeFlota:{
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
      tableName: 'Informe'
    });
  };