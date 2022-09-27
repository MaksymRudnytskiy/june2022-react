import {Link, Route, Routes} from "react-router-dom";

import Todos from "./components/todos/Todos";

import Albums from "./components/albums/Albums";

import Home from "./components/home/Home";

import Comments from "./components/comments/Comments";

import PostDetails from "./components/postDetails/PostDetails";

function App() {
    return (
        <div className="App">
            <div>
                <Link to={'/'}>Home</Link>
            </div>
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
                <Route path={'/'} element={<Home/>}/>

                <Route path={'todos'} element={<Todos/>}/>

                <Route path={'albums'} element={<Albums/>}/>

                <Route path={'comments'} element={<Comments/>}>
                    <Route path={':postId'} element={<PostDetails/>}/>
                </Route>

            </Routes>
        </div>
    );
}

export default App;
