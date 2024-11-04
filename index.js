const express = require("express")
const app = express()
const swaggerUi = require("swagger-ui-express")
const swaggerConfig = require("./swagger.json")
app.listen(8080)

app.use('/',swaggerUi.serve, swaggerUi.setup(swaggerConfig))
