import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>This is from Custom React Learnings!</h1>
    </div>
  )
}


//so how the react creates the elements 
const customReactEle = { 
  type: "a", 
  properties:{
      href:"https://www.linkedin.com",
      target:'_blank'
  },
  innerChild: "Click me to visit LinkedIn"
}

//this is also an element /component whatever idk  
const AnotherCustomEle =(
  <a href="https://linkedin.com" target= "_blank">visit me </a>
)


//creating the element using React.creatElement() method 

const finalCustomEle = React.createElement(
  //it will first take the tagname or type of ele
  'a',  //then the object of the props 
  {href:"https://github.com", target:"_blank"},
  //lastly the innerHTML of the element 
  "Click me I'm final custom element"
) 



// in in case we need an component to run  in brower we need to immport it 
import Wet from './Wet.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  // those are Strict modes useed for perfections you can delete it either
  //this will return only one element so we can wrap it into the div tag or in the fragment

  // <div>

  //   <MyApp/>
  //   <App />
  //   <Wet /> 
  // </div>

  //custom React code 
  //MyApp() //we can do this but not any fragment should be present here
          //and THIS ACTION IS NOT RECOMENDED AT ALL 
  // customReactEle  
  //AnotherCustomEle  //we can get it as well 
  //finalCustomEle
  <>
  <App/>
  </>
)
