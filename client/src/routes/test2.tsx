import { FC, useState } from "react";
import useTypingGame, {
    CharStateType,
    PhaseType
} from "react-typing-game-hook";
import Type from './type'
import "./styles.css";
import Results from './results'
let Color = require('color');

const TypingGameDemo: FC<{ text: string }> = ({ text }) => {



    const [wordCount, setWordCount] = useState(0)
    // let text = "The quick brown fox jumps over the lazy dog";
    const countWords = (str) => {
        const spaceArray = str.split('').filter(a => a === ' ')
        setWordCount(spaceArray.length + 1)
        return wordCount

    }

    const {
        states: {
            charsState,
            length,
            currIndex,
            currChar,
            correctChar,
            errorChar,
            phase,
            startTime,
            endTime,

        },
        actions: { insertTyping, resetTyping, deleteTyping, getDuration }
    } = useTypingGame(text, {
        skipCurrentWordOnSpace: true,
        pauseOnError: false,
        countErrors: 'everytime',
    });

    const handleKey = (key: any) => {
        // if (PhaseType[phase] === 'Started' && key === ' ') {
        //     setWordCount(wordCount + 1)
        //     console.log(wordCount)

        // }
        if (key === "Escape") {
            resetTyping();
            return;
        }
        if (key === "Backspace") {
            deleteTyping(false);
            return;
        }
        if (key.length === 1) {
            insertTyping(key);
        }
    };

    return (
        <div className="max-w-screen   " >
            {/* {/* <h1>React Typing Game Hook Demo</h1> */}
            <p className=" my-6 md:mt-20">Click on the text below and start typing </p>

            <div
                className="typing-test mb-12"

                onKeyDown={(e) => {
                    handleKey(e.key);
                    e.preventDefault();
                }}
                tabIndex={0}
            >
                {text.split("").map((char: string, index: number) => {
                    let state = charsState[index];
                    let color =
                        state === CharStateType.Incomplete
                            ? Color('#FFFFFF').alpha(0.65)
                            : state === CharStateType.Correct
                                ? Color('#FFFFFF')
                                : "red";
                    return (
                        <span
                            key={char + index}
                            style={{ color }}
                            className={`${currIndex + 1 === index ? "curr-letter" : ""}  text-xl lg:text-2xl`}
                        >
                            {char}
                        </span>
                    );
                })}
            </div>
            {/* <pre>
                {JSON.stringify(
                    {
                        startTime,
                        endTime,
                        length,
                        currIndex,
                        currChar,
                        correctChar,
                        errorChar,
                        phase: PhaseType[phase]
                    },
                    null,
                    2
                )}
            </pre> */}

            {PhaseType[phase] === 'Ended' && (

                <Results phase={PhaseType[phase]} speedClass={PhaseType[phase] === 'Ended' ? 'flex' : 'hidden'} wordsTyped={Math.round(wordCount / (getDuration()) * 1000 * 60)} accClass={PhaseType[phase] !== 'NotStarted' ? 'flex' : 'hidden'} speed={Math.round((currIndex + 1) / (getDuration()) * 1000 * 60)} accuracy={Math.round((correctChar / (correctChar + errorChar)) * 100)} errors={errorChar} />
            )}
            {/* {console.log(length, endTime - startTime)} */}
        </div>
    );
};

export default TypingGameDemo;

