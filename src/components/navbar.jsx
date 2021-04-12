import React, { Component } from 'react';

import { NavLink} from 'react-router-dom';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
                <div className="container-md">
                    <a className="navbar-brand" href="#">My restaurant </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/menu">Menu</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/cart">Shopping cart</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/admin">Admin</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>
                        </ul>
                    </div>
                    <span className="badge badge-info"><i className="fas fa-cart-plus"/> { this.props.productsCount}</span>
                </div>
            </nav>
         );
    }
}
 
export default Navbar;