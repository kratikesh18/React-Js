  //we can import the hooks like that
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  //the useState hook provide us the array of 2 elements 1 is the variable and 2nd one is a functional component
  const [counter , setCounter] = useState(18)

  // let counter= 18;
  //creating the function onlick increase the value of the counter
  const addValue =()=>{
    // counter++ ;
    // if(counter == 25){
    //         return;
    // }

      //this is the important question  it will not increase the value directly based upon freq of setCounter
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)

    //instead setCounter expects a callback which takes prevCount as a argument 
    setCounter(prevCount => prevCount+1)
    setCounter(prevCount => prevCount+1)
    setCounter(prevCount => prevCount+1)
    // console.log(`Counter incresed by 1: ${counter}` )
  }
  const removeValue =()=>{
    // counter-- ;
    if(counter == 0){
      
      return;
    }
    setCounter(counter-1)
    // console.log(`Counter decreased by 1: ${counter}` )
  }
  //now if we want to display all the values to the ui thats where the hooks will used
  //if we want to do it nanually then the value REFER to the LINE 10 


  return (
    <>
     <h1>Hey This is Counter : {counter}</h1>
     <button onClick={addValue}>Add +1</button> 
     <button style={{ margin: '20px' }} onClick={removeValue}>Add -1</button>
     <footer>
      <h2>&copy; Counter : {counter}</h2>
     </footer>
    </>
  )
}

export default App
