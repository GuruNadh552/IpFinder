import axios from 'axios';
import './App.css';
import React,{useState,useEffect} from 'react';

function App() {
  const [ipAddress,setipAddress] = useState(0);
  const [ipCountry,setipCountry] = useState('');
  const [ipregionName,setipRegionName] = useState('');
  const [ipIsp,setipIsp] = useState('');
  const getIp = () => {
    axios.get('http://ip-api.com/json').then((response) =>
    {
      const data = response.data;
      console.log(data);
      setipAddress(data.query);
      setipCountry(data.country);
      setipRegionName(data.regionName);
      setipIsp(data.isp);
    });
  }
  useEffect(()=>{
    getIp();
  });
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Your IP Address is <strong>{ipAddress}</strong>
        </p>
        <p>
          Your Country is <strong>{ipCountry}</strong>
        </p>
        <p>
          Your City is <strong>{ipregionName}</strong>
        </p>
        <p>
          Your ISP is <strong>{ipIsp}</strong>
        </p>
        
      </header>
    </div>
  );
}

export default App;
