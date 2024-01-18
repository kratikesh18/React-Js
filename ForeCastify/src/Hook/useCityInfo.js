// https://api.openweathermap.org/geo/1.0/direct?q=${phrase}&limit=5&appid=${confs.mykey}&units=metric
import React, { useCallback, useEffect, useState } from "react";
import confs from "../confs/confs";

function useCityInfo(phrase = "") {
  
  const [CityInfor, setCityInfor] = useState([]);

      useEffect(() => {
        if(phrase){

          fetch(
            `https://api.openweathermap.org/geo/1.0/direct?q=${phrase}&limit=5&appid=${confs.mykey}&units=metric`
          )
            .then((res) => res.json())
      
            .then((data) => setCityInfor(data));
      
        }else{
          setCityInfor([])
        }
        }, [phrase]);

  
  console.log(phrase , CityInfor);


  return CityInfor;
}

export default useCityInfo;
