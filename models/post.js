"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Post.belongsTo(models.User, { foreignKey: "UserId" });
            // define association here
        }
    }
    Post.init(
        {
            caption: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Caption is required",
                    },
                    notEmpty: {
                        msg: "Caption is required",
                    },
                },
            },
            image: {
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
            status: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Status is required",
                    },
                    notEmpty: {
                        msg: "Status is required",
                    },
                },
            },
            like: {
                type: DataTypes.INTEGER,
            },
            UserId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "UserId is required",
                    },
                    notEmpty: {
                        msg: "UserId is required",
                    },
                },
            },
        },
        {
            sequelize,
            modelName: "Post",
        }
    );
    // Post.addHook("beforeCreate", (post) => {
    //     console.log("masuk hook");
    //     post.status = "Active";
    //     post.like = 0;
    // });
    return Post;
};
