const express = require("express")
const multer = require("multer")
const uploadConfig = require("./config/upload")


const SessionController = require("./controllers/SessionControler")
const SpotController = require("./controllers/SpotControler")
const DashboardController = require("./controllers/DashboardControler")
const BookingController = require("./controllers/BookingController")

const routes = express.Router()
const upload = multer(uploadConfig)

routes.post("/sessions", SessionController.store)

routes.get("/spots", SpotController.index)
// Se fosse mais de uma imagem seria upload.array("NOME DO ARRAY")
routes.post("/spots",upload.single("thumbnail"), SpotController.store )

routes.get("/dashboard", DashboardController.show)

routes.post("/spots/:spot_id/bookings",BookingController.store )

module.exports = routes