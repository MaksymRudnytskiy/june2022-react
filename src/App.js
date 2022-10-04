import './App.css';
import {useReducer, useRef} from "react";


const reducer = (state, action) => {
    const {type, payload} = action

    switch (type) {
        case 'addCat':
            return {...state, cats: [...state.cats, {name: payload, id: Date.now()}]}
        case 'deleteCat':
            return {...state, cats: state.cats.filter(cat => cat.id !== payload)}
        case 'addDog':
            return {...state, dogs: [...state.dogs, {name: payload, id: Date.now()}]}
        case 'deleteDog':
            return {...state, dogs: state.dogs.filter(dog => dog.id !== payload)}
        default:
            return state
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []})

    const catInput = useRef()
    const dogInput = useRef()

    const addCat = () => {
        dispatch({type: 'addCat', payload: catInput.current.value})
        catInput.current.value = ''
    }

    const addDog = () => {
        dispatch({type: 'addDog', payload: dogInput.current.value})
        dogInput.current.value = ''
    }

    return (
        <div className={'father'}>
            <div className={'wrap'}>
                <div className={'top'}>
                    <div>
                        <label>Cats Name: <input type={'text'} ref={catInput}/></label>
                        <button onClick={addCat}>Add Cat</button>
                    </div>
                </div>
                {
                    state.cats.map(cat => (<ul key={cat.id}>
                        <li>{cat.name}
                            <button onClick={() => dispatch({type: 'deleteCat', payload: cat.id})}>Delete Cat</button>
                        </li>
                    </ul>))
                }
            </div>
            <div className={'wrap'}>
                <div className={'top'}>
                    <div>
                        <label>Dog Name: <input type={'text'} ref={dogInput}/></label>
                        <button onClick={addDog}>Add Dog</button>
                    </div>
                </div>
                {
                    state.dogs.map(dog => (<ul key={dog.id}>
                        <li>{dog.name}
                            <button onClick={() => dispatch({type: 'deleteDog', payload: dog.id})}>Delete Dog</button>
                        </li>
                    </ul>))
                }
            </div>


        </div>
    );
}

export default App;
