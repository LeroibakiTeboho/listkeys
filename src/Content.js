import React, { useState } from 'react'

const Content = () => {

    const handleNameChange = () => 
    {
        const names = ['Bob','Dave','Kevin'];
        const int  = Math.floor(Math.random() * 3);
        setName(names[int]);
    }    

    const handleclick = () =>
    {
        console.log('You clicked it!');
    }
    const handleclick2 = (name) =>
    {
        console.log(`${name} was clicked`);
    }
    const handleclick3 = (e) =>
    {
        console.log(e.target.innerText);
    }

    // const [count, setCount] = useState(0);

    const [name, setName] = useState('Teboho');
    
  return (    
    <main>
        <p onDoubleClick={handleNameChange}>
            Hello {name}! 
        </p>
        <button onClick={handleNameChange}>Change name</button>




        <button onClick={() => handleclick2('Teboho')}>Click It!</button>
        <button onClick={(e) => handleclick3(e)}>Click Event!</button>

        {/* <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me!</button> */}
    </main>
  )
}

export default Content