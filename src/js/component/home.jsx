import React from "react";




const Home = () => {
	return (
		<div className="text-center">
			<h1 className="game-tittle">Battleship Game</h1>
			<div className="board">
				<div className="player-user">
					{}
				</div>
				<div className="player-pc"></div>
			</div>
		</div>
	);
};

export default Home;
