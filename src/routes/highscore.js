import React from 'react'

const HighScore = () => {
    return (
        <div className="flex justify-center">
            <table className="border">
                <tr className="border-4">
                    <th className="border-x">User Name</th>
                    <th className="border-x">Words Per Minute</th>
                    <th className="border-x">Date</th>
                </tr>
                <tr >

                    <td className="border-x">{'kam'}</td>
                    <td className="border-x">{100} wpm</td>
                    <td className="border-x">{'todays date'} </td>
                </tr>
                <td></td>
                <tr></tr>
            </table>
        </div>
    )
}

export default HighScore