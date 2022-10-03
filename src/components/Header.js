import React from 'react';
import {Link} from 'react-router-dom';


function Header(){

    return(
        <div className='head'>
            <Link to='/' className='link'><h1>Info Land</h1></Link>
            <Link to='/all' className='link'><h3>All Countries</h3></Link>
            <Link to='/about' className='link'><h3>About</h3></Link>
        </div>
    )
}


export default Header