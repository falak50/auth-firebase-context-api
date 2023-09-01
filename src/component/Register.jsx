import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './providers/AuthProviders';

const Register = () => {
     const {user,createUser } = useContext(AuthContext);
    console.log(user);
    console.log(createUser);
    const handleRegister = event => {
         event.preventDefault();
        const name=event.target.name.value;
         const email=event.target.email.value;
        const password=event.target.password.value;
      
        console.log(name,email,password);
        createUser(email,password)
        .then(result => {
            console.log(result.user);
            event.target.reset();
        })
        .catch(error => {
           console.log(error);
        })
    
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Register !</h1>
            <p className="py-6">if you now iin this side please register . if you have already a acount then login</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Name" className="input input-bordered" required  />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="Email" className="input input-bordered" required  />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                    <Link to='/login' className="label-text-alt link link-hover">Already have a acount</Link>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                </div>
            </form>
            </div>
        </div>
        </div>
    );
};

export default Register;