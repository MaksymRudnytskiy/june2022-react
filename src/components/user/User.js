import './UserStyle.css';
function User({user,lift}) {

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>ID: {user.id}</p>
      <button onClick={()=>{
          lift(user)

      }}>User details</button>
    </div>
  );
}



export default User;