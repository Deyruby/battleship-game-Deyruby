import React, { useState } from "react";
import Userboard from "./user-board";
import Cpuboard from "./cpu-board";





const Home = () => {

	const [userFire, setUserFire] = useState([])
	const [cpuFire, setCpuFire] = useState([])
	const [turn, setTurn] = useState(true)



	return (
		<>
			<h1 className="game-tittle">Battleship Game</h1>
			<div className="tittles">
				<h3 className="user-tittle">User</h3>
				<h3 className="cpu-tittle">CPU</h3>
			</div>
			<div className="total-board">
				<Userboard cpuFire={cpuFire} setCpuFire={setCpuFire} turn={turn} setTurn={setTurn} />
				<Cpuboard userFire={userFire} setUserFire={setUserFire} turn={turn} setTurn={setTurn} />
			</div>
		</>
	);

};

export default Home;
