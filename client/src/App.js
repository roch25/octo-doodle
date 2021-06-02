import { useState, useEffect } from "react"
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {
  const [greeting, setGreeting] = useState("")

  const getGreeting = async  () => {
    const response = await axios.get('http://localhost:6001')
    setGreeting(response.data)
  } 

  useEffect(() => {
    getGreeting();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          { greeting }
        </p>
      </header>
    </div>
  );
}

export default App;
