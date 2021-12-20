/** @format */

import express from "express"
import cors from "cors"
import Mongoose from "mongoose"
import path from "path"
import uiRoute from "./ui/ui.route"
const app = express()
const port = process.env.PORT || 3000

/* modèles de template */
app.set("view engine", "hbs")
app.use("views", express.static(path.join(__dirname, "views")))
app.use("/assets", express.static(path.join(__dirname, "public")))
/* middleware */
app.use(express.json())
app.use(cors())
app.use("/", uiRoute)

app.listen(port, () => {
	console.log(`Your running app on port ${port}`)
})
