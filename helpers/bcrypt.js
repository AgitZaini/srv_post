const bcrypt = require("bcryptjs");

module.exports = {
    hashPassword(password) {
        return bcrypt.hashSync(password);
    },
    comparePassword(password, hash) {
        return bcrypt.compareSync(password, hash);
    },
};
