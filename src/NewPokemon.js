import { useState } from "react"

const NewPokemon = ({pokemon}) => {
    
    return (
        <div>
            {pokemon.map((mons) => (
                <div key={mons.id}>
                    <p>{mons.pokemon}</p>
                </div>
            )) }
        </div>
    )
}

export default NewPokemon;