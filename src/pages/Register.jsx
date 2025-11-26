import React, { useContext } from "react";
import { Link } from "react-router";
import AuthProvider, { AuthContext } from "../Provider/AuthProvider";

const Register =()=> {
  const {RegisterWithEmailPassword} =useContext(AuthContext);

  const handleSubmit = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    RegisterWithEmailPassword(email,pass)
    .then(userCredential=>{
      const user = userCredential.user
      console.log(user);
      
    })
    .catch(err=>{

      
    })
    

  }

    return (
      <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit} className="fieldset">
                <label className="label">Email</label>
                <input name="email" type="email" className="input" placeholder="Email" />
                <label className="label">Name</label>
                <input name="name" type="text" className="input" placeholder="Your full name" />
                <label className="label">PhotoUrl</label>
                <input name="photoUrl" type="text" className="input" placeholder="Enter Your photoUrl" />
                <label className="label">Password</label>
                <input name="password" type="password" className="input" placeholder="Password" />
                <div><a className="link link-hover">Forgot password?</a></div>

                <div>
                  <span>Already have an account? </span><Link to='/login' className='text-blue-500'>Login</Link>
                  </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }


export default Register