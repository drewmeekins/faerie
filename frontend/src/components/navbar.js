import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';

class Navbar extends Component {
    render() { 
        return (
            <div className='navbar'>
                <div className='links'>
                    <Link to="/"> Shop </Link>
                    <Link to="/cart"> <ShoppingCart size={50}/> </Link>
                </div>
            </div>
        );
    }
}
 
export default Navbar;