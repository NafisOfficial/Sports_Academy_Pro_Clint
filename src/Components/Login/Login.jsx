import React, { useContext, useState } from 'react';
import logo from '../../../public/Logo.png'
import { FcGoogle } from 'react-icons/fc';
import loginBanner from '../../assets/Banner/Banner2.jpg'
import { Form, Link, Navigate } from 'react-router-dom';
import { BiHide, BiShow } from 'react-icons/bi';
import { useForm } from 'react-hook-form';
import { authContext } from '../../Shared/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {


    const [show,setShow] = useState(false)


    const {register,handleSubmit} = useForm()
    const {singInByGoogle,signInByEmailAndPass} = useContext(authContext)
    

    const formData = (data)=>{
        const {email,password} = data;
        signInByEmailAndPass(email, password)
        .then(()=>{
            toast.success("Sing in successfull");
        })
        .catch((error)=>{
            <Navigate to='/'></Navigate>
            toast.error(error.message)
        })
    }
    
    

    const handleSignUpWithGoogle = (event) =>{
        event.preventDefault();
       
        singInByGoogle()
        .then((result)=>{

            const {email,displayName,photoURL} = result.user;
            const userData = {email,displayName,photoURL,action:'student'}

            fetch('https://sports-server-nafisofficial.vercel.app/users',{
                        method:'POST',
                        headers: {'content-type':'application/json'},
                        body:JSON.stringify(userData)
                    })
                    .then(res=>res.json())
                    .then(<Navigate to='/'></Navigate>)
                    
            toast.success("Login successfull");
            
        })
        .catch((error)=>{
            toast.error(error.message);
        })
    }


    return (
        <div className='mt-6'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center ">
                        <img src={logo} className='w-20 mx-auto' alt="" />
                        <h1 className="text-4xl font-bold text-[#37B34A]">Hello Again!</h1>
                    </div>
                    <Form className=" flex-shrink-0 w-full sm:max-w-2xl bg-base-100 justify-center flex" onSubmit={handleSubmit(formData)}>
                            <div className="card-body w-6/12 ">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email:</span>
                                    </label>
                                    <input {...register("email",{required : true})} type="text" placeholder="email" className="input input-bordered rounded-sm" />
                                </div>
                                <div className="form-control">
                                <label className="label">
                                        <span className="label-text">Password:</span>
                                    </label>
                                    <div className="input input-bordered rounded-sm flex justify-between items-center">
                                        <input {...register("password",{required:true})} type={show?'text':'password'} placeholder="password"  />
                                        {show?<button type='button'  onClick={()=>setShow(false)}><BiHide></BiHide></button>:<button type='button'  onClick={()=>!setShow(true)}><BiShow></BiShow></button>}
                                    </div>
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#37B34A] text-white hover:text-white hover:bg-[#14693f] rounded-sm btn-sm" type='submit'>Login</button>
                                </div>
                                <button type='button' onClick={handleSignUpWithGoogle}  className="btn btn-sm  border-[#37B34A] rounded-sm text-[#37B34A]"><FcGoogle className='text-lg'></FcGoogle><span className='hidden sm:inline'>Sign in with google</span></button>
                                <div className='text-xs'>you don't have any account <Link className='text-[#37B34A]' to='/signup'>Sign Up</Link></div>
                            </div>
                            <img src={loginBanner} alt="" className='hidden sm:block w-6/12' />
                    </Form>
                    
                </div>
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

export default Login;