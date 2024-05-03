import React, { useState } from 'react';
function Loatry() {
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [sum, setSum] = useState(0);
  const generateRandomNumbers = () => {
    const numbers = [];
    for (let i = 0; i < 3; i++) {
      const randomNumber = Math.floor(Math.random() * 10); // Generate random number between 1 and 1000
      numbers.push(randomNumber);
    }
    setRandomNumbers(numbers);
    setSum(numbers.reduce((acc, curr) => acc + curr, 0));
  };
  return (
    <div>
      <button onClick={generateRandomNumbers}>Generate Random Numbers</button>
      <p>Random Numbers: {randomNumbers.join(', ')}</p>
      <p>Sum: {sum}</p>
      <h2>{sum == 15 ?'You have won lottery' : 'Try again for lottery'}</h2>
    </div>
  );
}
export default Loatry;












// import React, { useState } from 'react';
// function Loatry() {
//   // const [randomNumbers, setRandomNumbers] = useState([]);

//   // const generateRandomNumber = () => {
//   //   const randomnumb = Math.floor(Math.random() * 1000) + 1;
//   //   setRandomNumbers([...randomNumbers, randomnumb]);
//   //   console.log(randomNumbers);
//   // };
//   let array = [1,3,5];
//   return (
//     <>
//       {/* <button onClick={generateRandomNumber}>Generate Random Number</button>
//       <ul>
//         {randomNumbers.map((num, index) => (
//           <li key={index}> Number generated is :{num} and it's index is {index}</li>
//         ))}
//       </ul> */}

//     </>
//   );
// }

// export default Loatry;






