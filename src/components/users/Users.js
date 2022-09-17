import User from "../user/User";
import {useEffect, useState} from "react";


function Users() {
    let [users, setUsers] = useState([])
    let [user, setUser] = useState(null)

    const lift = (obj) => {
        setUser(obj)
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value)
            })
    })

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