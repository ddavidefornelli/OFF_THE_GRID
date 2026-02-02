import { useState } from 'react';
import { SignUp } from './signUp';

export function Login() {
  const [signIn, setSignIn] = useState(false);

  if (signIn) {
    return <SignUp></SignUp>;
  }

  return (
    <div className="w-screen h-screen flex gap-2 items-center justify-center flex-col">
      <div className="border-2 border-s-black flex flex-col justify-center gap-2">
        <h2 className="mr-2 ml-2 mt-2">username</h2>
        <input
          type="text"
          className="mr-2 ml-2 mb-2 border-s-red-400 border-2"
        />
        <h2 className="mr-2 ml-2 mt-2">password</h2>
        <input
          type="text"
          className="mr-2 ml-2 mb-2 border-s-red-400 border-2"
        />
        <button className="bg-orange-600 m-2 hover:bg-black text-backg transition duration-400 ease-linear">
          {' '}
          vamoss &gt;&gt;{' '}
        </button>
      </div>
      <button
        className="text-blue-500 underline"
        onClick={() => setSignIn(true)}
      >
        create new account
      </button>
    </div>
  );
}
