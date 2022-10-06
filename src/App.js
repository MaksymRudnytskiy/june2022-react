import './App.css';
import {Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import UsersPage from "./pages/UsersPage";
import SingleUserPage from "./pages/SingleUserPage";
import PostsPage from "./pages/PostsPage";
import CommentsPage from "./pages/CommentsPage";

function App() {
    return (
        <div>

            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'users/:id'} element={<SingleUserPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
