import {Link} from "react-router-dom";
import css from './Headers.module.css'

function Headers() {
    return (
        <div className={css.menu}>
            <div><Link to={'/'}>Main Page</Link></div>
            <div><Link to={'users'}>Users</Link></div>
            <div><Link to={'posts'}>Posts</Link></div>
            <div><Link to={'comments'}>Comments</Link></div>
        </div>
    );
}

export default Headers;