import  React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function PokeData(props) {
    return (
        <Card style={{ width: '18rem' }} className='mx-auto'>
      <Card.Img variant="bottom" src={props.sprite} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
      <ListGroup.Item>
      {props.type.map((type, key) => (
            <div key={key}>
                {type.type.name}
            </div>
    ))}
        </ListGroup.Item>
      </ListGroup>
    </Card>

        
//         <div>
//             <img src={props.sprite} width={200}  height={200}/>

//         <div classsName="typespace">
//         {props.type.map((type, key) => (
//             <div key={key}>
//                 <span>{type.type.name}</span>
//             </div>
//     ))}
//         </div>

// <p>{props.name}, {props.id}</p>
//         </div>
    )
}