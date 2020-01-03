var SequelizeAuto = require("sequelize-auto");
var auto = new SequelizeAuto("auto_bazaar", "root", "");

const generateModels = () => {
    auto.run(function(err) {
        if (err) throw err;
        console.log(auto.tables); // table list
        console.log(auto.foreignKeys); // foreign key list
    });
};

module.exports = generateModels;