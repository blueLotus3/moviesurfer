import React from 'react'
import { Link } from 'react-router-dom'


const Nav = (props) => {
    return(
        <div className="nav">
            <Link to ='/'>
                <div className="navLink">Home</div>
            </Link>
        </div>
    )
}

export default Nav;