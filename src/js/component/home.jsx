import React, { useState } from "react";
import Userboard from "./user-board";
import Cpuboard from "./cpu-board";





const Home = () => {





	const [userFire, setUserFire] = useState([])
	const [cpuFire, setCpuFire] = useState([])
	const [turn, setTurn] = useState(null)

	const initialState = {

		gameBoard: [
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

		],
		cpuBoardInit: [
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
	}



	return (
		<>
			<h1 className="game-tittle">Battleship Game</h1>
			<div className="tittles">
				<h3 className="user-tittle">User</h3>
				<h3 className="cpu-tittle">CPU</h3>
			</div>
			<div className="total-board">
				<Userboard initialState={initialState} cpuFire={cpuFire} setCpuFire={setCpuFire} turn={turn} setTurn={setTurn} />
				<Cpuboard initialState={initialState} userFire={userFire} setUserFire={setUserFire} turn={turn} setTurn={setTurn} />
			</div>
		</>
	);

};

export default Home;
