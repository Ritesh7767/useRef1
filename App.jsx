import { useState , useRef, useEffect } from 'react'


function App() {

  let btn = useRef()
  let ref = useRef()
  let flag = useRef(true)

  useEffect(() => ref.current.focus())

  const handleChange = (event) => {
    ref.current.value = event.target.value
    console.log(ref.current.value)
  }

  const handleClick = () => {
    
    flag.current ? btn.current.style.backgroundColor = "skyblue" : btn.current.style.backgroundColor = "teal" 
    flag.current = !flag.current
  }

  return (
    <>
      <input ref={ref} type="text" placeholder='Enter your usename' onChange={e => handleChange(e)} />
      <button ref={btn} onClick={handleClick}>Click me to see the magice</button>
    </>
  )
}

export default App
