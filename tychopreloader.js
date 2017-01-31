<!--//--><![CDATA[//><!--
var images = new Array()

function preload() {
	for (i = 0; i < preload.arguments.length; i++) {
		images[i] = new Image()
		images[i].src = preload.arguments[i]
	}
}
preload(
		"white%20mini.png",
		"Grand%20Central%20Mini.png",
		"Misty%20Richmond%20Mini.png",
		"New%20York%20Mini.png",
		"Snowy%20Mountain%20Mini.png",
		"Yellow%20Grass%20Mini.png"

	)
	//--><!]]>
