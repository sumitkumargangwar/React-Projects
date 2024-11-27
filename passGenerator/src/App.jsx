import { useState,useCallback,useEffect,useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberallowed,setNumberAllowed] = useState(true)
  const [charallowed,setcharAllowed] = useState(true)
  const [password,setPassword] = useState("")
  let passRef = useRef(null)

  const passGenerator = useCallback( () => {
    let pass = "";
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    if (numberallowed) str += "1234567890";
    if (charallowed) str += "!@#$%^&*()}{[]:";'<>?,./~`\|'
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass)
  },[length,numberallowed,charallowed,setPassword])

  const passCopyClipboard = useCallback( ()=>{
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=> { passGenerator() },[length,charallowed,passGenerator,numberallowed])

  return (
    <>
    <div className='w-full h-screen bg-black'>
      <div className='bg-gray-700 text-center w-6/12 h-32 mx-auto my-0 relative top-10'>
      <h1 className='text-center text-xl text-white pt-2'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-2 py-2 px-4">
          <input
              type="text"
              className="outline-none w-full py-1 px-3"
              placeholder="Password"
              value={password}
              readOnly
              ref={passRef}
          />
          <button onClick={passCopyClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
            copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2 items-center justify-evenly'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              className='cursor-pointer'
              min={6}
              max={20}
              value={length}
              onChange={(e) => {setLength(e.target.value)}}
              />
            <label className='text-white'>Length:{length}</label>
          </div>
        <div className="flex items-center gap-x-1">
          <input
          defaultChecked="numberallowed"
            type="checkbox"
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
          />  
          <label htmlFor="numberInput" className='text-white'>Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
          defaultChecked="charallowed"
            type="checkbox"
            id="characterInput"
            onChange={() => {setcharAllowed((prev) => !prev )}}
          />
          <label htmlFor="characterInput" className='text-white'>Characters</label>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
