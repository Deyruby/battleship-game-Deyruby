import { array } from "prop-types";
import React, { useState, useEffect } from "react";

const Userboard = () => {

    const [currentCoordinates, setCurrentCoordinates] = useState('')
    const [userBoardStart, setUserBoardStart] = useState([])
    const [userFire, setUSerFire] = useState([''])




    const tags = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const verticalTags = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

    const gameBoard = [
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


    const functionGreen = (e) => {
        if (userBoardStart.find((position) => position.color === 'green')) {
            alert("SHIP ALREADY EXISTS.")
        }
        else {
            handleBoatGreen(e, 'green', 5)
        }
    }

    const handleBoatGreen = async (event, color, position) => {
        event.preventDefault()

        const coordinates = currentCoordinates.split(',', position)
        if (coordinates.length === 5) {
            const currentBoat = coordinates.map((item) => ({ coordinate: item, color: color }))


            return setUserBoardStart([...userBoardStart, ...currentBoat])
        }
        else {
            alert("You have to write 5 coordinates consecutively")
        }


    }



    const functionBlue = (e) => {
        if (userBoardStart.find((position) => position.color === 'blue')) {
            alert("SHIP ALREADY EXISTS.")
        }
        else {
            handleBoatBlue(e, 'blue', 4)
        }
    }

    const handleBoatBlue = async (event, color, position) => {
        event.preventDefault()

        const coordinates = currentCoordinates.split(',', position)
        if (coordinates.length === 4) {
            const currentBoat = coordinates.map((item) => ({ coordinate: item, color: color }))


            return setUserBoardStart([...userBoardStart, ...currentBoat])
        }
        else {
            alert("You have to write 4 coordinates consecutively")
        }
    }

    const functionYellow = (e) => {
        if (userBoardStart.find((position) => position.color === 'yellow')) {
            alert("SHIP ALREADY EXISTS.")
        }
        else {
            handleBoatYellow(e, 'yellow', 3)
        }
    }

    const handleBoatYellow = async (event, color, position) => {
        event.preventDefault()

        const coordinates = currentCoordinates.split(',', position)
        if (coordinates.length === 3) {
            const currentBoat = coordinates.map((item) => ({ coordinate: item, color: color }))


            return setUserBoardStart([...userBoardStart, ...currentBoat])
        }
        else {
            alert("You have to write 3 coordinates consecutively")
        }


    }

    const functionRed = (e) => {
        if (userBoardStart.find((position) => position.color === 'red')) {
            alert("SHIP ALREADY EXISTS.")
        }
        else {
            handleBoatRed(e, 'red', 2)
        }
    }

    const handleBoatRed= async (event, color, position) => {
        event.preventDefault()

        const coordinates = currentCoordinates.split(',', position)
        if (coordinates.length === 2) {
            const currentBoat = coordinates.map((item) => ({ coordinate: item, color: color }))


            return setUserBoardStart([...userBoardStart, ...currentBoat])
        }
        else {
            alert("You have to write 2 coordinates consecutively")
        }


    }

    const functionPurple = (e) => {
        if (userBoardStart.find((position) => position.color === 'purple')) {
            alert("SHIP ALREADY EXISTS.")
        }
        else {
            handleBoatPurple(e, 'purple', 1)
        }
    }

    const handleBoatPurple= async (event, color, position) => {
        event.preventDefault()

        const coordinates = currentCoordinates.split(',', position)
        if (coordinates.length === 1) {
            const currentBoat = coordinates.map((item) => ({ coordinate: item, color: color }))


            return setUserBoardStart([...userBoardStart, ...currentBoat])
        }
        else {
            alert("You have to write 1 coordinate")
        }


    }





    return (
        <>

            <div className="board">
                <div className="container-buttons">
                    <p className="tittle-input">Write the coordinates to position your ships on the board</p>
                    <input type="text" className="input" name="coordinate" placeholder="Example 3A,3B,3C" onChange={(e) => setCurrentCoordinates(e.target.value)} />
                    <div className="container-green">
                        <button className="green-button" onClick={(e) => functionGreen(e)}>Position Green Ship</button>
                        <p className="p-green">Has 5 Coordinates</p>
                    </div>
                    <div className="container-blue">
                        <button className="blue-button" onClick={(e) => functionBlue(e, 'blue', 4)}>Position Blue Ship</button>
                        <p className="p-blue">Has 4 Coordinates</p>
                    </div>
                    <div className="container-yellow">
                        <button className="yellow-button" onClick={(e) => functionYellow(e, 'yellow', 3)}>Position Yellow Ship</button>
                        <p className="p-yellow">Has 3 Coordinates</p>
                    </div>
                    <div className="container-red">
                        <button className="red-button" onClick={(e) => functionRed(e, 'red', 2)}>Position Red Ship</button>
                        <p className="p-red">Has 2 Coordinates</p>
                    </div>
                    <div className="container-purple">
                        <button className="purple-button" onClick={(e) => functionPurple(e, 'purple', 1)}>Position Purple Ship</button>
                        <p className="p-purple">Has 1 Coordinate</p>
                    </div>
                </div>
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
                        {gameBoard.map((element, keyValue) => {
                            return (
                                <tr key={keyValue}>
                                    {
                                        element.map((item, index) => {
                                            const currentPosition = userBoardStart.find((position) => position.coordinate === item.coordinate)
                                            console.log('CURRENTPOSITION', currentPosition)
                                            //const hasBeenShoot = userFire.find((fire) => fire === item.coordinate)

                                            return <td className={`rows`} style={{ backgroundColor: currentPosition ? currentPosition.color : item.color }} key={index} />
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

export default Userboard;
