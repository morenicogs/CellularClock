class Cell{
	constructor(cordX, cordY, size){
		this.cord = createVector(cordX, cordY)
		this.position = createVector(cordX * size, cordY*size)
		this.size = size
		this.state = 0
		this.color = "white"

		this.prevGen = []
	}

	display(){
		push()
		if(this.state == 0) {
			fill("black")
		} else {
			fill(this.color)
		}
		stroke(this.color)
		square(this.position.x, this.position.y, this.size)
		pop()
	}

	update(rule) {
		const ruleArray = toBinArr(rule, 8)
		const statesArray = this.prevGen.map(cell => cell.state)

		// 111
		if(statesArray[0] == 1 && statesArray[1] == 1 && statesArray[2] == 1) {
			this.state = ruleArray[0]
		}

		// 110
		if(statesArray[0] == 1 && statesArray[1] == 1 && statesArray[2] == 0) {
			this.state = ruleArray[1]
		}
		// 101
		if(statesArray[0] == 1 && statesArray[1] == 0 && statesArray[2] == 1) {
			this.state = ruleArray[2]
		}
		// 100
		if(statesArray[0] == 1 && statesArray[1] == 0 && statesArray[2] == 0) {
			this.state = ruleArray[3]
		}
		// 011
		if(statesArray[0] == 0 && statesArray[1] == 1 && statesArray[2] == 1) {
			this.state = ruleArray[4]
		}
		// 010
		if(statesArray[0] == 0 && statesArray[1] == 1 && statesArray[2] == 0) {
			this.state = ruleArray[5]
		}
		// 001
		if(statesArray[0] == 0 && statesArray[1] == 0 && statesArray[2] == 1) {
			this.state = ruleArray[6]
		}
		// 000
		if(statesArray[0] == 0 && statesArray[1] == 0 && statesArray[2] == 0) {
			this.state = ruleArray[7]
		}

	}
}