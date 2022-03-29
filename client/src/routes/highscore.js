import React from 'react'
import Axios from 'axios'
import axios from 'axios'
const HighScore = () => {
    let highscores = []
    Axios.get('http://localhost:3001/api/highscores')
        .then(function (response) {
            highscores = response.data
            console.log(highscores)
        })
    return (
        <div className="flex justify-center mt-12 text-white">
            {/* {highscores.map(n => {
                console.log(n)
                    (<div className="grid grid-cols-2">
                        <div className="">{n.user_id}</div>
                        <div className="">{n.score}</div>
                    </div>)
            }
            )} */}
        </div>
    )
}

export default HighScore