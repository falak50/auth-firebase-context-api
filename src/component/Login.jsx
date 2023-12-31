import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from './providers/AuthProviders';

const Login = () => {
   
     const {singIn,singInWithGoogle} = useContext(AuthContext);
     console.log(singIn);



    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
           
        singIn(email,password)
        .then(result =>{
            console.log(result.user);
            event.target.reset();
           
        })
        .catch(error=>{
            console.log(error);
        })

    }

    const handleGoogleSignIn = () =>{
        singInWithGoogle()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
            <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="email" name='email' placeholder="email" className="input input-bordered" required  />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
            <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
            </div>
            <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
            </div>
        </form>
         <p className='m-4 ml-8'>
         <Link to='/register'  className="label-text-alt link link-hover">
         New to authMaster Please Register
         </Link>
         </p>
         <div>
         <button onClick={handleGoogleSignIn} className="btn btn-primary">Google</button>
         </div>
        {/* <button className="btn btn-link">Link</button> */}
        </div>
    </div>
    </div>
    );
};

export default Login;