const { verify } = require("../helpers/jwt");
const { User, Post } = require("../models");
module.exports = {
    async authentication(req, res, next) {
        try {
            const { access_token } = req.headers;
            // if (!access_token) res.status(400).json({ message: "Please Login First" });
            if (!access_token) throw { status: 400, message: "Please Login First" };
            const decode = verify(access_token);
            let user = await User.findOne({
                where: { email: decode.email },
            });
            if (!user) {
                throw { status: 401, message: "Not Authenticated" };
            } else {
                req.user = {
                    email: user.email,
                    role: user.role,
                    id: user.id,
                };
                next();
            }
        } catch (error) {
            next(error);
        }
    },
    async authorization(req, res, next) {
        try {
            let idPost = req.params.id;
            let post = await Post.findOne({ where: { id: idPost } });
            if (!post) {
                throw { status: 404, message: `Data Not Found` };
            } else {
                let role = req.user.role.toLowerCase();
                switch (role) {
                    case "Admin":
                        next();
                        break;
                    case "Designer":
                        let id = req.user.id;
                        if (post.UserId == id) {
                            next();
                        } else {
                            throw { status: 403, message: "Not Authorized" };
                        }
                        break;
                    default:
                        console.log("=== MASUK");
                        break;
                }
            }
        } catch (error) {
            next(error);
            // switch (error.status) {
            //     case 403:
            //         res.status(404).json(error.message);
            //         break;
            //     case 404:
            //         res.status(404).json(error.message);
            //         break;

            //     default:
            //         res.status(500).json(error);
            //         break;
            // }
        }
    },
    async authenticationCustomer(req, res, next) {
        try {
            const { access_token } = req.headers;
            // if (!access_token) res.status(400).json({ message: "Please Login First" });
            if (!access_token) throw { status: 400, message: "Please Login First" };
            const decode = verify(access_token);
            let user = await UserCustomer.findOne({
                where: { email: decode.email },
            });
            if (!user) {
                throw { status: 401, message: "Not Authenticated" };
            } else {
                req.user = {
                    email: user.email,
                    // role: user.role,
                    id: user.id,
                };
                next();
            }
        } catch (error) {
            next(error);
            // switch (error.status) {
            //     case 401:
            //         res.status(error.status).json(error.message);
            //         break;
            //     default:
            //         res.status(500).json(error);
            //         break;
            // }
        }
    },
};
