import React, { useContext } from 'react'
import UserContext from '../../Context/UserContext';


// this is reciever before this 

function Profile() {
  // abhi us data ko idhar lana hain useke liye kya lagega fir useContext use karenge abhi user ko hi bahar nikalenge 
  const {user} = useContext(UserContext);
  if(!user) return <div> Please Enter credentials</div> 



  return (
    <div >
      <h1 className='text-2xl '>this is Profile page </h1>
        <h1>Welcome : {user.username}</h1>
        <h1>Pass : {user.password}</h1>
    </div>
  )
}

export default Profile;