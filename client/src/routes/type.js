import React from 'react'
import { useState } from 'react'
import Test from './test'
import Test2 from './test2.tsx'
const Type = () => {
    const language = ['JavaScript', 'TypeScript', 'CSS', 'HTML', 'English']
    // const prompts = {
    //     English: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ", "The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow the matching case."]

    // }
    const home = () => {
        return (
            <>
                < h1 className='mb-6' > Select your Language</h1>
                <div className="flex flex-col md:flex-row  ">{language.map(n => {
                    return <button onClick={changeStage} className="border px-8 py-1 text-center m-2">{n}</button>
                })}</div>
            </>
        )
    }
    const changeStage = (e) => {

        const userLang = e.target.innerText
        switch (userLang) {
            case 'English':
                setStage(() => {
                    return (
                        <>
                            <button onClick={() => setStage(home)} className='border-4 '>Back</button>
                            {/* <Test /> */}
                            <Test2 />
                        </>
                    )
                })
                break;
        }
    }
    const [stage, setStage] = useState(home)

    return (

        <div className='grid h-screen grid-rows-6 gap-4'>
            <div id="prompt" className="border row-span-3 text-center md:row-span-2  flex flex-col justify-center items-center">
                {stage}
            </div>
            <div id="keyboard" className="border row-span-3 hidden md:grid">keyboard goes here</div>

        </div>
    )
}

export default Type