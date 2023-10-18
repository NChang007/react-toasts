import { useState } from 'react'
import Toasts from './toasts/Toasts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Toasts/>
    </div>
  )
}

export default App
