"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        let data = require("../dataPost.json").map((data) => {
            data.createdAt = new Date();
            data.updatedAt = new Date();
            /* jika ingin menghapus id yg akan di seed kedalam tabel maka tambahkan delete sebelum return, dan ini agar kita menggunakan increment id secara otomatis */
            delete data.id;
            return data;
        });
        await queryInterface.bulkInsert("Posts", data);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Posts", null, {});
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
