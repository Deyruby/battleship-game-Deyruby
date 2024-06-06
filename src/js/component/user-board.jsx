
import React, { useState, useEffect } from "react";




const Userboard = ({ initialState, cpuFire, setCpuFire, turn, setTurn }) => {

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
    console.log('cpufire', cpuFire)

    const cpuShoots = () => {

        const randomPosition = Math.floor(Math.random() * coordinatesBoard.length)
        console.log('RAMDOMPOSITION', randomPosition)
        const randomCoordinate = coordinatesBoard[randomPosition]
        console.log('randomcoordinate', randomCoordinate)
        setCpuFire([...cpuFire, randomCoordinate])
        const newArray = coordinatesBoard.filter(element => element !== randomCoordinate)
        console.log('NEWARRAy', newArray)
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
                        {initialState?.gameBoard?.map((element, keyValue) => {
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
