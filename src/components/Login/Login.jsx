import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () =>{
    const [show, setShow] = useState(false)
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate(); 
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    console.log(from);

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signIn(email,password)
         .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate(from)
        //   .catch(error =>{
        //     console.log(error.massage)
        //   })
        
         })
    }

    return(
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className='form-control'>
                  <label htmlFor='email'>Email</label>
                  <input type='email' name='email' required />
                </div>
                <div className='form-control'>
                  <label htmlFor='password'>Password</label>
                  <input type={show ? 'text' : "password"} name='password' required />
                  <p onClick={() => setShow(!show)}> <small>
                   {
                    show ? <span>Hide Password</span>: <span>Show Password</span>
                   } 
                  </small>
                  </p>
                </div>
                <input type='submit' value='Login' className='btn-sub' />
            </form>
            <p>
                <small>
                    New to ema-jhon?
                     <Link to="/SignUp">Sign Up</Link>                     
                </small>
            </p>      
        </div>
    )
};

export default Login;