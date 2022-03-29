
import Axios from 'axios'
const Results = (props) => {
    const score = props.speed * (props.accuracy / 100) * 10


    //only at end of game

    // props.phase === 'Ended' && {

    //     //post route to highscores
    //     const scorePost = async () => {
    //         await Axios.post("http://localhost:3001/highscores", {
    //             score: score,
    //         }).then()
    //     }

    // }
    let userId = sessionStorage.getItem("userId")
    console.log(userId)
    if (props.phase === 'Ended' && userId) {
        Axios.post("http://localhost:3001/highscores", {
            score: score,
        }).then((response) => {
            console.log(response, 'score posted')
            if (response.status === 200) {

            }
        })
        console.log(props)
    }
    return (
        <>
            <div className=" md:grid grid-cols-2 ">

                <div className={`flex items-center ${props.speedClass} `}  >
                    <p className="text-2xl"> Score: </p>
                    <p className={`text-2xl `}> {props.speed * (props.accuracy / 100) * 10} </p>
                </div>
                <div className={`flex items-center ${props.accClass} `}>
                    <p className="text-2xl">Accuracy: </p>
                    <p className="text-2xl"> {props.accuracy} %</p>
                </div>
                <div className={`flex items-start ${props.speedClass} `}  >
                    <p className="text-2xl"> Raw: </p>
                    <p className={`text-2xl  `}> {props.speed}/{props.wordsTyped}/{props.errors}
                        <p className={`text-sm`}> CPM/WPM/ERR </p>
                    </p>

                </div>
            </div>
        </>
    )
}

export default Results