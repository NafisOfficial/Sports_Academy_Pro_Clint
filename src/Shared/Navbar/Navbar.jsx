import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import demoProfile from '../../../public/demoProfile.jpg'
import { authContext } from '../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const Navbar = () => {

    const {user,logOut} = useContext(authContext)

    const handleLogout = ()=>{

        console.log("logout button clicked");

        logOut()
        .then(()=>{
            toast.success("Logout successful")
        }).catch((error)=>{
            toast.error(error.message)
        })
    }


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
                {user?<div className='flex justify-center items-center gap-4'><div className="avatar">
                    <div className="w-8 rounded-full">
                        <img src={user?.photoURL} />
                    </div>
                </div><NavLink><button onClick={handleLogout} className="btn btn-sm rounded-sm bg-[#37B34A] text-white hover:bg-[#1f882f] hover:text-white">Logout</button></NavLink></div>

                :

                <div className='flex justify-center items-center gap-4'><div className="avatar">
                    <div className="w-8 rounded-full">
                        <img src={demoProfile} />
                    </div>
                </div><NavLink to='/login'><button  className="btn btn-sm rounded-sm bg-[#37B34A] text-white hover:bg-[#1f882f] hover:text-white">Sign in</button></NavLink></div>}
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default Navbar;