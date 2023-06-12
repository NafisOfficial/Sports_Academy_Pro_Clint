import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import demoProfile from '../../../public/demoProfile.jpg'
import { authContext } from '../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const Navbar = () => {

    const { user, logOut } = useContext(authContext)

    const handleLogout = () => {

        console.log("logout button clicked");

        logOut()
            .then(() => {
                toast.success("Logout successful")
            }).catch((error) => {
                toast.error(error.message)
            })
    }


    return (
        <div className='text-center'>
            <h1 className='text-2xl uppercase font-bold text-[#37B34A]'>Sports Academy Pro</h1>
            <div className='flex gap-6 sm:gap-24 justify-center items-center text-xs my-2'>
                <NavLink className="text-[#F6921E]" to='/'>HOME</NavLink>
                <NavLink className="text-[#F6921E]" to='/instructors'>INSTRUCTORS</NavLink>
                <NavLink className="text-[#F6921E]" to='/classes'>CLASSES</NavLink>
                {user ? <div className="dropdown z-30">
                    <label tabIndex={0} className="btn btn-sm bg-[#37B34A] text-white hover:bg-[#1f882f] hover:text-white">Dashbord</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/enrolled' className='text-[#1f882f]'>My enrolled classes</Link></li>
                        <li><Link to='/studentClasses' className='text-[#1f882f]'>My Selected Classes</Link></li>
                        <li><Link to='/instructorsClasses' className='text-[#1f882f]'>IClasses</Link></li>
                        <li><Link to='/addClasses' className='text-[#1f882f]'>Add a Class</Link></li>
                        <li><Link to='/manageUsers' className='text-[#1f882f]'>Manage Users</Link></li>
                        <li><Link to='/manageClasses' className='text-[#1f882f]'>Manage classes</Link></li>
                    </ul>
                </div> : <></>}
            </div>
            <div>
                {user ? <div className='flex justify-center items-center gap-4'><div className="avatar">
                    <div className="w-8 rounded-full">
                        <img src={user?.photoURL} title={user?.displayName} />
                    </div>
                </div><NavLink><button onClick={handleLogout} className="btn btn-sm rounded-1 bg-[#37B34A] text-white hover:bg-[#1f882f] hover:text-white">Logout</button></NavLink></div>

                    :

                    <NavLink to='/login'><button className="btn btn-sm rounded-1 bg-[#37B34A] text-white hover:bg-[#1f882f] hover:text-white">Log in</button></NavLink>}
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