import React from 'react';
import Message from './Message';

const About = () => {
  return (
    <div>
      <h1 className="h-1">About</h1>
      <p>This small React app is a good place to see practical use of the create-react-app and can be a good starting point for creating larger apps. Find out about the directory structure and a fine way to organize your files. Versatile React ES6 techniques has been used together with:</p>
      <ul>
        <li>ES6</li>
        <li>JS fetch API</li>
        <li>Scss</li>
        <li>Bootstrap 4</li>
      </ul>
      <p>Hope you will find Tables App useful in any way... Enjoy!</p>
      <Message 
        text={"This App doesn't support Inetnet Explorer and never will. There, I said it."}
        type={"warning"} />
    </div>
  )
}

export default About;