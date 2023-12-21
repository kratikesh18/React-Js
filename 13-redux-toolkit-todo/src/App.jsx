import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {store} from './app/Store'
import {Provider} from 'react-redux'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <AddTodo/>
      <Todos/>
    </Provider>    
  )
}

export default App
