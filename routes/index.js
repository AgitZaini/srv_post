const router = require("express").Router();
// const routerStaff = require("./staff");
const routerUser = require("./public");

// router.use("/", routerStaff);
router.use("/pub", routerUser);

module.exports = router;
