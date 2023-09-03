import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import PokeData from './PokeData';
import Form from 'react-bootstrap/Form';


function App() {

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() 
            * (max - min + 1)) + min;
};

const handleClick = () => {
    setLoaded(false);
    setPokid(randomNumberInRange(1, 1010));
    
};

  const [pokemon, setPokemon] = useState(null);
  const [pokid, setPokid] = useState(1);
  const [loaded, setLoaded] = useState(false);
  const [numpokemon, setNumpokemon] = useState(0);

 

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokid + "/")
    .then(res => {
    return res.json();
  })
    .then((data) => {
      setPokemon(data);
      setLoaded(true);
  })
  }, [pokid]);
  
 

  return (
    
    <div className="app">
      <h1>Generate a random Pokemon</h1>
      {
        !loaded ? <img src={"./logo192.png"} />
        :<PokeData
          sprite={pokemon.sprites.front_default} 
          name={pokemon.name}
          type={pokemon.types}
          ability={pokemon.abilities}
          stats={pokemon.stats} 
          id={pokid}
        />
      } 

      <br />
      <div>  
      <Form.Select aria-label="Default select example" Width="50px">
      <option>How many pokemon would you like to generate?</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
    </Form.Select>
    
      <Button variant="primary" disabled={!loaded} onClick={handleClick}>
        {!loaded ? 'loading...' : 'Generate!'}
        </Button>
      </div>
      </div>
  );
}

export default App;
