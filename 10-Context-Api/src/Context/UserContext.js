import React from 'react'

//creating the context and exporting it 
const UserContext = React.createContext();

export default UserContext

// we need a provider to use this context so create a contextProvider which take all the children to wrapped by this context and give them the proper values or send the proper data 
