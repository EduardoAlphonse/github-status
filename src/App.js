import React, { useState, useEffect } from 'react';

const request = require('request');

function App() {
  const [data, setData] = useState([]);

  const refreshStatus = () => {
    request('https://www.githubstatus.com/', { json: true }, (err, res, body) => {
      const data = body.components.filter(component => component.name.indexOf('Visit') < 0);
      console.log(data);
      setData(data);
    });
  }

  useEffect(() => {
    refreshStatus();
  }, []);

  return (
    <div className="App">
      <h1>GitHub current status</h1>
      <button onClick={refreshStatus}>
        Refresh Status
      </button>
      <div>
        {
          data.map(component => (
            <div key={component.id} className="component">
              <p>{component.name}</p>
              <p>{component.description}</p>
              <p>{component.status}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;