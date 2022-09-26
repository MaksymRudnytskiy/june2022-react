function Todo({todo}) {
    return (
        <div>
            <p>userId: {todo.userId}</p>
            <p>id: {todo.id}</p>
            <p>title: {todo.title}</p>
            {/*<p>completed: {todo.completed}</p>*/}
            <br/>
        </div>
    );
}

export default Todo;