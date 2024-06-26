import React, { useState, useEffect } from "react";



const Cpuboard = ({ userFire, setUserFire, turn, setTurn }) => {


	const cpuBoardInit = [
		[{ coordinate: "1A", ocupation: 0, color: 'gray' }, { coordinate: "1B", ocupation: 0, color: 'gray' }, { coordinate: "1C", ocupation: 0, color: 'gray' }, { coordinate: "1D", ocupation: 0, color: 'gray' }, { coordinate: "1E", ocupation: 0, color: 'gray' }, { coordinate: "1F", ocupation: 0, color: 'gray' }, { coordinate: "1G", ocupation: 0, color: 'gray' }, { coordinate: "1H", ocupation: 0, color: 'gray' }, { coordinate: "1I", ocupation: 0, color: 'gray' }, { coordinate: "1J", ocupation: 0, color: 'gray' }],
		[{ coordinate: "2A", ocupation: 0, color: 'gray' }, { coordinate: "2B", ocupation: 0, color: 'gray' }, { coordinate: "2C", ocupation: 0, color: 'gray' }, { coordinate: "2D", ocupation: 0, color: 'gray' }, { coordinate: "2E", ocupation: 0, color: 'gray' }, { coordinate: "2F", ocupation: 0, color: 'gray' }, { coordinate: "2G", ocupation: 0, color: 'gray' }, { coordinate: "2H", ocupation: 0, color: 'gray' }, { coordinate: "2I", ocupation: 0, color: 'gray' }, { coordinate: "2J", ocupation: 0, color: 'gray' }],
		[{ coordinate: "3A", ocupation: 0, color: 'gray' }, { coordinate: "3B", ocupation: 0, color: 'gray' }, { coordinate: "3C", ocupation: 0, color: 'gray' }, { coordinate: "3D", ocupation: 0, color: 'gray' }, { coordinate: "3E", ocupation: 0, color: 'gray' }, { coordinate: "3F", ocupation: 0, color: 'gray' }, { coordinate: "3G", ocupation: 0, color: 'gray' }, { coordinate: "3H", ocupation: 0, color: 'gray' }, { coordinate: "3I", ocupation: 0, color: 'gray' }, { coordinate: "3J", ocupation: 0, color: 'gray' }],
		[{ coordinate: "4A", ocupation: 0, color: 'gray' }, { coordinate: "4B", ocupation: 0, color: 'gray' }, { coordinate: "4C", ocupation: 0, color: 'gray' }, { coordinate: "4D", ocupation: 0, color: 'gray' }, { coordinate: "4E", ocupation: 0, color: 'gray' }, { coordinate: "4F", ocupation: 0, color: 'gray' }, { coordinate: "4G", ocupation: 0, color: 'gray' }, { coordinate: "4H", ocupation: 0, color: 'gray' }, { coordinate: "4I", ocupation: 0, color: 'gray' }, { coordinate: "4J", ocupation: 0, color: 'gray' }],
		[{ coordinate: "5A", ocupation: 0, color: 'gray' }, { coordinate: "5B", ocupation: 0, color: 'gray' }, { coordinate: "5C", ocupation: 0, color: 'gray' }, { coordinate: "5D", ocupation: 0, color: 'gray' }, { coordinate: "5E", ocupation: 0, color: 'gray' }, { coordinate: "5F", ocupation: 0, color: 'gray' }, { coordinate: "5G", ocupation: 0, color: 'gray' }, { coordinate: "5H", ocupation: 0, color: 'gray' }, { coordinate: "5I", ocupation: 0, color: 'gray' }, { coordinate: "5J", ocupation: 0, color: 'gray' }],
		[{ coordinate: "6A", ocupation: 0, color: 'gray' }, { coordinate: "6B", ocupation: 0, color: 'gray' }, { coordinate: "6C", ocupation: 0, color: 'gray' }, { coordinate: "6D", ocupation: 0, color: 'gray' }, { coordinate: "6E", ocupation: 0, color: 'gray' }, { coordinate: "6F", ocupation: 0, color: 'gray' }, { coordinate: "6G", ocupation: 0, color: 'gray' }, { coordinate: "6H", ocupation: 0, color: 'gray' }, { coordinate: "6I", ocupation: 0, color: 'gray' }, { coordinate: "6J", ocupation: 0, color: 'gray' }],
		[{ coordinate: "7A", ocupation: 0, color: 'gray' }, { coordinate: "7B", ocupation: 0, color: 'gray' }, { coordinate: "7C", ocupation: 0, color: 'gray' }, { coordinate: "7D", ocupation: 0, color: 'gray' }, { coordinate: "7E", ocupation: 0, color: 'gray' }, { coordinate: "7F", ocupation: 0, color: 'gray' }, { coordinate: "7G", ocupation: 0, color: 'gray' }, { coordinate: "7H", ocupation: 0, color: 'gray' }, { coordinate: "7I", ocupation: 0, color: 'gray' }, { coordinate: "7J", ocupation: 0, color: 'gray' }],
		[{ coordinate: "8A", ocupation: 0, color: 'gray' }, { coordinate: "8B", ocupation: 0, color: 'gray' }, { coordinate: "8C", ocupation: 0, color: 'gray' }, { coordinate: "8D", ocupation: 0, color: 'gray' }, { coordinate: "8E", ocupation: 0, color: 'gray' }, { coordinate: "8F", ocupation: 0, color: 'gray' }, { coordinate: "8G", ocupation: 0, color: 'gray' }, { coordinate: "8H", ocupation: 0, color: 'gray' }, { coordinate: "8I", ocupation: 0, color: 'gray' }, { coordinate: "8J", ocupation: 0, color: 'gray' }],
		[{ coordinate: "9A", ocupation: 0, color: 'gray' }, { coordinate: "9B", ocupation: 0, color: 'gray' }, { coordinate: "9C", ocupation: 0, color: 'gray' }, { coordinate: "9D", ocupation: 0, color: 'gray' }, { coordinate: "9E", ocupation: 0, color: 'gray' }, { coordinate: "9F", ocupation: 0, color: 'gray' }, { coordinate: "9G", ocupation: 0, color: 'gray' }, { coordinate: "9H", ocupation: 0, color: 'gray' }, { coordinate: "9I", ocupation: 0, color: 'gray' }, { coordinate: "9J", ocupation: 0, color: 'gray' }],
		[{ coordinate: "10A", ocupation: 0, color: 'gray' }, { coordinate: "10B", ocupation: 0, color: 'gray' }, { coordinate: "10C", ocupation: 0, color: 'gray' }, { coordinate: "10D", ocupation: 0, color: 'gray' }, { coordinate: "10E", ocupation: 0, color: 'gray' }, { coordinate: "10F", ocupation: 0, color: 'gray' }, { coordinate: "10G", ocupation: 0, color: 'gray' }, { coordinate: "10H", ocupation: 0, color: 'gray' }, { coordinate: "10I", ocupation: 0, color: 'gray' }, { coordinate: "10J", ocupation: 0, color: 'gray' }],
	]



	const [cpuBoard, setCpuBoard] = useState(cpuBoardInit)
	const [ships, setShips] = useState([])



	const tags = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	const verticalTags = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

	//First Combination
	const greenBoat1 = [{ coordinate: "1F", ocupation: 5, color: 'gray' }, { coordinate: "1G", ocupation: 5, color: 'gray' }, { coordinate: "1H", ocupation: 5, color: 'gray' }, { coordinate: "1I", ocupation: 5, color: 'gray' }, { coordinate: "1J", ocupation: 5, color: 'gray' }]
	const blueBoat1 = [{ coordinate: "10A", ocupation: 4, color: 'gray' }, { coordinate: "10B", ocupation: 4, color: 'gray' }, { coordinate: "10C", ocupation: 4, color: 'gray' }, { coordinate: "10D", ocupation: 4, color: 'gray' }]
	const yellowBoat1 = [{ coordinate: "4J", ocupation: 3, color: 'gray' }, { coordinate: "5J", ocupation: 3, color: 'gray' }, { coordinate: "6J", ocupation: 3, color: 'gray' }]
	const redBoat1 = [{ coordinate: "5F", ocupation: 2, color: 'gray' }, { coordinate: "6F", ocupation: 2, color: 'gray' }]
	const purpleBoat1 = [{ coordinate: "9H", ocupation: 1, color: 'gray' }]


	const firstCpuCombination = [...greenBoat1, ...blueBoat1, ...yellowBoat1, ...redBoat1, ...purpleBoat1]

	//Second Combination
	const greenBoat2 = [{ coordinate: "5E", ocupation: 5, color: 'gray' }, { coordinate: "6E", ocupation: 5, color: 'gray' }, { coordinate: "7E", ocupation: 5, color: 'gray' }, { coordinate: "8E", ocupation: 5, color: 'gray' }, { coordinate: "9E", ocupation: 5, color: 'gray' }]
	const blueBoat2 = [{ coordinate: "4F", ocupation: 4, color: 'gray' }, { coordinate: "4G", ocupation: 4, color: 'gray' }, { coordinate: "4H", ocupation: 4, color: 'gray' }, { coordinate: "4I", ocupation: 4, color: 'gray' }]
	const yellowBoat2 = [{ coordinate: "1A", ocupation: 3, color: 'gray' }, { coordinate: "2A", ocupation: 3, color: 'gray' }, { coordinate: "3A", ocupation: 3, color: 'gray' }]
	const redBoat2 = [{ coordinate: "10H", ocupation: 2, color: 'gray' }, { coordinate: "10I", ocupation: 2, color: 'gray' }]
	const purpleBoat2 = [{ coordinate: "9B", ocupation: 1, color: 'gray' }]

	const secondCpuCombination = [...greenBoat2, ...blueBoat2, ...yellowBoat2, ...redBoat2, ...purpleBoat2]

	//Third Combination
	const greenBoat3 = [{ coordinate: "5C", ocupation: 5, color: 'gray' }, { coordinate: "5D", ocupation: 5, color: 'gray' }, { coordinate: "5E", ocupation: 5, color: 'gray' }, { coordinate: "5F", ocupation: 5, color: 'gray' }, { coordinate: "5G", ocupation: 5, color: 'gray' }]
	const blueBoat3 = [{ coordinate: "7J", ocupation: 4, color: 'gray' }, { coordinate: "8J", ocupation: 4, color: 'gray' }, { coordinate: "9J", ocupation: 4, color: 'gray' }, { coordinate: "10J", ocupation: 4, color: 'gray' }]
	const yellowBoat3 = [{ coordinate: "1D", ocupation: 3, color: 'gray' }, { coordinate: "2D", ocupation: 3, color: 'gray' }, { coordinate: "3D", ocupation: 3, color: 'gray' }]
	const redBoat3 = [{ coordinate: "7H", ocupation: 2, color: 'gray' }, { coordinate: "8H", ocupation: 2, color: 'gray' }]
	const purpleBoat3 = [{ coordinate: "2F", ocupation: 1, color: 'gray' }]

	const thirdCpuCombination = [...greenBoat3, ...blueBoat3, ...yellowBoat3, ...redBoat3, ...purpleBoat3]


	//Fourth Combination
	const greenBoat4 = [{ coordinate: "6B", ocupation: 5, color: 'gray' }, { coordinate: "7B", ocupation: 5, color: 'gray' }, { coordinate: "8B", ocupation: 5, color: 'gray' }, { coordinate: "9B", ocupation: 5, color: 'gray' }, { coordinate: "10B", ocupation: 5, color: 'gray' }]
	const blueBoat4 = [{ coordinate: "4D", ocupation: 4, color: 'gray' }, { coordinate: "4E", ocupation: 4, color: 'gray' }, { coordinate: "4F", ocupation: 4, color: 'gray' }, { coordinate: "4G", ocupation: 4, color: 'gray' }]
	const yellowBoat4 = [{ coordinate: "7E", ocupation: 3, color: 'gray' }, { coordinate: "8E", ocupation: 3, color: 'gray' }, { coordinate: "9E", ocupation: 3, color: 'gray' }]
	const redBoat4 = [{ coordinate: "2A", ocupation: 2, color: 'gray' }, { coordinate: "2B", ocupation: 2, color: 'gray' }]
	const purpleBoat4 = [{ coordinate: "10I", ocupation: 1, color: 'gray' }]

	const fourthCpuCombination = [...greenBoat4, ...blueBoat4, ...yellowBoat4, ...redBoat4, ...purpleBoat4]

	//Fifth Combination
	const greenBoat5 = [{ coordinate: "6J", ocupation: 5, color: 'gray' }, { coordinate: "7J", ocupation: 5, color: 'gray' }, { coordinate: "8J", ocupation: 5, color: 'gray' }, { coordinate: "9J", ocupation: 5, color: 'gray' }, { coordinate: "10J", ocupation: 5, color: 'gray' }]
	const blueBoat5 = [{ coordinate: "1D", ocupation: 4, color: 'gray' }, { coordinate: "1E", ocupation: 4, color: 'gray' }, { coordinate: "1F", ocupation: 4, color: 'gray' }, { coordinate: "1G", ocupation: 4, color: 'gray' }]
	const yellowBoat5 = [{ coordinate: "2H", ocupation: 3, color: 'gray' }, { coordinate: "3H", ocupation: 3, color: 'gray' }, { coordinate: "4H", ocupation: 3, color: 'gray' }]
	const redBoat5 = [{ coordinate: "5E", ocupation: 2, color: 'gray' }, { coordinate: "6E", ocupation: 2, color: 'gray' }]
	const purpleBoat5 = [{ coordinate: "4A", ocupation: 1, color: 'gray' }]

	const fifthCpuCombination = [...greenBoat5, ...blueBoat5, ...yellowBoat5, ...redBoat5, ...purpleBoat5]



	const cpuCombination = () => {
		const randomNumber = Math.floor(Math.random() * 5) + 1
		let cpuBoardStart = []
		if (randomNumber === 1) cpuBoardStart = (firstCpuCombination)
		if (randomNumber === 2) cpuBoardStart = (secondCpuCombination)
		if (randomNumber === 3) cpuBoardStart = (thirdCpuCombination)
		if (randomNumber === 4) cpuBoardStart = (fourthCpuCombination)
		if (randomNumber === 5) cpuBoardStart = (fifthCpuCombination)

		const shipsArrayCoordinates = cpuBoardStart?.map((element) => element.coordinate)
		setShips(shipsArrayCoordinates)




		let variable = cpuBoardInit?.map((row) => {
			return row?.map((item) => {

				const currentBoat = cpuBoardStart.find((boat) => boat.coordinate === item.coordinate)
				if (currentBoat) {
					return currentBoat
				}
				else {
					return item
				}

			})
		})
		setCpuBoard(variable)

	}

	const fire = (item, key, index) => {
		const currentBox = cpuBoard[key][index]
		let cpuBoardStyle = [...cpuBoard]

		if (currentBox.ocupation !== 0) {
			if (currentBox.ocupation === 5) cpuBoardStyle[key][index].color = 'green'
			if (currentBox.ocupation === 4) cpuBoardStyle[key][index].color = 'blue'
			if (currentBox.ocupation === 3) cpuBoardStyle[key][index].color = 'yellow'
			if (currentBox.ocupation === 2) cpuBoardStyle[key][index].color = 'red'
			if (currentBox.ocupation === 1) cpuBoardStyle[key][index].color = 'purple'
		}
		else {
			cpuBoardStyle[key][index].color = 'brown'

		}

		setUserFire([...userFire, item.coordinate])
		setCpuBoard(cpuBoardStyle)
	}



	const theTurn = (item, key, index) => {
		if (turn && !userFire.includes(item.coordinate)) {
			fire(item, key, index)
			setTurn(false)
		}
		else {
			if (turn && userFire.includes(item.coordinate)) alert('Shooted, select another target')

		}
	}


	const toSeeThewinner = () => {
		let container = ships.every((element) => userFire.includes(element))

		if (container) {
			alert('USER won the game')
			setTurn(null)


		}

	}

	useEffect(() => {
		if (turn) {
			toSeeThewinner()
		}

		if (turn === null) {
			setCpuBoard(cpuBoardInit)
			cpuCombination()
			setUserFire([])


		}

	}, [turn])



	console.log('TURNO', turn)
	return (
		<>
			<div className="board">
				<div className="vertical-tags">
					{
						tags.map((element, index) => <th className="col-tags" key={index}>{element}</th>)
					}
				</div>
				<table>
					<thead className="table-head">
						{
							verticalTags.map((element, index) => <th className="row-tags" key={index}>{element}</th>)
						}
					</thead>
					<tbody>
						{cpuBoard?.map((element, key) => {
							return (
								<tr key={key}>
									{
										element.map((item, index) => {

											return <td className={`rows`} onClick={() => theTurn(item, key, index)} style={{ backgroundColor: item.color }} key={index} ></td>

										})
									}
								</tr>)
						})}
					</tbody>
				</table>
			</div>
		</>
	);

};

export default Cpuboard;
