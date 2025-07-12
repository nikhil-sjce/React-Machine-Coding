import React, {useState} from 'react'

export function App() {

  const [counter, setCounter] = useState(0);
  
  const handleDecrement = () => {
    setCounter((prev) => prev - 1);
  }
  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  }

  return (
    <div>
      <button onClick = {() => handleDecrement()}data-testid="decrement-button">-</button>
      <button onClick = {() => handleIncrement()}data-testid="increment-button">+</button>
      <p>clicked: {counter}</p>
    </div>
  )
}
