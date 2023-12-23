import React , {useState} from 'react'
import {Button, Input , logo } from './index'
import { Link , useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import authServices from '../appwrite/auth'
import { useForm } from 'react-hook-form'
import { login as authLogin } from '../Store/authSlice'


function SignUp() {
    return (
    <div>SignUp</div>
  )
}

export default SignUp