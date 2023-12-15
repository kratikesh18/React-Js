//creating the custom hook
import React from "react";
import { useEffect, useState } from 'react'

function  useCurrencyInfo(currency){
                                //an empty object if we didn't get any data from fetch (default value)
    const [data , setData] = useState({});

    //useEffect will invoke after any of the dependencies mounted and unmounted 
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            //if we store the data into some variable then it will crate bug or issue so we are holding it into the state 
            setData(data[currency])
        })
        //its dependency changes when the currency is changed
    }, [currency])

    return data;
};

    //returning the whole method 
export default useCurrencyInfo;