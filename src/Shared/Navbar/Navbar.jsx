import React from 'react';
import { NavLink } from 'react-router-dom';
import demoProfile from '../../../public/demoProfile.jpg'

const Navbar = () => {
    return (
        <div className='text-center'>
            <h1 className='text-xl uppercase font-bold'>Sports Academy Pro</h1>
            <div className='flex gap-24 justify-center text-xs my-2'>
                <NavLink to='/'>HOME</NavLink>
                <NavLink to='/instructors'>INSTRUCTORS</NavLink>
                <NavLink to='/classes'>CLASSES</NavLink>
                <NavLink to='/dashboard'>DASHBOARD</NavLink>
            </div>
            <div>
                <div><NavLink to='/login'><button className="btn btn-sm">Login</button></NavLink></div>

                {/* ToDo  active logout button and avatar */}

                {/* <div className='flex justify-center items-center gap-4'><div className="avatar">
                    <div className="w-8 rounded-full">
                        <img src={demoProfile} />
                    </div>
                </div><NavLink to='/logout'><button className="btn btn-sm">Logout</button></NavLink></div> */}
            </div>
        </div>
    );
};

export default Navbar;