import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
    
      </div>
      <h1>Nora+ Kat + Kim + Rohini </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code>  ♥♥♥
        </p>
      </div>
      <p className="read-the-docs">
Let's get building ladiessss :D       </p>
    </>
  )
}

export default App
