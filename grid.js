class Grid {
	constructor(size) {
		this.cells = []
		this.amountGenerations = height/size
		this.cellsPerGen = width/size
		this.createGrid(size)
	}

	createGrid(size){
		for (let y = 0; y < height/size; y++) {
			for (let x = 0; x < width/size; x++) {
				const newCell = new Cell(x, y, size)
				this.cells.push(newCell)

				if(y > 0) {
					// Left cell
					if(x == 0) {
						newCell.prevGen.push(this.getCell((width/size)-1, y-1))
					} else {
						newCell.prevGen.push(this.getCell(x-1, y-1))

					}

					// Center cell
					newCell.prevGen.push(this.getCell(x, y-1))

					if(x+1 == width/size) {
						newCell.prevGen.push(this.getCell(0, y-1))
					} else {
						newCell.prevGen.push(this.getCell(x+1, y-1))
					}
				}
			}

			
			
		}
	}

	getCell(cordX, cordY) {
		const foundCell = this.cells.find(cell => cell.cord.x == cordX && cell.cord.y == cordY)
		return foundCell
	}

	display() {
		this.cells.forEach(cell => cell.display())
	}

	updateGeneration(generation, rule) {
		const generationCells = this.cells.filter(cell => cell.cord.y == generation)
		generationCells.forEach(cell => cell.update(rule))
	}

	updateAll(rule) {
		for (let g = 1; g < this.amountGenerations; g++) {
			this.updateGeneration(g, rule)
			
		}
	}

	setHourMinutes(h, m) {
		const hArr = toBinArr(h, 5)
		const mArr = toBinArr(m, 6)
		const totalArr = [...hArr, ...mArr]
		const offset = (this.cellsPerGen - totalArr.length)/2
		for (let i = 0; i < totalArr.length; i++) {
			const myCell = this.getCell(offset + i, 0)
			myCell.state = totalArr[i]
			
		}
	}
}