import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Button from 'react-bootstrap/Button';

// fetch("https://pokeapi.co/api/v2")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
// })
function App() {
  fetch("https://pokeapi.co/api/v2")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
})
  return (
    
    <div className="app">
      <h1>Generate a random Pokemon</h1>
      <div className="button">
      <Button variant="primary">Generate!</Button>
      </div>
    </div>
  );
}

export default App;
