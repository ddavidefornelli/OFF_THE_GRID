import { useEffect, useState } from 'react';
import { Login } from './login';

export function SignUp() {
    const [wantToLogin, setWantToLogin] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const isPasswordConfirmed = password === confirmPassword;

    if (wantToLogin) {
        return <Login></Login>;
    }

    return (
        <div className="w-screen h-screen flex gap-2 items-center justify-center flex-col">
            <div className="border-2 border-s-black flex flex-col justify-center gap-2">
                <h2 className="mr-2 ml-2 mt-2">username</h2>
                <input
                    type="text"
                    className="focus:outline-none mr-2 ml-2 mb-2 border-s-black border-2"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <h2 className="mr-2 ml-2 mt-2">password</h2>
                    <input
                        type={isPasswordVisible ? 'text' : 'password'}
                        className="focus:outline-none mr-2 ml-2 mb-2 items-center border-s-black border-2"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    <div
                        onClick={() =>
                            isPasswordVisible
                                ? setPasswordVisible(false)
                                : setPasswordVisible(true)
                        }
                        className="h-3 w-3 bg-black relative bottom-1 right-2"
                    ></div>

                <h2 className="mr-2 ml-2 mt-2">confirm password</h2>
                <input
                    type={isPasswordVisible ? 'text' : 'password'}
                    className={`focus:outline-none mr-2 ml-2 mb-2 border-2 ${!isPasswordConfirmed ? 'text-red-500' : 'text-green-600'}`}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button className="bg-orange-600 m-2 hover:bg-black text-backg transition duration-400 ease-linear">
                    {' '}
                    vamoss &gt;&gt;{' '}
                </button>
            </div>
            <button
                className="text-blue-500 underline"
                onClick={() => setWantToLogin(true)}
            >
                already have an account? login
            </button>
        </div>
    );
}
