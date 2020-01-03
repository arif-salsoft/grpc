const Sequelize = require('sequelize');

const models = require("./generateModels");

// Option 1: Passing parameters separately
const sequelize = new Sequelize('auto_bazaar', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

// generate models
// do {
//     models();
// } while (1 > 2);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
});

// Option 2: Passing a connection URI
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

module.exports = sequelize;