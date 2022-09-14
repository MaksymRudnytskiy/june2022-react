import {useState} from "react";
import Character from "./Character";

export default function Characters() {
    let [characters, setCharacters] = useState([])

    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => {
            setCharacters(value.results)
        })

    return (
        <div>
            {characters.map((character, index) => index < 6 && (<Character character={character} key={index}/>))}
        </div>
    )
}