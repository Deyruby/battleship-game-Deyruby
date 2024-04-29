import React, {useState} from "react";
import Ship from "./ships";

const Cpuboard = () => {
const [userFire, setUSerFire] = useState([''])
	const tags = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	const verticalTags = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

	const cpuBoard = [
		[{ coordinate: "1A", color: 'gray' }, { coordinate: "1B", color: 'gray' }, { coordinate: "1C", color: 'gray' }, { coordinate: "1D", color: 'gray' }, { coordinate: "1E", color: 'gray' }, { coordinate: "1F", color: 'gray' }, { coordinate: "1G", color: 'gray' }, { coordinate: "1H", color: 'gray' }, { coordinate: "1I", color: 'gray' }, { coordinate: "1J", color: 'gray' }],
		[{ coordinate: "2A", color: 'gray' }, { coordinate: "2B", color: 'gray' }, { coordinate: "2C", color: 'gray' }, { coordinate: "2D", color: 'gray' }, { coordinate: "2E", color: 'gray' }, { coordinate: "2F", color: 'gray' }, { coordinate: "2G", color: 'gray' }, { coordinate: "2H", color: 'gray' }, { coordinate: "2I", color: 'gray' }, { coordinate: "2J", color: 'gray' }],
		[{ coordinate: "3A", color: 'gray' }, { coordinate: "3B", color: 'gray' }, { coordinate: "3C", color: 'gray' }, { coordinate: "3D", color: 'gray' }, { coordinate: "3E", color: 'gray' }, { coordinate: "3F", color: 'gray' }, { coordinate: "3G", color: 'gray' }, { coordinate: "3H", color: 'gray' }, { coordinate: "3I", color: 'gray' }, { coordinate: "3J", color: 'gray' }],
		[{ coordinate: "4A", color: 'gray' }, { coordinate: "4B", color: 'gray' }, { coordinate: "4C", color: 'gray' }, { coordinate: "4D", color: 'gray' }, { coordinate: "4E", color: 'gray' }, { coordinate: "4F", color: 'gray' }, { coordinate: "4G", color: 'gray' }, { coordinate: "4H", color: 'gray' }, { coordinate: "4I", color: 'gray' }, { coordinate: "4J", color: 'gray' }],
		[{ coordinate: "5A", color: 'gray' }, { coordinate: "5B", color: 'gray' }, { coordinate: "5C", color: 'gray' }, { coordinate: "5D", color: 'gray' }, { coordinate: "5E", color: 'gray' }, { coordinate: "5F", color: 'gray' }, { coordinate: "5G", color: 'gray' }, { coordinate: "5H", color: 'gray' }, { coordinate: "5I", color: 'gray' }, { coordinate: "5J", color: 'gray' }],
		[{ coordinate: "6A", color: 'gray' }, { coordinate: "6B", color: 'gray' }, { coordinate: "6C", color: 'gray' }, { coordinate: "6D", color: 'gray' }, { coordinate: "6E", color: 'gray' }, { coordinate: "6F", color: 'gray' }, { coordinate: "6G", color: 'gray' }, { coordinate: "6H", color: 'gray' }, { coordinate: "6I", color: 'gray' }, { coordinate: "6J", color: 'gray' }],
		[{ coordinate: "7A", color: 'gray' }, { coordinate: "7B", color: 'gray' }, { coordinate: "7C", color: 'gray' }, { coordinate: "7D", color: 'gray' }, { coordinate: "7E", color: 'gray' }, { coordinate: "7F", color: 'gray' }, { coordinate: "7G", color: 'gray' }, { coordinate: "7H", color: 'gray' }, { coordinate: "7I", color: 'gray' }, { coordinate: "7J", color: 'gray' }],
		[{ coordinate: "8A", color: 'gray' }, { coordinate: "8B", color: 'gray' }, { coordinate: "8C", color: 'gray' }, { coordinate: "8D", color: 'gray' }, { coordinate: "8E", color: 'gray' }, { coordinate: "8F", color: 'gray' }, { coordinate: "8G", color: 'gray' }, { coordinate: "8H", color: 'gray' }, { coordinate: "8I", color: 'gray' }, { coordinate: "8J", color: 'gray' }],
		[{ coordinate: "9A", color: 'gray' }, { coordinate: "9B", color: 'gray' }, { coordinate: "9C", color: 'gray' }, { coordinate: "9D", color: 'gray' }, { coordinate: "9E", color: 'gray' }, { coordinate: "9F", color: 'gray' }, { coordinate: "9G", color: 'gray' }, { coordinate: "9H", color: 'gray' }, { coordinate: "9I", color: 'gray' }, { coordinate: "9J", color: 'gray' }],
		[{ coordinate: "10A", color: 'gray' }, { coordinate: "10B", color: 'gray' }, { coordinate: "10C", color: 'gray' }, { coordinate: "10D", color: 'gray' }, { coordinate: "10E", color: 'gray' }, { coordinate: "10F", color: 'gray' }, { coordinate: "10G", color: 'gray' }, { coordinate: "10H", color: 'gray' }, { coordinate: "10I", color: 'gray' }, { coordinate: "10J", color: 'gray' }],
	]

	//First Combination
	const greenBoat = [{ coordinate: "1F", color: 'green' }, { coordinate: "1G", color: 'green' }, { coordinate: "1H", color: 'green' }, { coordinate: "1I", color: 'green' }, { coordinate: "1J", color: 'green' }]
	const greenBoat2= [{ coordinate: "2A", color: 'green' }, { coordinate: "3A", color: 'green' }, { coordinate: "4A", color: 'green' },{ coordinate: "5A", color: 'green' }, { coordinate: "6A", color: 'green' }]
	
	const blueBoat = [{ coordinate: "10A", color: 'blue' }, { coordinate: "10B", color: 'blue' }, { coordinate: "10C", color: 'blue' }, { coordinate: "10D", color: 'blue' }]
	const blueBoat2= [{ coordinate: "2C", color: 'blue' },{ coordinate: "3C", color: 'blue' },{ coordinate: "4C", color: 'blue' },{ coordinate: "5C", color: 'blue' }]
	
	const yellowBoat = [{ coordinate: "4J", color: 'yellow' }, { coordinate: "5J", color: 'yellow' }, { coordinate: "6J", color: 'yellow' }]
	const redBoat = [{ coordinate: "5F", color: 'red' }, { coordinate: "6F", color: 'red' }]
	const purpleBoat = [{ coordinate: "9H", color: 'purple' }]
	
	
	const firstCpuCombination = [...greenBoat, ...blueBoat, ...yellowBoat, ...redBoat, ...purpleBoat,...greenBoat2, ...blueBoat2]

//Second Combination
	const greenBoat3 =[{ coordinate: "5E", color: 'green' }, { coordinate: "6E", color: 'green'}, { coordinate: "7E", color: 'green'}, { coordinate: "8E", color: 'green'}, { coordinate: "9E", color: 'green'} ]
	const blueBoat3= [{ coordinate: "4F", color: 'blue' },{ coordinate: "4G", color: 'blue' },{ coordinate: "4H", color: 'blue' },{ coordinate: "4I", color: 'blue' }]
	const yellowBoat2 = [{ coordinate: "1A", color: 'yellow' }, { coordinate: "2A", color: 'yellow' }, { coordinate: "3A", color: 'yellow' }]
	const redBoat2 = [{ coordinate: "10H", color: 'red' }, { coordinate: "10I", color: 'red' }]
	const purpleBoat2 = [{ coordinate: "9B", color: 'purple' }]

	const secondCombination = [...greenBoat3, ...blueBoat3, ...yellowBoat2, ...redBoat2, ...purpleBoat2]

	//Third Combination
	const greenBoat4=[{ coordinate: "5C", color: 'green' }, { coordinate: "5D", color: 'green'}, { coordinate: "5E", color: 'green'}, { coordinate: "5F", color: 'green'}, { coordinate: "5G", color: 'green'} ]
	const blueBoat4= [{ coordinate: "7J", color: 'blue' },{ coordinate: "8J", color: 'blue' },{ coordinate: "9J", color: 'blue' },{ coordinate: "10J", color: 'blue' }]
	const yellowBoat3 = [{ coordinate: "1D", color: 'yellow' }, { coordinate: "2D", color: 'yellow' }, { coordinate: "3D", color: 'yellow' }]
	
	const redBoat3 = [{ coordinate: "7H", color: 'red' }, { coordinate: "8H", color: 'red' }]
	const redBoat4= [{ coordinate: "10A", color: 'red' }, { coordinate: "10B", color: 'red' }]

    const purpleBoat3 = [{ coordinate: "2F", color: 'purple' }]
	const purpleBoat4 = [{ coordinate: "7E", color: 'purple' }]

	const thirdCombination = [...greenBoat4, ...blueBoat4, ...yellowBoat3, ...redBoat3, ...purpleBoat3,... purpleBoat4, ...redBoat4]


	//Fourth Combination
	const greenBoat4=[{ coordinate: "5C", color: 'green' }, { coordinate: "5D", color: 'green'}, { coordinate: "5E", color: 'green'}, { coordinate: "5F", color: 'green'}, { coordinate: "5G", color: 'green'} ]

	


	/*
const cpuCombination = () => {
	const randomNumber = Math.random()*10 
	if (ramdomNumber === 1) return firstCpuCombiantion
}
*/

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
						{cpuBoard.map((element, key) => {
							return (
								<tr key={key}>
									{
										element.map((item, index) => {
											const currentBoat = thirdCombination.find((boat) => boat.coordinate === item.coordinate )
											const hasBeenShoot = userFire.find((fire) => fire === item.coordinate)
											return <td className={`rows`} style={{backgroundColor: hasBeenShoot ? 'brown' : currentBoat?.color ?? 'gray'}} key={index} />
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
