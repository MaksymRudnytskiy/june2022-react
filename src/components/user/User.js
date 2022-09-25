function User({user}) {
    return (
        <div>
            <p>Id: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <br/>
        </div>
    );
}

export default User;