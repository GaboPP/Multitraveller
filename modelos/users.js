/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    nick: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    empresa: {
      type: DataTypes.STRING(255),
      allowNull: false,
      references: {
        model: 'company',
        key: 'rut_empresa'
      }
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    salt: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    jefe: {
      type: DataTypes.INTEGER(1),
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
    tableName: 'users'
  });
};
