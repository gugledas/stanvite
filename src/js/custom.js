/** @format */

function validateForm(event) {
	"use strict"
	const form = document.getElementById("creerPage")
	event.preventDefault()
	if (!form.checkValidity()) {
		event.stopPropagation()
		form.classList.add("was-validated")
		return false
	}
	return submitForm()
}
function submitForm() {
	console.log("Get form content")
	const champ = document.getElementById("name")
	const valeurChamp = champ.value
	console.log("valeur du champ =>", valeurChamp)
	clearForm()
	return true
}
function clearForm() {
	const champ = document.getElementById("name")
	champ.value = ""
	const form = document.getElementById("creerPage")
	form.classList.remove("was-validated")
}
