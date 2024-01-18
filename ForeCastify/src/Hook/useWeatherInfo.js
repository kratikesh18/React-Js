import React, {useEffect, useState} from 'react'
import confs from '../confs/confs'



function useWeatherInfo({lat , lon , name }) {
  console.log(lat, lon, name)
  const [data, setData] = useState(null)

  useEffect(()=>{
    if(lat && lon && name){
      
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${confs.mykey}&units=metric`)
      
      .then((res) => res.json())
      
      .then((data) =>setData(data))
      

    }else{
      setData(null)
    }
  },[lat, lon, name])

console.log("Data is : ",data)

return data

}

export default useWeatherInfo