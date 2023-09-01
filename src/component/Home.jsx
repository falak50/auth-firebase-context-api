import React, { useContext } from 'react';
import { AuthContext } from './providers/AuthProviders';
import { space } from 'postcss/lib/list';

const Home = () => {
    const {user}  = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <h2>HOME</h2>
            {user && <span>{user.displayName}</span>

            }
        </div>
    );
};

export default Home;