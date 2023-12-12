import React from 'react'
// to import data from the link dynamically we use the react hook
import {useParams } from "react-router-dom"

function UserInfo() {
    const {data} = useParams();
  return (
    <div className='flex flex-col gap-[3rem] p-[5rem]'>
      <p className='text-3xl'>Enter the data after the url ends starts with / </p>
        <h1 className='text-4xl font-serif font-bold'>UserInfo</h1>

        <h1 className='text-5xl  font-bold font-[cursive]'>Recived Data: {data}</h1>


    </div>
    
  )
}

export default UserInfo