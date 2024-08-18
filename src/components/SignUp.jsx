import React, {useContext, useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";


function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)

  const {user, auth} = useContext(UserContext)

  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    //   setUser(userCredential.user)
      console.log(userCredential.user)
      setEmail('')
      setPassword('')
      setError('')
      navigate('/dashboard')
    } catch (error) {
      setError(error.message)
      console.error('Error signing up:', error)
    } finally {
      setLoading(false)
    }

  };


  return (
    <div>
      <form
        onSubmit={handleSignUp}
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
          Signup
        </button>
      </form>
    </div>
  );
}

export default SignUp;
