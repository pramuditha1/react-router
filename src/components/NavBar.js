import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {

    const navLinkStyles = ({isActive}) => {
        //props will receive isActive, hence destructure and use it
        return {
            fontWeight: isActive? 'bold' : 'normal',
            textDecoration: isActive? 'none' : 'underline',
        } 
    }

    return (
        <nav>
            <NavLink to='/' style={navLinkStyles}>Home</NavLink>
            <NavLink to='/about' style={navLinkStyles}>About</NavLink>
        </nav>
    )
}