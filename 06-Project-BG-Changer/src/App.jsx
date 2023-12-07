import { useState } from "react";


function App() {
  const [color, setColor] = useState('Black');
  
  return (
    <div className="h-screen w-screen flex items-center justify-center duration-700" style={{backgroundColor:color}}>
          <div className="text-buttons mx-auto w-fit">
            <div className="text flex items-center justify-center flex-col">
            <h1>This is Background Changer </h1>
            <h2 className="text-2xl font-bold text-center mt-4">Color is : {color}</h2>
            
            </div>
            <div className="buttons  bg-white p-3 rounded-lg mt-64 flex gap-5 justify-center">

              <button onClick={()=>setColor("Red")} style={{backgroundColor:"red"}}>Red</button>
              <button onClick={()=>setColor("Violet")} style={{backgroundColor:"violet"}}>Violet</button>
              <button onClick={()=>setColor("Black")} style={{backgroundColor:"Black"}}>Black</button>
              <button onClick={()=>setColor("Blue")} style={{backgroundColor:"Blue"}}>Blue</button>
              <button onClick={()=>setColor("Gray")} style={{backgroundColor:"gray"}}>Gray</button>
              <button onClick={()=>setColor("Brown")} style={{backgroundColor:"Brown"}}>Brown</button>
              
            </div>
          </div>
    </div>
  );
}

export default App;
