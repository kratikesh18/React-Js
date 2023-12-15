import React, { useState } from 'react'
import UserContext from './UserContext'

function UserContextProvider({children}) {
    // ab woh data lana bhi padega na  so here we need a wrapper function or a null state 
    const [user, setUser] = useState()
  return (
 
    <UserContext.Provider value={{user, setUser}}> {/*idhar object bhejna array nahi qki isme function bhi hote hain  */}
                                {/* value matlb jo jo data us childs mein dena hain woh sab  L-5*/}
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider