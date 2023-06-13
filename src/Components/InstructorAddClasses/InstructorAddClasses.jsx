import React from 'react';
import { Form } from 'react-hook-form';

const InstructorAddClasses = () => {
    return (
        <div className='w-10/12 mx-auto my-12'>
            <h1 className='text-4xl text-center my-6 text-[#37B34A]'>Provide class details</h1>
            <form action="" className='border border-1 p-6 rounded text-auto'>
                <div>
                    <label htmlFor="Class_name">Class Name:</label><br />
                    <input className='input input-bordered w-10/12 input-md' type="text" name="Class_name" placeholder='add a class name' id="name" />
                </div>
                <div>
                    <label htmlFor="url">Image url:</label><br />
                    <input className='input input-bordered w-10/12 input-md' type="text" name="url" placeholder='photo url' id="photo_url" />
                </div>
                <div>
                    <label htmlFor="name">Available Seat:</label><br />
                    <input className='input input-bordered w-10/12 input-md' type="text" name="name" placeholder='name' id="name" />
                </div>
                <div>
                    <label htmlFor="name">Price:</label><br />
                    <input className='input input-bordered w-10/12 input-md' type="text" name="name" placeholder='name' id="name" />
                </div>
                    <div className='text-center mt-4'>
                        <button className='btn btn-md bg-[#37B34A] text-white hover:bg-[#41bd53] hover' type="submit">Submit</button>
                    </div>
            </form>


        </div>
    );
};

export default InstructorAddClasses;