import React from "react";
import Userboard from "./user-board";
import Cpuboard from "./cpu-board";





const Home = () => {




	return (
		<>
			<h1 className="game-tittle">Battleship Game</h1>
			<div className="tittles">
			<h3 className="user-tittle">User</h3>
			<h3 className="cpu-tittle">CPU</h3>
			</div>
			<div className="total-board">
			<Userboard/>
			<Cpuboard/>
			</div>
		</>
	);

};

export default Home;
