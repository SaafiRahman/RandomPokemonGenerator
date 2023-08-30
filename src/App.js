import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';


function App() {

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() 
            * (max - min + 1)) + min;
};

const handleClick = () => {
    setPokid(randomNumberInRange(1, 1010));
};

  const [pokemon, setPokemon] = useState(null);
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
      {pokemon && <img src={pokemon.sprites.front_default} width={200}  height={200}/>}
      
      
      {pokemon &&  <p>{pokemon.name}, {pokid}</p>}
      <div className="button">
      <Button variant="primary" onClick={handleClick}>Generate!</Button>
      </div>
    </div>
  );
}

export default App;
