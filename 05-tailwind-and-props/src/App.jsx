import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  const mySrc = "https://images.pexels.com/photos/5054355/pexels-photo-5054355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  return (
    <>
    <div className="container flex flex-row">
    {/* we can use tailwind classes below using className=" "  */}
    <Card cardHeading= "About iPhone" cardDesc="Check out the new iPhone 15 pro Max" imgsrc = {mySrc}/>
    <Card cardHeading= "About MacBook" cardDesc="Check out the powerfull M16 Bionic" linkText="Buy Now"/>
    </div>
    </>
  )
}

export default App
