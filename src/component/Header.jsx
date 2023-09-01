import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './providers/AuthProviders';

const Header = () => {
    const { user,logOut } = useContext(AuthContext);
    const handlelogOut = () => {
        logOut()
        .then(()=>{
            console.log('log out done')
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
            <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
          
            <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
            {user && <Link className="btn btn-ghost normal-case text-xl" to='/profile'>Profile</Link>
            }
            {user && <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
            }
            {!user &&   <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
            }
            <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
            {
                user? <>
                 <span>{user.email}</span> 
                 <button onClick={handlelogOut} className="btn btn-xs">Sing out</button>
                </> : <Link to='/login'>login</Link>
            }
            </div> 
    
        </div>
    );
};

export default Header;