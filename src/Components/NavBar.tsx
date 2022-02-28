import React from 'react'
import '../Scss/Navbar.scss'

export const NavBar = () => {
    return(
        <>
         <nav className='nav'>
            <a href="/google.com">Instructor</a>
            <a href="/google.com">Timings</a>
            <a href="/google.com" className='button'>About</a>
            <a className='button1' href='/google.com'>Contact Us</a>
            <a href="/google.com">facebook icon</a>
            <a href="/google.com">instagram icon</a>
         </nav>
        </>
    )
}