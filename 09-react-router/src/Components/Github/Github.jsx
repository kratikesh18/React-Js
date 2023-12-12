import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'
//to get those data when called or hoverd then we have to use another hook from react-router-dom which is useLoaderData 
function Github() {
    // const [info , setInfo] = useState({});
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/kratikesh18")
    //     .then((res)=>{
    //         return res.json();
    //     })
    //     .then((data) =>{
    //             setInfo(data)
    //     })
    // },[])

    //we can do same thing by more optimisation by loader hook  refer to the line 27


    const info = useLoaderData();
  return (
    <div className='flex bg-gray-500  flex-col items-center gap-[1rem] text-white text-3xl pt-[2rem] '>
        <h1>Github followers: {info.followers}</h1>
        <h1>Github following: {info.following}</h1>
        <div>UserName : {info.login}</div>
        <div className='m-[4rem]'><a href={info.html_url} target='_blank' className='bg-purple-800 text-white p-4 rounded-lg'>Visit Github</a></div>
        <img src={info.avatar_url} className='w-[20rem]' alt="" />
    </div>
  )
}

export default Github

export const gitInfo = async()=>{
     let data = await fetch('https://api.github.com/users/kratikesh18')
     return data.json();
     //now this function goes to the main.jsx where we can add the route to this function via loader attribute
    //  now ref to the line 3
}