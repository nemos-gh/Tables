import React from 'react';

const Home = () => {
  
  return (
    <div>
      <h1 className="h-1">Tables App</h1>
      <p>The project is a result of playing with the React Framework and love for football. For an easy start of coding, <a href="https://github.com/facebook/create-react-app" target="_blank" rel="noopener noreferrer">Create React App</a> is used to setup dev environment.</p>
      <p>Football data are obtained by pretty cool and comprehensive Football-Data Api. In order to gain data access register on Football-Data.org and <a href="https://www.football-data.org/client/register" target="_blank" rel="noopener noreferrer">get your free Api Key</a> in the confirmation email.</p>
      <h2 className="h-2">How to start</h2>
      <p>Follow theese steps to setup Tables on your local machine:</p>
      <p className="small">Clone the repository</p>
      <pre>
        <code>
          git clone https://github.com/nemos-gh/Tables.git
        </code>
      </pre>
      <p className="small">Jump to Tables directory</p>
      <pre>
        <code>cd Tables</code>
      </pre>
      <p className="small">Install Node Modules</p>
      <pre>
        <code>yarn</code> or <code>npm i</code>
      </pre>
      <p className="small">Start development environment</p>
      <pre>
        <code>yarn start</code> or <code>npm start</code>
      </pre>
      <p>Nice and easy <span role="img" aria-label="snow">😎</span></p>
      <h2 className="h-2">Data Access</h2>
      <p>After successful registration on the Football-Data.org, copy the Api Key you received in the confirmation email and paste it as value for the ApiKey constant.</p>
      <p className="small">Path to ApiKey constant</p>
      <pre>
        <code>./src/components/lib/api-key.js</code>
      </pre>
      <p>That's all.</p>
    </div>
  )
}

export default Home;