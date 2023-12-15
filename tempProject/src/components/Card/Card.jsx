import React from 'react'

function Card({cardHeading}) {
  return (
    <>
    
    <div className='w-[15rem] mt-[10rem] h-[15rem] bg-gray-800 text-white flex flex-col items-center justify-center m-auto text-center gap-[1.3rem]'>
        <h1>{cardHeading}</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae voluptates </p>
    </div>
    </>
  )
}

export default Card;