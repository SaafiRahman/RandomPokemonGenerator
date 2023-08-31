import  React from 'react';

export default function PokeData(props) {
    return (
        <div>
            <img src={props.sprite} width={200}  height={200}/>

        <div classsName="typespace">
    {props.type.map((type, key) => (
        <div key={key}>
            <span>{type.type.name}</span>
        </div>
    ))}
</div>

<p>{props.name}, {props.id}</p>
        </div>
    )
}