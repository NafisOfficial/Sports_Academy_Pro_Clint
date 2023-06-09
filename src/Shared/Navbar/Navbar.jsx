import React from 'react';
import { NavLink } from 'react-router-dom';
import demoProfile from '../../../public/demoProfile.jpg'

const Navbar = () => {
    return (
        <div className='text-center'>
            <h1 className='text-2xl uppercase font-bold text-[#37B34A]'>Sports Academy Pro</h1>
            <div className='flex gap-6 sm:gap-24 justify-center text-xs my-2'>
                <NavLink className="text-[#F6921E]" to='/'>HOME</NavLink>
                <NavLink className="text-[#F6921E]" to='/instructors'>INSTRUCTORS</NavLink>
                <NavLink className="text-[#F6921E]" to='/classes'>CLASSES</NavLink>
                <NavLink className="text-[#F6921E]" to='/dashboard'>DASHBOARD</NavLink>
            </div>
            <div>
                <div><NavLink to='/login'><button className="btn btn-sm rounded-sm bg-[#37B34A] text-white hover:bg-[#1f882f] hover:text-white">Login</button></NavLink></div>

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