import React, { useContext, useState } from 'react'
import './SignUp.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const SignUp =() => {
  const [error, setError] = useState('');
  const{CreateUser} = useContext(AuthContext);


  const handleSignUp = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value; 
    const pass = form.pass.value; 
    setError('')
    if(password !== pass){
      setError('Your password did not match')
      return
    }
    else if(password.length <6){
      setError('Your password must be 6 character')
      return;
    }
    CreateUser(email,password)
      .then(result =>{
        const loggedUser = result.user;
        console.log(loggedUser)
      .catch(error =>{
        console.log(error.massage);
      })
      })


  }
  return (
    <div className='form-container'>
    <h2 className='form-title'>Sign Up</h2>
    <form onSubmit={handleSignUp} >
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' required />
        </div>
        <div className='form-control'>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' required />
        </div>
        <div className='form-control'>
          <label htmlFor='password'>Confirm Password</label>
          <input type='password' name='pass' required />
        </div>
        <input type='submit' value='Sign Up' className='btn-sub' />
    </form>   
    <p><small>Already have an account? <Link to="/login">Login</Link></small></p> 
     <p className='text-error'>{error}</p>
</div>
  )
}

export default SignUp;