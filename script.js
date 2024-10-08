const canvas = document.querySelector("#draw")
const ctx = canvas.getContext("2d")
const select = document.getElementById("filter")
const range = document.getElementById("width")
const color = document.getElementById("color")
// const barf = document.getElementById("barf")
// const barfLabel = document.getElementById("barfLabel")

console.log(window.location.href)

let val = "none"
let rangeVal = 40
// let barfMode = false

function handleSelectChange() {
	val = select.value
	if (val == 'none') ctx.filter = "none"
	else if (val == 'blur') ctx.filter = "blur(6px)"
	else if (val == 'drop') ctx.filter = "drop-shadow(30px 30px 5px)"
	else if (val == 'saturate') ctx.filter = "saturate(7)"
	else if (val == 'sepia') ctx.filter = "sepia(1)"
	else if (val == 'lowc') ctx.filter = "contrast(.2)"
	else if (val == 'highc') ctx.filter = "contrast(7)"
	else ctx.filter = "grayscale(1)"
}
function handleRangeChange() {
	ctx.lineWidth = range.value
}
function handleColorChange() {
	ctx.strokeStyle = color.value
}
// function handleBarfChange() {
// 	console.timeLog
// 	if (barf.value=="on"){barfMode=true}
// 	else {barfMode=false}
// }
function putImage() {
	var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
	// let output = buffer.Buffer.from(image).toString('base64');
	// console.log(output)
	var pos = image.length;
	image = image.substr(0, pos < 0 ? image.length : pos)
	window.open(image,"_blank")
	alert("the image has no extension, but is .png")
}

select.addEventListener("change", handleSelectChange)
range.addEventListener("change", handleRangeChange)
color.addEventListener("change", handleColorChange)
barf.addEventListener("change", handleBarfChange)


if (val == 'none') ctx.filter = ""
else if (val == 'blur') ctx.filter = "blur(6px)"
else if (val == 'drop') ctx.filter = "drop-shadow(30px 30px 5px)"
else ctx.filter = "grayscale(1)"

function getRandomInt(max) {
	return (Math.floor(Math.random() * max)) + 1
}
function getRandomInt0(max) {
	return (Math.floor(Math.random() * max))
} console.log(filter)
function clearCanvas(){
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

canvas.width = window.innerWidth - (window.innerWidth / 14)
canvas.height = window.innerHeight
// ctx.strokeStyle = "#" + (getRandomInt0(256)).toString(16) + (getRandomInt0(256)).toString(16) + (getRandomInt0(256)).toString(16);
ctx.lineJoin = "round"
ctx.lineCap = "round"
ctx.lineWidth = 40
ctx.fillStyle = "white"
// ctx.filter = filter
// ctx.filter = "drop-shadow(30px 30px 5px)"
//ctx.filter = "blur(6px)"
//ctx.filter = "grayscale(1)"

let isDrawing = false
let lastX = 0
let lastY = 0

function draw(e) {
	// if (barfMode){
	// 	barfLabel.style.animationPlayState="active"
	// }
	// else {
	// 	barfLabel.style.animationPlayState="paused"
	// }
	ctx.strokeStyle = color.value
	if (!isDrawing) return
	//console.log(e)
	// ctx.lineWidth = getRandomInt(20)
	// if (ctx.lineWidth <= 9) { ctx.lineWidth = 10 }
	//console.log(ctx)
	// ctx.strokeStyle = "#" + (getRandomInt0(255)).toString(16) + (getRandomInt0(255)).toString(16) + (getRandomInt0(255)).toString(16) + "ff";
	//console.log(ctx.strokeStyle)
	ctx.beginPath()
	ctx.moveTo(lastX, lastY)
	ctx.lineTo(e.offsetX, e.offsetY)
	ctx.stroke()
	lastX = e.offsetX
	lastY = e.offsetY
}

canvas.addEventListener("mousemove", draw)
canvas.addEventListener("mousedown", (e) => {
	isDrawing = true
	lastX = e.offsetX
	lastY = e.offsetY
})
canvas.addEventListener("mouseup", () => isDrawing = false)
canvas.addEventListener("mouseout", () => isDrawing = false)