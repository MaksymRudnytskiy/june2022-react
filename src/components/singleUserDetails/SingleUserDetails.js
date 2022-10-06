function SingleUserDetails({user}) {
    return (
        <div>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Address: {user.address.street}, {user.address.suite}, {user.address.city}</p>
            <p>Zipcode: {user.address.zipcode}</p>
            <p>Geolocation: lat {user.address.geo.lat}, lng {user.address.geo.lng}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: <a href={user.website}>{user.website}</a></p>
            <br/>
            <p>Company Details</p>
            <p>Name: {user.company.name}</p>
            <p>catch Phrase: {user.company.catchPhrase}</p>
            <p>BS: {user.company.bs}</p>
        </div>
    );
}

export default SingleUserDetails;