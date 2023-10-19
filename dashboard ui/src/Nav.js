import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear('user');
        navigate('/')
    }
    return (
        <div>
            {auth ? <ul className="nav-ul">
                <li><Link to="/">Product</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/Updatepro">Update Product</Link></li>
                <li><Link to="/Profile">Profile</Link></li>
                <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).username})</Link></li>

            </ul>
                : <ul className="nav-ul nav-right">
                    <li><Link to="/signup">SignUp</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>}
        </div>
    )
}
export default Nav;