import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Twirl as Hamburger } from 'hamburger-react'

const Navigation = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <nav className='w-2/3 hidden md:flex justify-between mx-auto my-10'>

                <h1>{`Type{Scripts} 2.0`}</h1>

                <div className='flex mx-4' id="navLinks">
                    <Link className='mx-1' to="/type">Type!</Link>
                    <Link className='mx-1' to="/highscore">Highscores</Link>
                    <Link className='ml-8' to="/login">Login</Link>
                </div>

            </nav>
            <nav className='w-11/12 flex md:hidden justify-between mx-auto mt-8 items-center'>

                <h1>{`Type{Scripts} 2.0`}</h1>

                <div className="flex items-center " >
                    <Link to="/login">Login</Link>
                    <Hamburger toggled={isOpen} toggle={setOpen} onToggle={toggled => {
                        if (toggled) {
                            // open a menu
                            document.getElementById('dropdown').classList.remove('hidden')
                        } else {
                            // close a menu
                            document.getElementById('dropdown').classList.add('hidden')
                        }
                    }} />
                    <div className='mx-4 hidden absolute top-16 right-10 grid grid-col-1 border rounded-8' id="dropdown">
                        <Link className='mx-1 border-b' to="/type" onClick={() => {
                            document.getElementById('dropdown').classList.add('hidden');
                            setOpen(false)
                        }}>Type!</Link>
                        <Link className='mx-1 border-b' to="/highscore" onClick={() => {
                            document.getElementById('dropdown').classList.add('hidden')
                            setOpen(false)
                        }}>Highscores</Link>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navigation