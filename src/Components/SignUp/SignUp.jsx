import React, { useContext, useRef, useState } from 'react';
import logo from '../../../public/Logo.png'
import signupBanner from '../../assets/Banner/Banner.jpg'
import { Form, Link } from 'react-router-dom';
import { BiHide, BiShow } from 'react-icons/bi';
import { useForm } from 'react-hook-form';
import { authContext } from '../../Shared/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const SignUp = () => {

    const [show, setShow] = useState(false)
    const [showconfirm, setShowconfirm] = useState(false)

    const { createUserByEmailPassword,updateUser } = useContext(authContext)


    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const formData = (data) => {
        const email = data.email;
        const password = data.password;
        const displayName = data.displayName;
        const photoURL = data.photoURL;

        const value = {displayName,photoURL}

        createUserByEmailPassword(email, password)
            .then(() => {
                toast.success("User created successfully");
                updateUser(value)
                .then(()=>{
                    
                })
                .catch((error)=>{
                    toast.error(error.message);
                })
            }).catch((error) => {
                console.log(error.message);
                toast.error(`${error.message}`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    theme: "light",
                    });
            })
    }


    const password = useRef({})
    password.current = watch('password', '');



    return (
        <div>
            <div className='mt-6'>
                <div className="hero min-h-screen bg-base-200">
                    <Form className="hero-content flex-col" onSubmit={handleSubmit(formData)}>
                        <div className="text-center ">
                            <img src={logo} className='w-20 mx-auto' alt="" />
                            <h1 className="text-4xl font-bold text-[#37B34A]">Please Sign Up!</h1>
                        </div>
                        <div className=" flex-shrink-0 w-full sm:max-w-4xl bg-base-100 justify-center items-center flex">
                            <div className="card-body w-6/12 ">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name:</span>
                                    </label>
                                    <input {...register("displayName", { required: 'This is required!' })} type="text" placeholder="Name" className="input input-bordered rounded-sm" />
                                    <p className='text-red-700'>{errors?.name?.message}</p>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email:</span>
                                    </label>
                                    <input {...register("email", { required: 'This is required!' })} type="text" placeholder="email" className="input input-bordered rounded-sm" />
                                    <p className='text-red-700'>{errors?.email?.message}</p>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url:</span>
                                    </label>
                                    <input {...register("photoURL", { required: 'This is required!' })} type="text" placeholder="Photo Url" className="input input-bordered rounded-sm" />
                                    <p className='text-red-700'>{errors?.photoUrl?.message}</p>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password:</span>
                                    </label>
                                    <div className="input input-bordered rounded-sm flex justify-between items-center">
                                        <input {...register("password",
                                            {
                                                required: 'This is required!',
                                                minLength: { value: 6, message: "password should be at least 6 character" },
                                                maxLength: { value: 18, message: "Keep password between 6 to 18 character" },
                                                pattern: {
                                                    value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/i,
                                                    message: "Include at least one capital letter and special character."
                                                },
                                            })} type={show ? 'text' : 'password'} placeholder="password" />
                                        {show ? <button type='button' onClick={() => setShow(false)}><BiHide></BiHide></button> : <button type='button' onClick={() => !setShow(true)}><BiShow></BiShow></button>}
                                    </div>
                                    <p className='text-red-700'>{errors?.password?.message}</p>

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password:</span>
                                    </label>
                                    <div className="input input-bordered rounded-sm flex justify-between items-center">
                                        <input {...register("confirmPassword",
                                            { required: "This is required" })} type={showconfirm ? 'text' : 'password'} placeholder="confirm password" />
                                        {showconfirm ? <button type='button' onClick={() => setShowconfirm(false)}><BiHide></BiHide></button> : <button type='button' onClick={() => !setShowconfirm(true)}><BiShow></BiShow></button>}
                                    </div>
                                    <p className='text-red-700'>{errors?.confirmPassword?.message}</p>
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' disabled={password.current !== watch('confirmPassword')} className="btn bg-[#37B34A] text-white hover:text-white hover:bg-[#14693f] rounded-sm btn-sm">Sign Up</button>
                                </div>
                                {/* <button type='button' onClick={handleSignUpWithGoogle} className="btn btn-sm  border-[#37B34A] rounded-sm text-[#37B34A]"><FcGoogle className='text-lg'></FcGoogle><span className='hidden sm:inline'>Sign up with google</span></button> */}
                                <div className='text-xs'>you already have an account <Link className='text-[#37B34A]' to='/login'>login</Link></div>
                            </div>
                            <img src={signupBanner} alt="" className='hidden h-full sm:w-6/12 sm:block' />
                        </div>

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

export default SignUp;