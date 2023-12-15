import React, { useEffect, useState } from 'react'

// hook is a method which takes the some input and thorws output 
//this hooks is about the fetch the data and store the data in the var

//to fetch the data we need currency
function useCurrencyInfo(currency) {
  //we can declare variables here 
  //the custom hook can use built in variables also 
  //basically data is empty object because not fetched 
  const [data, setData] = useState({});
  //fetching is below 

    //here we are using useEffect hook: used for handeling side efffects in a component like fetch and all 


    //so whenever someone tries to manipulate currencies value then this hook triggerd  and executes again for the currency value 

    useEffect(()=>{
      fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then((response)=>{
          //we get the response in string type so we need to convert it to object and store in the state of the data 

          return response.json();
      })
      .then((data1)=>{
        setData(data1[currency])  //data throws with time so we fitered only rates of the currency and stored it into the data variable 
      })
    },[currency])
    //at the end of the hook we are returning only data object containing only currency rates 
    return data;
}

export default useCurrencyInfo;