import React from 'react';
import logo from '../../../public/Logo.png'
import signupBanner from '../../assets/Banner/Banner.jpg'
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BiShow } from 'react-icons/bi';

const SignUp = () => {
    return (
        <div>
            <div className='mt-6'>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col">
                        <div className="text-center ">
                            <img src={logo} className='w-20 mx-auto' alt="" />
                            <h1 className="text-4xl font-bold text-[#37B34A]">Please Sign Up!</h1>
                        </div>
                        <div className=" flex-shrink-0 w-full sm:max-w-2xl bg-base-100 justify-center flex">
                            <div className="card-body w-6/12 ">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name:</span>
                                    </label>
                                    <input type="text" placeholder="Name" className="input input-bordered rounded-sm" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email:</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered rounded-sm" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password:</span>
                                    </label>
                                    <div className="input input-bordered rounded-sm flex justify-between items-center">
                                        <input type="password" placeholder="password"  />
                                        <button><BiShow></BiShow></button>
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password:</span>
                                    </label>
                                    <div className="input input-bordered rounded-sm flex justify-between items-center">
                                        <input type="password" placeholder="password"  />
                                        <button><BiShow></BiShow></button>
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#37B34A] text-white hover:text-white hover:bg-[#14693f] rounded-sm btn-sm">Login</button>
                                </div>
                                <button className="btn btn-sm  border-[#37B34A] rounded-sm text-[#37B34A]"><FcGoogle className='text-lg'></FcGoogle><span className='hidden sm:inline'>Sign up with google</span></button>
                                <div className='text-xs'>you already have an account <Link className='text-[#37B34A]' to='/login'>login</Link></div>
                            </div>
                            <img src={signupBanner} alt="" className='w-6/12' />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;