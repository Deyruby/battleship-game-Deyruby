import React from "react";

const Userboard = () => {

    const tags = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const verticalTags = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]


    const gameBoard = [
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
    


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
                        {gameBoard.map((element, indexValue) => {
                            return (
                                <tr>
                                    {
                                        element.map((item, index) => <td className="rows" onClick={()=> item == 0 ? 1: 0} style= {{ backgroundColor: item == 1 ? 'brown' : 'blue' }} key={index}></td>)
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
