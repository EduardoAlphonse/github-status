import React, { useState, useEffect } from 'react';
import Status from './components/Status';

import './App.css';
import './assets/styles/reset.css';

const request = require('request');

function App() {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const refreshStatus = async () => {
    setRefreshing(true);
    await request('https://www.githubstatus.com/', { json: true }, (err, res, body) => {
      const data = body.components.filter(component => component.name.indexOf('Visit') < 0);
      setData(data);
      setRefreshing(false);
    });
  }

  useEffect(() => {
    refreshStatus();
  }, []);

  return (
    <div className='App'>
      <h1 className='title'>GitHub current status</h1>

      <div className='data-list-container'>
        <div className='data-list'>
          {
            data.map(component => (
              <div key={component.id} className='data-component'>
                <p>{component.name}</p>
                {/* <p>{component.description}</p> */}
                <Status status={component.status} />
              </div>
            ))
          }
        </div>
      </div>

      <button className='refresh-button' onClick={refreshStatus}>
        {refreshing ? 'Refreshing...' : 'Refresh status'}
      </button>
    </div>
  );
}

export default App;