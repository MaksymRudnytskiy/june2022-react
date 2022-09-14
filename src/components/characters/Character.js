import './style.css'

export default function Character (props) {
let {character} = props
    return (
        <div className={'character'}>
            <h3>{character.name}</h3>
            <img src={character.image} alt=""/>
            <div>Id: {character.id}</div>
            <div>Status: {character.status}</div>
            <div>Species: {character.species}</div>
            <div>Gender: {character.gender}</div>


        </div>
    )
}