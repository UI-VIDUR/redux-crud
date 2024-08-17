import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

function App() {
  // const [editableTodo, setEditableTodo] = useState(null)

  // const handleEditTodo = (todo) => {
  //   setEditableTodo(todo)
  // }

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCuqutG8z7ZsKkI40BMWRKZgoqoAzW3Vww",
    authDomain: "react-redux-crud-ebc71.firebaseapp.com",
    projectId: "react-redux-crud-ebc71",
    storageBucket: "react-redux-crud-ebc71.appspot.com",
    messagingSenderId: "699403260563",
    appId: "1:699403260563:web:88258fc72fafe903c57366",
    measurementId: "G-F4T1V2R9YW",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const [user, setUser] = useState('')

  const handleSignOut = async () => {
    const auth = getAuth()
    await signOut(auth)
  }

  useEffect(() => {
    const auth = getAuth();
    console.log(user)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user){
        setUser(user)
      }else{
        setUser(null)
      }
    })

    return () => unsubscribe();

  }, [user])



  return (
    <>
      {/* <SignUp /> */}
      <SignIn />

      {user && 
        <>
          <p>{user.email}</p>
          <button onClick={handleSignOut}>Signout</button>
        </>
      }

      {/* <div className="py-14 px-5 grid grid-cols-2 gap-10"> */}
      {/* <AddTodo editableTodo={editableTodo} setEditableTodo={setEditableTodo} />
        <Todos handleEditTodo={handleEditTodo} /> */}
      {/* </div> */}
    </>
  );
}

export default App;
