const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const sequelize = new Sequelize('multitraveller', 'root', 'admin',{
    timezone : "-03:00",
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: {$between: Op.between},
    define: {
        defaultScope:{
            attributes:{
                exclude: ['createdAt','updatedAt']
            }
        }
    }
});
// Recuerden que el JSON de conexi´on se puede dejar en un archivo aparte

module.exports = sequelize