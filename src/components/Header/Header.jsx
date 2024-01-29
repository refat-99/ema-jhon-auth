import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    console.log(user);
    const handleSignOut = () =>{
        logOut(user)
         .then(resut =>{

         })
         .catch(error =>{

         })
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/SignUp">Sign Up</Link>
                {
                    user && <span className='text-yellow'>{user.email} <button onClick={handleSignOut}>Sign Out</button> </span>
                }
            </div>
        </nav>
    );
};

export default Header;