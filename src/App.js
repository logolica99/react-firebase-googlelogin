import React,{useState,useEffect} from 'react';
import './App.css';
import * as firebase from 'firebase'


function App() {
  useEffect(()=>{
    getLocalUsers();
  },[])
  useEffect(()=>{
    saveLocalusers();
  })
  const app =firebase.app()
  console.log(app)
  const [users,setUsers]=useState([])
  const googleLogin = () =>{
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
        .then(result=>{
          const user = result.user;
          //console.log(user)
          setUsers([...users, user.displayName])
   

        })
  }
  
  const saveLocalusers = () =>{
  
  localStorage.setItem('users', JSON.stringify(users));

}
const getLocalUsers =() =>{
if(localStorage.getItem('users')===null){
  localStorage.setItem('users',JSON.stringify([]))
}else{
  let userslocal =JSON.parse( localStorage.getItem('users'));
  setUsers(userslocal)
}
}



  return (
    <div className="App">
      <h1>hello worlds</h1>
      <button onClick={googleLogin}>Login with google</button>
      {users.map(user=>(
        <h3>Hello {user}</h3>
      ))}

    </div>
  );
}

export default App;
    //  {users.map(user => (
    //     <h2>{user}</h2>

    //   ))}