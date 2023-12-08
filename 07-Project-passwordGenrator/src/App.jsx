//those are hooks we are using
import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  //we are creating the password genrator so we need the state of length 4checkboxes and pasword
  const [length, setLength] = useState(4);
  const [isLowerChecked, setLowerCase] = useState(true);
  const [isUpperChecked, setUpperCase] = useState(false);
  const [isNumChecked, setNumChecked] = useState(false);
  const [isSymChecked, setSymChecked] = useState(false);
  const [password, setPassword] = useState("");

  //using useRef Hook
  const passref = useRef(null)

  //creating the method which genates the password
  const genratePassword = useCallback(() => {
    let pass = "";
    let passStr = "";

    if (isLowerChecked) passStr += "abcdefghijklmnopqrstuvwxyz";
    if (isUpperChecked) passStr += "abcdefghijklmnopqrstuvwxyz".toUpperCase();
    if (isNumChecked) passStr += "0123456789";
    if (isSymChecked) passStr += "!@#$%^&*";

    for (let i = 0; i < length; i++) {
      let pos = Math.floor(Math.random() * passStr.length);
      pass += passStr.charAt(pos);
    }
    //the pass is genrated so storing the state of password to the variable
    setPassword(pass);
  }, [
    length,
    isLowerChecked,
    isUpperChecked,
    isNumChecked,
    isSymChecked,
    setPassword,
  ]);

  useEffect(() => {

    genratePassword();
  }, [
    length,
    isLowerChecked,
    isUpperChecked,
    isNumChecked,
    isSymChecked,
    genratePassword,
  ]);

  const copyClipBoard = useCallback(()=>{
    passref.current?.select();
    // passref.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  }, [password]);
  return (
    <div className="text-white h-screen w-full flex justify-center items-center">
      <div className="bg-gray-800 w-fit p-10 h-fit flex justify-center items-center flex-col gap-2 rounded-lg">
        <h1 className=" text-lg">Password Cracker</h1>
        <div>
          <input
            type="text"
            readOnly
            className="text-black outline-none rounded-l-sm px-1"
            placeholder="Password "
            value={password}
            ref={passref}
          />
          <button className="bg-purple-700 px-3 rounded-r-sm outline-none  active:bg-purple-900 " onClick={copyClipBoard} > 
            COPY
          </button>
        </div>

        <div className="flex gap-2">
          <input
            type="range"
            id="rangeInput"
            min={4}
            max={16}
            value={length}
            onChange={(e) => {
              setLength(e.currentTarget.value);
            }}
          />
          <label htmlFor="rangeInput">Length: {length}</label>
        </div>
        <div className="grid grid-cols-2 w-[100%] self-center">
          <div>
            <input
              type="checkbox"
              id="lower"
              defaultChecked={isLowerChecked}
              onChange={() => {
                setLowerCase((prev) => !prev);
              }}
            />
            <label htmlFor="lower">LowerCase</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="upper"
              defaultChecked={isUpperChecked}
              onChange={() => {
                setUpperCase((prev)=>!prev);
              }}
            />
            <label htmlFor="upper">UpperCase</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="nums"
              defaultChecked={isNumChecked}
              onChange={() => {
                setNumChecked((prev)=>!prev);
              }}
            />
            <label htmlFor="nums">Numbers</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="symbols"
              defaultChecked={isSymChecked}
              onChange={() => {
                setSymChecked((prev)=>!prev);
              }}
            />
            <label htmlFor="symbols">Symbols</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
