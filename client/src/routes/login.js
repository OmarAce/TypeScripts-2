import { useState, useEffect } from 'react'
import Axios from 'axios'

const Login = () => {
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("sd");

    const [user, setUser] = useState('returning')
    Axios.defaults.withCredentials = true;

    const register = () => {
        Axios.post("users/register", {
            username: usernameReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response);
            setUser('returning')

        });
    };

    const login = () => {
        Axios.post("users/login", {
            username: username,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus(response.data[0].username);
            }
        });
        console.log(loginStatus)
    };

    // useEffect(() => {
    //     const getUserData = async () => {
    //         Axios.get(`users/login?username=${username}&password=${password}`).then((response) => {
    //             if (response.data.loggedIn == true) {
    //                 setLoginStatus(response.data.user[0].username);
    //             }
    //         });
    //     }

    // }, []);



    return (
        <div className='w-full flex justify-center items-center'>
            {user === 'returning' && (
                <div className="flex flex-col items-center ">

                    <form className='flex flex-col items-left '>
                        <label htmlFor='text'>Username:</label>
                        <input type="text" className='border-2 w-full' onChange={(e) => {
                            setUsername(e.target.value);
                        }} name='username' />
                        <label htmlFor='password' placeholder>Password:</label>
                        <input type="password" className='border-2 w-full' name='password' placeholder="********" onChange={(e) => {
                            setPassword(e.target.value);
                        }} />
                        <input type="submit" onClick={login} className='border-2 w-full' />
                        <label htmlFor='email' className='text-center'>
                            New to TypeScript 2.0?
                        </label>
                        <input type="button" value="Sign Up" className='text-blue-500' onClick={() => setUser('new')} />
                    </form>
                    <h1>{loginStatus}</h1>
                </div>


            )}
            {user === 'new' && (
                <div className="flex flex-col items-center ">
                    <h1 className="text-5xl">Register</h1>
                    <form className='flex flex-col items-left  '>
                        <label htmlFor='userName'>User Name:</label>
                        <input type="text" onChange={(e) => {
                            setUsernameReg(e.target.value);
                        }} className='border-2 w-full' name='userName' />

                        <label htmlFor='password' placeholder>Password:</label>
                        <input type="password" className='border-2 w-full' name='password' placeholder="********" />
                        <input type="submit" className='border-2 w-full' onClick={register} onChange={(e) => {
                            setPasswordReg(e.target.value);
                        }} />
                        <label htmlFor='email' className='text-center'>
                            Already have an account?
                        </label>
                        <input type="button" value="Sign In" className='text-blue-500' onClick={() => setUser('returning')} />
                    </form>
                </div>

            )}
        </div>
    )
}

export default Login