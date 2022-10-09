import './App.css';

import Header from "./components/Header/Header";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";

function App() {
    return (
        <div>
            <Header/>
            <div>
                <Users/>
                <Posts/>
            </div>
        </div>
    );
}

export default App;
