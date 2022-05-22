"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            User.hasMany(models.Post, { foreignKey: "UserId" });
            // define association here
        }
    }
    User.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Name is required",
                    },
                    notEmpty: {
                        msg: "Name is required",
                    },
                },
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Email is required",
                    },
                    notEmpty: {
                        msg: "Email is required",
                    },
                    isEmail: true,
                },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Password is required",
                    },
                    notEmpty: {
                        msg: "Password is required",
                    },
                },
            },
            role: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Role is required",
                    },
                    notEmpty: {
                        msg: "Role is required",
                    },
                },
            },
            imgUrl: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Image is required",
                    },
                    notEmpty: {
                        msg: "Image is required",
                    },
                },
            },
        },
        {
            sequelize,
            modelName: "User",
        }
    );
    User.addHook("beforeCreate", (user) => {
        user.password = hashPassword(user.password);
    });
    return User;
};
