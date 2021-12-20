/** @format */

import express from "express"
const uiRoute = express.Router()

uiRoute.use(function (req, res, next) {
	console.log("%s %s %s", req.method, req.url, req.path)
	next()
})

uiRoute.get("/", (request, response) => {
	response.render("home", { title: "STANVITE Home" })
})
uiRoute.get("/editor", (request, response) => {
	response.render("editor", { title: "STANVITE Editor" })
})

uiRoute.get("*", (req, res) => {
	res.render("404")
})

module.exports = uiRoute
