const express = require("express")
const app = express()
const dotenv = require("dotenv")

const _PORT = process.env.PORT || 3000
dotenv.config()


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


app.listen(_PORT, () => {
    console.log(`Open Trade Service Started at PORT: ${_PORT}`)
})
