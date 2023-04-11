const express = require("express")
const app = express()
const dotenv = require("dotenv")
const morgan = require("morgan");
const logger = require("./logger");
const _PORT = process.env.PORT || 3000
dotenv.config()
app.use(morgan("combined", { stream: logger.stream }));

app.get("/", (req, res, next) => {
    res
    .status(200)
    .json({
        message: "Open Trade API",
        version: "v0.0.1",
        author: "Nidhey Indurkar",
    })
})


require("./routes/historical_data.routes")(app)


const server = app.listen(_PORT, () => {
    // console.log(`Open Trade Service Started at PORT: ${_PORT}`)
    logger.info(`Open Trade Service Started at PORT: ${_PORT}`);
})

module.exports = server
