const db = require('../index.js');

module.exports = {
    UserModel : db.import('./users')
}