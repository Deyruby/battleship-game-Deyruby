import React from "react";

const Userboard = () => {

    const tags = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


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
                            tags.map((element, index) => <th className="row-tags" key={index}>{element}</th>)
                        }
                    </thead>
                    <tbody>
                        {tags.map((element) => {
                            return (
                                <tr>
                                    {
                                        tags.map((element, index) => <td className="rows" key={index}></td>)
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
