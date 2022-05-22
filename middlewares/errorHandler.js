module.exports = {
    errorHandler(err, req, res, next) {
        let errorStatus = err.status || 500;
        let errorMessage = err;

        if (err.name === "SequelizeValidationError") {
            err = err.errors.map((el) => {
                return el.message;
            });
            res.status(400).json(err);
        } else if (err.name === "SequelizeUniqueConstraintError") {
            err = err.errors.map((el) => {
                return el.message;
            });
            res.status(400).json(err);
        } else {
            console.log(err);
            res.status(errorStatus).json(errorMessage);
        }
    },
};
