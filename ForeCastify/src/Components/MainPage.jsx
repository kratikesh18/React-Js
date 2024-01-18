import React, { useEffect } from 'react'
import useCityInfo from '../Hook/useCityInfo'
import confs from '../confs/confs'

function MainPage() {
const cityInfo = useCityInfo()
useEffect(()=>{

},[])
    return (
    <div>
        <h1>write a City </h1>
        <input type="text" className='text-black' />

        <div>
            <ul className='text-white'>
                
            </ul>
        </div>
    </div>
  )
}

export default MainPage