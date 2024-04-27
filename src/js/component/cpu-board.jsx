import React from "react";

const Cpuboard = () => {

	const tags = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	const verticalTags = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

	const cpuBoard = [
		[{ p: "1A", c: true }, { p: "1B", c: true }, { p: "1C", c: true }, { p: "1D", c: true }, { p: "1E", c: true }, { p: "1F", c: false }, { p: "1G", c: false }, { p: "1H", c: false }, { p: "1I", c: false }, { p: "1J", c: true }],
		[{ p: "2A", c: false }, { p: "2B", c: false }, { p: "2C", c: false }, { p: "2D", c: false }, { p: "2E", c: false }, { p: "2F", c: false }, { p: "2G", c: false }, { p: "2H", c: false }, { p: "2I", c: false }, { p: "2J", c: true }],
		[{ p: "3A", c: false }, { p: "3B", c: false }, { p: "3C", c: false }, { p: "3D", c: false }, { p: "3E", c: false }, { p: "3F", c: false }, { p: "3G", c: false }, { p: "3H", c: false }, { p: "3I", c: false }, { p: "3J", c: true }],
		[{ p: "4A", c: false }, { p: "4B", c: false }, { p: "4C", c: false }, { p: "4D", c: true }, { p: "4E", c: true }, { p: "4F", c: true }, { p: "4G", c: false }, { p: "4H", c: false }, { p: "4I", c: false }, { p: "4J", c: true }],
		[{ p: "5A", c: false }, { p: "5B", c: false }, { p: "5C", c: false }, { p: "5D", c: false }, { p: "5E", c: false }, { p: "5F", c: false }, { p: "5G", c: false }, { p: "5H", c: false }, { p: "5I", c: false }, { p: "5J", c: false }],
		[{ p: "6A", c: false }, { p: "6B", c: false }, { p: "6C", c: false }, { p: "6D", c: false }, { p: "6E", c: false }, { p: "6F", c: false }, { p: "6G", c: false }, { p: "6H", c: false }, { p: "6I", c: false }, { p: "6J", c: false }],
		[{ p: "7A", c: true }, { p: "7B", c: false }, { p: "7C", c: false }, { p: "7D", c: false }, { p: "7E", c: false }, { p: "7F", c: false }, { p: "7G", c: false }, { p: "7H", c: false }, { p: "7I", c: false }, { p: "7J", c: false }],
		[{ p: "8A", c: true }, { p: "8B", c: false }, { p: "8C", c: false }, { p: "8D", c: false }, { p: "8E", c: false }, { p: "8F", c: true }, { p: "8G", c: false }, { p: "8H", c: false }, { p: "8I", c: false }, { p: "8J", c: false }],
		[{ p: "9A", c: false }, { p: "9B", c: false }, { p: "9C", c: false }, { p: "9D", c: false }, { p: "9E", c: false }, { p: "9F", c: false }, { p: "9G", c: false }, { p: "9H", c: false }, { p: "9I", c: false }, { p: "9J", c: false }],
		[{ p: "10A", c: false }, { p: "10B", c: false }, { p: "10C", c: false }, { p: "10D", c: false }, { p: "10E", c: false }, { p: "10F", c: false }, { p: "10G", c: false }, { p: "10H", c: false }, { p: "10I", c: false }, { p: "10J", c: false }],
	]

	const cpuShips = [{ p: "1A", c: true }, { p: "1B", c: true }, { p: "1C", c: true }, { p: "6D", c: false }, { p: "6E", c: false }, { p: "6F", c: false }, { p: "6G", c: false }, { p: "10D", c: false }]

	return (
		<>

			<div className="board">
				<div className="vertical-tags">
					{
						verticalTags.map((element, index) => <th className="col-tags" key={index}>{element}</th>)
					}
				</div>
				<table>
					<thead className="table-head">
						{
							tags.map((element, index) => <th className="row-tags" key={index}>{element}</th>)
						}
					</thead>
					<tbody>
						{cpuBoard.map((element) => {
							return (
								<tr>
									{
										element.map((item, index) => <td className="rows" key={index}></td>)
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
