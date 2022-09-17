import User from "../user/User";
import {useEffect, useState} from "react";
import './UsersStyle.css';
import {getUsersAxios} from "../../services/user.api.axios.service";


function Users() {
    let [users, setUsers] = useState([])
    let [user, setUser] = useState(null)

    const lift = (obj) => {
        setUser(obj)
    }

    useEffect(() => {
       getUsersAxios().then(value => setUsers(value.data))
    },[])

    return (
        <div>
            <hr/>
            <div className={'details'}>
                <p>Name: {user?.name}</p>
                <p>ID: {user?.id}</p>
                <p>Username: {user?.username}</p>
                <p>Email: {user?.email}</p>
                <p>Address: {user?.address.street}, {user?.address.suite}, {user?.address.city}</p>
            </div>
            <hr/>
            {users.map((user, index) => (<User user={user} key={index} lift={lift}/>))}

        </div>
    );
}

export default Users;