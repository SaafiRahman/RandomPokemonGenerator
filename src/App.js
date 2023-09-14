import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import PokeData from './PokeData';
import Form from 'react-bootstrap/Form';
import Navibar from './Navibar';
import './Fonts/PokemonSolid.ttf';




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
      <Navibar />
      <h1 className='pokefonts'>Generate a random Pokemon</h1>

      <div>
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
      </div>

      <br />
      <div>  
      <Button variant="primary" disabled={!loaded} onClick={handleClick}>
        {!loaded ? 'loading...' : 'Generate!'}
        </Button>
      </div>
      </div>
  );
}

export default App;
