
import React, { useState, useEffect } from "react";


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

const Userboard = ({ cpuFire, setCpuFire, turn, setTurn }) => {
    console.log('CPUFIRE', cpuFire)

    const tags = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const verticalTags = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

    const coordinates = tags.flatMap(element1 => {
        return verticalTags.map(element2 => {
            return element1 + element2

        })
    })

    const [currentCoordinates, setCurrentCoordinates] = useState([])
    const [userBoardStart, setUserBoardStart] = useState([])
    const [coordinatesBoard, setCoordinatesBoard] = useState(coordinates)

    console.log('coordinatesBOARD', coordinatesBoard)


    const cpuShoots = () => {

        const randomPosition = Math.floor(Math.random() * coordinatesBoard.length)
        const randomCoordinate = coordinatesBoard[randomPosition]
        setCpuFire([...cpuFire, randomCoordinate])
        const newArray = coordinatesBoard.filter(element => element !== randomCoordinate)
        setCoordinatesBoard(newArray)
        setTurn(true)
    }




    const winner = () => {
        let userShips = userBoardStart.map((element) => element.coordinate)

        let containerAll = userShips.every((element) => cpuFire.includes(element))
        if (containerAll) {
            alert('CPU won the Game')
            setTurn(null)


        }
        else {
            cpuShoots()
        }
    }

    useEffect(() => {
        if (turn === false && userBoardStart.length === 15) {
            winner()
        }

        if (turn === null) {
            setUserBoardStart([])
            setCpuFire([])
            setCoordinatesBoard(coordinates)

        }

    }, [turn])


    const mySuperFunction = (item) => {

        if (userBoardStart.find((theItem) => theItem.coordinate === item)) {
            alert('Coordinate not available, select other')
        }
        else if (userBoardStart.length === 15) {
            alert('All Ships positioned')
        }

        else {
            return setCurrentCoordinates([...currentCoordinates, item])
        }

    }


    const functionBoat = (color, size, currentCoordinates) => {

        if (userBoardStart.find((position) => position.color === color)) {
            alert("SHIP ALREADY EXISTS.")
        }
        else {
            handleBoat(color, size, currentCoordinates)
            setCurrentCoordinates([])
        }
    }

    const handleBoat = (color, size, currentCoordinates) => {
        if (currentCoordinates.length === size) {
            const currentBoat = currentCoordinates.map((item) => ({ coordinate: item, color: color }))

            return setUserBoardStart([...userBoardStart, ...currentBoat])

        }
        else {
            alert('You have to select ' + size + ' coordinates consecutively')
        }
    }


    const styleFunction = (item) => {
        const currentPlace = currentCoordinates.some((position) => position === item.coordinate)
        const currentPosition = userBoardStart.find((position) => position.coordinate === item.coordinate)
        const hasBeenShoot = cpuFire.find((fire) => fire === item.coordinate)

        if (currentPlace) return 'white'
        if (currentPosition) {
            if (currentPosition.coordinate == hasBeenShoot) {
                return 'pink'
            }
            return currentPosition.color
        }
        if (hasBeenShoot) return 'brown'




        else {
            return item.color
        }

    }

    const starGameButton = () => {
        if (userBoardStart.length !== 15) {
            alert('You have to position all ships before to start the game')
        }
        else {
            setTurn(true)
        }

    }



    return (
        <>
            <div className="board">
                <div className="container-buttons">
                    <p className="tittle-input">Select the coordinates on the board to position your ships</p>
                    <div className="container-green">
                        <button className="green-button" onClick={() => functionBoat('green', 5, currentCoordinates)}>Position Green Ship</button>
                        <p className="p-green">Has 5 Coordinates</p>
                    </div>
                    <div className="container-blue">
                        <button className="blue-button" onClick={() => functionBoat('blue', 4, currentCoordinates)}>Position Blue Ship</button>
                        <p className="p-blue">Has 4 Coordinates</p>
                    </div>
                    <div className="container-yellow">
                        <button className="yellow-button" onClick={() => functionBoat('yellow', 3, currentCoordinates)}>Position Yellow Ship</button>
                        <p className="p-yellow">Has 3 Coordinates</p>
                    </div>
                    <div className="container-red">
                        <button className="red-button" onClick={() => functionBoat('red', 2, currentCoordinates)}>Position Red Ship</button>
                        <p className="p-red">Has 2 Coordinates</p>
                    </div>
                    <div className="container-purple">
                        <button className="purple-button" onClick={() => functionBoat('purple', 1, currentCoordinates)}>Position Purple Ship</button>
                        <p className="p-purple">Has 1 Coordinate</p>
                    </div>
                    <div className="star-game">
                        <button className="star-game-button" onClick={() => starGameButton()}>Star Game</button>
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
                        {gameBoard?.map((element, keyValue) => {
                            return (
                                <tr key={keyValue}>

                                    {
                                        element?.map((item, index) => {

                                            return <td className={`rows`} onClick={() => mySuperFunction(item.coordinate)} style={{ backgroundColor: styleFunction(item, index) }} key={index} />
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
