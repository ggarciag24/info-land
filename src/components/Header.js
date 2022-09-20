import React from 'react';
import {Link} from 'react-router-dom';


function Header(){

    return(
        <div className='head'>
            <Link to='/'><h1>Info Land</h1></Link>
            <Link to='/all'><h3>All Countries</h3></Link>
            <Link to='/about'><h3>About</h3></Link>
        </div>
    )
}


export default Header