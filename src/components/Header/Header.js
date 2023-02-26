import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='m-2'>
            <h1 className='text-info text-center'>Register Or Login</h1>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
        </div>
    );
};

export default Header;