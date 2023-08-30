import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import NewPokemon from "./NewPokemon.js"

function App() {

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() 
            * (max - min + 1)) + min;
};

const handleClick = () => {
    setPokid(randomNumberInRange(1, 1010));
};

  const [pokemon, setPokemon] = useState([]);
  const [pokid, setPokid] = useState(1);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokid + "/")
    .then(res => {
    return res.json();
  })
    .then((data) => {
      console.log(data);
      setPokemon(data);
  })
  }, [pokid]);
  
  return (
    
    <div className="app">
      <h1>Generate a random Pokemon</h1>
      <div className="button">
      <Button variant="primary" onClick={handleClick}>Generate!</Button>
      <p>{pokemon.name} , {pokid}</p>
      </div>
    </div>
  );
}

export default App;
