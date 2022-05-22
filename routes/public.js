const router = require("express").Router();
const multer = require("multer");
const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./upload");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "---" + file.originalname);
    },
});
const upload = multer({ storage: fileStorageEngine });
const Controller = require("../controllers/ControllerPub");
// const ControllerAuth = require("../controllers/controllerAuth");
const { authentication, authorization, authenticationCustomer } = require("../middlewares/auth.js");

router.post("/register", Controller.DesignerRegister);
router.post("/login", Controller.login);
router.post("/google-login", Controller.loginGoogle);

router.get("/", Controller.getPost);
router.post("/posting", authentication, upload.single("image"), Controller.addPost);
router.post("/postings", authentication, upload.array("images", 5), Controller.addMultiplePost);
router.get("/profile", authentication, Controller.getProfile);

module.exports = router;
