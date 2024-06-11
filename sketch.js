const grid = []
let myGrid, font
let currentRule = 30

let currentS, currentM, currentH
function preload() {
	font = loadFont("font/VCR_OSD_MONO_1.001.ttf")
}
function setup() {
  createCanvas(1430, 770);
	textAlign(CENTER)

//   createGrid(10)
  myGrid = new Grid(10)
  myGrid.setHourMinutes(1, 55)
}

function draw() {
	const currentDate = new Date()
	if(currentS != currentDate.getSeconds()){
		if(currentM != currentDate.getMinutes()) {
			currentM = currentDate.getMinutes()
			currentH = currentDate.getHours()
  			myGrid.setHourMinutes(currentH, currentM)
		}
		currentS = currentDate.getSeconds()
		currentRule = currentS + currentM + currentH

		background(220)
		myGrid.updateAll(currentRule)
		myGrid.display()
		displayTime()
	}
}


function createGrid(size){
	for (let y = 0; y < height/size; y++) {
		for (let x = 0; x < width/size; x++) {
			const newCell = new Cell(x, y, size)
			grid.push(newCell)
		}
		
	}
}

function displayTime() {
	const myPoints = font.textToPoints(doubleDigits(currentH)+":"+doubleDigits(currentM)+":"+doubleDigits(currentS), width*1/10, height*6/10, 250)
	myPoints.forEach(point => {
		const toCollor = myGrid.getCell(Math.round(point.x/10), Math.round(point.y/10))
		toCollor.color = "red"
		toCollor.display()
		toCollor.color = "white"

	});
}