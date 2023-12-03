import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// in in case we need an component to run  in brower we need to immport it 
import Wet from './Wet.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  // those are Strict modes useed for perfections you can delete it either
  // <React.StrictMode>
  //this will return only one element so we can wrap it into the div tag or in the fragment 
  <div>
    <App />
    <Wet />
  </div>
  // </React.StrictMode>,
)
