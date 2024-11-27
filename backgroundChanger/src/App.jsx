import { useState } from 'react'

function App() {
  const [color, setColor] = useState('black')

  return (
    <div className="w-full h-screen bg-black" style={{backgroundColor: color}}>
      <div className='w-full bg-slate-950 p-4 fixed bottom-10 rounded-lg text-center'>
        <button onClick={()=> setColor("white") } className='w-auto p-2 rounded-xl mx-4 text-black' style={{backgroundColor:"white"}}>White</button>
        <button onClick={()=> setColor("red") } className='w-auto p-2 rounded-xl mx-4 text-white' style={{backgroundColor:"red"}}>Red</button>
        <button onClick={()=> setColor("yellow") } className='w-auto p-2 rounded-xl mx-4 text-black' style={{backgroundColor:"yellow"}}>Yellow</button>
        <button onClick={()=> setColor("blue") } className='w-auto p-2 rounded-xl mx-4 text-white' style={{backgroundColor:"blue"}}>Blue</button>
        <button onClick={()=> setColor("green") } className='w-auto p-2 rounded-xl mx-4 text-white' style={{backgroundColor:"green"}}>Green</button>
        <button onClick={()=> setColor("violet") } className='w-auto p-2 rounded-xl mx-4 text-white' style={{backgroundColor:"violet"}}>Voilet</button>
        <button onClick={()=> setColor("grey") } className='w-auto p-2 rounded-xl mx-4 text-white' style={{backgroundColor:"grey"}}>Grey</button>
        <button onClick={()=> setColor("orange") } className='w-auto p-2 rounded-xl mx-4 text-white' style={{backgroundColor:"orange"}}>Orange</button>
        <button onClick={()=> setColor("indigo") } className='w-auto p-2 rounded-xl mx-4 text-white' style={{backgroundColor:"indigo"}}>Indigo</button>
        <button onClick={()=> setColor("black") } className='w-auto p-2 rounded-xl mx-4 text-white' style={{backgroundColor:"black"}}>Black</button>
        <button onClick={()=> setColor("skyblue") } className='w-auto p-2 rounded-xl mx-4 text-black' style={{backgroundColor:"skyblue"}}>Sky Blue</button>
      </div>
    </div>
  )
}

export default App
