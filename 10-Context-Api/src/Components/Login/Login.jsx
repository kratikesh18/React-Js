import React, { useContext, useState } from 'react'
import UserContext from '../../Context/UserContext'
// this is sender 
function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    // ab ham us context ka use karenge using useContext hook destructuring se setUser ko bahar nikalenge and uske hisab se set karenge 
    const {setUser} = useContext(UserContext)

    const handleLogin =(e)=>{
      e.preventDefault()
      setUser({username,password}) //idhar array nahi pass karna 
    }

  return (
    <div className='flex justify-center flex-col items-center mx-auto gap-[1rem]  '>
        <input 
        className='p-[1rem] text-xl'
        type="text" 
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='userName'
        />
        <input 
        className='p-[1rem] text-xl'
        type="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='Password'
        />
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login