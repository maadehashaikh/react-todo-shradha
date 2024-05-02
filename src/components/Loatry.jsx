import React from 'react'
import { useState } from 'react';
function Loatry() {
  const [randomnumb, setRandomNumb] = useState([]);
  const randomNumber =() => {
  let randomnumb =  Math.floor(Math.random() * 10);
  setRandomNumb([...randomNumber , randomnumb]);
};
  return (
    <>
    <button onClick={randomNumber}>Generate Random Number</button>
    {/* <p>{randomnumb}</p> */}
    <ul>
        {randomnumb.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </>
  )
}

export default Loatry
