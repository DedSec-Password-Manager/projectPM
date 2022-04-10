import './App.css';
import { useState } from "react";
function App() {

  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');

  return (
    <form>
    <h1><span>Passwords:</span>Longer is Stronger</h1>
    <input type="text" placeholder="Ex. password123" 
    onChange={(event) => {
      setPassword(event.target.value);
    }}
    />
    <input type="text" placeholder="Ex. LinkedIn"
    onChange={(event) => {
      setTitle(event.target.value);
    }} />
    <button class="btn">Add Password</button>
    <h6>Oh, social?</h6>
    <div class="social">
    <button class="tw btn">Twitter</button>
    <button class="fb btn">Facebook</button>
    <button class="google fb btn">Google+</button>
    </div>
  </form>
  
  );  
}

export default App;
