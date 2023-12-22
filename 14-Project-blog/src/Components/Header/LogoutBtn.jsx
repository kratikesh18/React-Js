import React from 'react'
import { useDispatch} from 'react-redux'
import authServices from '../../appwrite/auth'
 import {logout} from '../../Store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()

    const logoutHandler =  ()=>{
        authServices.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button>Logout</button>
  )
}

export default LogoutBtn