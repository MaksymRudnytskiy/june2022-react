import {Link} from "react-router-dom";

function User({user}) {
    return (
        <div>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <Link to={user.id.toString()}>User Detail</Link>
            <hr/>
        </div>
    );
}

export default User;