import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () =>
{
    return (
        <nav className="navbar">
            <NavLink to='/'>Song Saver</NavLink>
            <NavLink to='/about'>About Page</NavLink>
        </nav>
    )
}