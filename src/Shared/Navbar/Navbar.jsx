import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { MdDarkMode } from 'react-icons/md';
import { BsSunFill } from 'react-icons/bs';
import useHandleUser from '../../Hooks/useHandleUser';

const Navbar = () => {

    const { darkmod, setDarkmode, user, logOut } = useContext(authContext);

    const [userCollecton] = useHandleUser();
    
    if(userCollecton){
        const action = userCollecton?.action;
    }

    const handleLogout = () => {

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
                        <li className={`${userCollecton?.action!=='student'?'hidden':''}`}><Link to='/enrolled' className='text-[#1f882f]'>My enrolled classes</Link></li>
                        <li className={`${userCollecton?.action!=='student'?'hidden':''}`}><Link to='/studentClasses' className='text-[#1f882f]'>My Selected Classes</Link></li>
                        <li className={`${userCollecton?.action!=='instructor'?'hidden':''}`}><Link to='/instructorsClasses' className='text-[#1f882f]'>Classes</Link></li>
                        <li className={`${userCollecton?.action!=='instructor'?'hidden':''}`}><Link to='/addClasses' className='text-[#1f882f]'>Add a Class</Link></li>
                        <li className={`${userCollecton?.action!=='admin'?'hidden':''}`}><Link to='/manageUsers' className='text-[#1f882f]'>Manage Users</Link></li>
                        <li className={`${userCollecton?.action!=='admin'?'hidden':''}`}><Link to='/manageClasses' className='text-[#1f882f]'>Manage classes</Link></li>
                    </ul>
                </div> : <></>}
                <label className="swap swap-rotate">

                    {/* this hidden checkbox controls the state */}
                    <input onClick={() => setDarkmode(!darkmod)} type="checkbox" />

                    <>
                        { darkmod? 
                            
                            <BsSunFill className='text-3xl text-white'></BsSunFill>
                            :
                            <MdDarkMode className='text-3xl'></MdDarkMode>
                        }
                    </>

                </label>
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