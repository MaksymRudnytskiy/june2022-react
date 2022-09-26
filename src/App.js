import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Todos from "./components/todos/Todos";
import Albums from "./components/albums/Albums";

function App() {
    return (
        <div className="App">
            <div>
                <Link to={'/todos'}>Todos</Link>
            </div>
            <div>
                <Link to={'/albums'}>Albums</Link>
            </div>
            <div>
                <Link to={'/comments'}>Comments</Link>
            </div>

            <hr/>

            <Routes>
                <Route path={'todos'} element={<Todos/>}/>
                <Route path={'albums'} element={<Albums/>}/>
            </Routes>
        </div>
    );
}

export default App;
