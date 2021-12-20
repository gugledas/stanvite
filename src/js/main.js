/** @format */
/* les imports */
import "grapesjs"
//import "./lib/grapesjs-block-
import "grapesjs-blocks-basic"

const editor = grapesjs.init({
	container: "#editor",
	fromElement: true,
	width: "auto",
	storageManager: false,

	blockManager: {
		appendTo: "#blocks"
	},
	styleManager: {
		appendTo: "#style-view",
		sectors: [
			{
				name: "Dimension",
				open: false,
				buildProps: ["width", "min-height", "padding"],
				properties: [
					{
						type: "integer",
						name: "The Width",
						property: "width",
						units: ["px", "%", "rem"],
						defaults: "auto",
						min: 0
					}
				]
			}
		]
	},
	selectorManager: {
		appendTo: "#style-view"
	},
	traitManager: {
		appendTo: "#trait-container"
	},
	layerManager: {
		appendTo: "#layer-container"
	},
	panels: {
		defaults: [
			{
				id: "basic-actions",
				el: ".panel__basic-actions",

				buttons: [
					{
						id: "visibility",
						active: true,
						className: "btn-toggle-borders",
						label: "<i class='fa fa-clone'></i>",
						command: "sw-visibility"
					},
					{
						id: "export",
						className: "btn-open-export",
						label: "<i class='fa fa-code'></i>",
						command: "export-template",
						context: "export-template" // For grouping context of buttons from the same panel
					},
					{
						id: "show-json",
						className: "btn-show-json",
						label: "<i class='fa fa-download'></i>",
						context: "show-json",
						command(editor) {
							editor.Modal.setTitle("Components JSON")
								.setContent(
									`<textarea style="width:100%; height: 250px;">
            ${JSON.stringify(editor.getComponents())}
          </textarea>`
								)
								.open()
						}
					}
				]
			},
			{
				id: "panel-devices",
				el: ".panel__devices",

				buttons: [
					{
						id: "device-desktop",
						label: "<i class='fa fa-television'></i>",
						command: "set-device-desktop",
						active: true,
						togglable: false
					},
					{
						id: "device-tablet",
						label: "<i class='fa fa-tablet'></i>",
						command: "set-device-tablet"
					},
					{
						id: "device-mobile",
						label: "<i class='fa fa-mobile'></i>",
						command: "set-device-mobile"
					}
				]
			}
		]
	},
	deviceManager: {
		devices: [
			{
				name: "Desktop",
				width: ""
			},
			{
				name: "Tablet",
				width: "720",
				widthMedia: "780px"
			},
			{
				name: "Mobile",
				width: "320px",
				widthMedia: "480px"
			}
		]
	},
	plugins: ["gjs-blocks-basic"],
	plunginsOpts: {
		"gjs-blocks-basic": {}
	}
})

const commands = editor.Commands

/* commande pour la gestion de l'affichage sur différents écran */

/* Affichage pour grand écran */
commands.add("set-device-desktop", {
	run: (editor) => editor.setDevice("Desktop")
})

/* Affichage pour Tablet */

commands.add("set-device-tablet", {
	run: (editor) => editor.setDevice("Tablet")
})

/* Affichage pour Mobile */

commands.add("set-device-mobile", {
	run: (editor) => editor.setDevice("Mobile")
})
