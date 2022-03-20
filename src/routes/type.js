import React from 'react'

const Type = () => {
    const language = ['JavaScript', 'TypeScript', 'CSS', 'HTML', 'English']
    return (
        <div className='grid h-screen grid-rows-6 gap-4'>
            <div id="prompt" className="border row-span-3 text-center md:row-span-2  flex flex-col justify-center items-center">
                <h1 className='mb-6'>Select your Language</h1>
                <div className="flex flex-col md:flex-row  ">{language.map(n => {
                    return <button className="border px-8 py-1 text-center m-2">{n}</button>
                })}</div>
            </div>
            <div id="keyboard" className="border row-span-3 hidden md:grid">keyboard goes here</div>

        </div>
    )
}

export default Type