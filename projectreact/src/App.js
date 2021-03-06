import React, { useState } from 'react';
import Tweet from './Tweet';

function App() {
  const [users, setUsers] = useState([
    {name: 'Yimeng', message: 'Hello there'},
    {name: 'John Snow', message: 'I am John Snow'},
    {name: 'Traversy', message: 'I am awesome'}
  ]);

  return (
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );
}

export default App;