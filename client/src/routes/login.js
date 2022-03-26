import { useState } from 'react'

const Login = () => {

    const [user, setUser] = useState('returning')
    return (
        <div className='w-full flex justify-center items-center'>
            {user === 'returning' && (
                <div className="flex flex-col items-center ">

                    <form action="signIn" method="POST" className='flex flex-col items-left '>
                        <label htmlFor='email'>Email:</label>
                        <input type="email" className='border-2 w-full' name='email' />
                        <label htmlFor='password' placeholder>Password:</label>
                        <input type="password" className='border-2 w-full' name='password' placeholder="********" />
                        <input type="submit" className='border-2 w-full' />
                        <label htmlFor='email' className='text-center'>
                            New to TypeScript 2.0?
                        </label>
                        <input type="button" value="Sign Up" className='text-blue-500' onClick={() => setUser('new')} />
                    </form>
                </div>


            )}
            {user === 'new' && (
                <div className="flex flex-col items-center ">

                    <form action="signIn" method="POST" className='flex flex-col items-left  '>
                        <label htmlFor='email'>Email:</label>
                        <input type="email" className='border-2 w-full' name='email' />
                        <label htmlFor='userName'>User Name:</label>
                        <input type="email" className='border-2 w-full' name='userName' />
                        <label htmlFor='password' placeholder>Password:</label>
                        <input type="password" className='border-2 w-full' name='password' placeholder="********" />
                        <input type="submit" className='border-2 w-full' />
                        <label htmlFor='email' className='text-center'>
                            Already have an account?
                        </label>
                        <input type="button" value="Sign Up" className='text-blue-500' onClick={() => setUser('returning')} />
                    </form>
                </div>

            )}
        </div>
    )
}

export default Login