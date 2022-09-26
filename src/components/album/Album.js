function Album({album}) {
    return (
        <div>
            <p>userId: {album.userId}</p>
            <p>id: {album.id}</p>
            <p>title: {album.title}</p>
            <br/>
            <hr/>
        </div>
    );
}

export default Album;