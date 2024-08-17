import { browserLocalPersistence, getAuth, setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import React, {useState} from "react";

function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSignIn = async (e) => {
        e.preventDefault();

        const auth = getAuth()

        try {
            // await setPersistence(auth, browserLocalPersistence)
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredential)
            setEmail('')
            setPassword('')
            setError(null)
        } catch (error) {
            setError(error.message)
        }
    }


    return (
        <div>
        <form
            onSubmit={handleSignIn}
            className="bg-gray-100 p-6 rounded-md w-1/2 mx-auto my-10 flex flex-col gap-5"
        >
            <fieldset className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="user-email"
                id="email"
                className="p-2 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </fieldset>
            <fieldset className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="user-pass"
                id="paassword"
                className="p-2 rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </fieldset>
            {error && (
            <p className="text-red-500 text-xs tracking-widest font-medium">
                {error}
            </p>
            )}
            <button
            type="submit"
            className="bg-gray-800 p-3 text-white uppercase font-semibold tracking-widest rounded-md"
            >
            Signin
            </button>
        </form>
        </div>
    );
}

export default SignIn;
