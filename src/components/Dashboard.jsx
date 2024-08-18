import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

function Dashboard() {

    const {user} = useContext(UserContext)

    return (
        <div className='container'>
            <div className="py-10">
                {user && 
                    <h1 className="text-3xl text-zinc-900 font-bold">Welcome, {user.email.split('@')[0]}</h1>   
                }     

            </div>
        </div>
    )
}

export default Dashboard
