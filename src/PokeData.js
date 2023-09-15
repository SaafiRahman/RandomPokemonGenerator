import  React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './index.css';

export default function PokeData(props) {
    return (
    //     <Card style={{ width: '18rem' }} className='mx-auto'>
    //   <Card.Img variant="bottom" src={props.sprite} />
    //   <Card.Body>
    //     <Card.Title>{props.name}</Card.Title>
    //     <Card.Text>
    //     </Card.Text>
    //   </Card.Body>
    //   <ListGroup className="list-group-flush">
    //   <ListGroup.Item>
    //   {props.type.map((type, key) => (
    //         <div key={key}>
    //             {type.type.name}
    //         </div>
    // ))}
    //     </ListGroup.Item>
    //   </ListGroup>
    // </Card>

        <div className='info'>
            <div>
              <img src={props.sprite} width={400}  height={400}/>
              <h2 className='pokefontsSolid'>{props.name}</h2>
            </div>

            <div className='types'>
            {props.type.map((type, key) => (
            <div key={key}>
                <span>{type.type.name}</span>
            </div>
              ))}
          </div> 
        </div>
    )
}