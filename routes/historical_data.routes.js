module.exports = (app) => {
    const data = require("../controllers/historical_data/historical_data.js");

    var router = require("express").Router();

    router.get("/historical-data", data.getData)
    
    app.use("/api/v1", router);
};