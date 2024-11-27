import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import authService from '../../appwrite/auth'

export default function LogoutBtn(props) {
    const dispatch = useDispatch()
    const logoutHandler = ()=> {
        authService.logout().then(()=> {
            dispatch(logout())
        })
    }

    return (
        <>
            <button onClick={logoutHandler}>Logout Button</button>
        </>
    )
}
