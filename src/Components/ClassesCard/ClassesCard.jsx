import React, { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { authContext } from '../../Shared/AuthProvider/AuthProvider';

const ClassesCard = ({ classesData }) => {

    const {user} = useContext(authContext);

    const { _id,class_name, class_image,instructor_name, instructor_image, available_seats, price, enrolled, syllabus } = classesData

    const addClasses = ()=>{
        const person = user.email;
        const booked = {...classesData,booked_by:person,status:'unpaid'}

        fetch('http://localhost:5000/users',{
                        method:'POST',
                        headers: {'content-type':'application/json'},
                        body:JSON.stringify(booked)
                    })
                    .then(res=>res.json())
                    .then()
                    toast.success("You booked a class");
    }

    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure><img src={class_image} alt="Shoes" /></figure>
                <div className={available_seats?"card-body":"card-body bg-red-200"}>
                    <h2 className="card-title text-[#37B372]">Class name: {class_name}</h2>
                    <h2 className="card-title text-[#37B372]">Instructor: {instructor_name}</h2>
                    <p className='text-orange-400'>Price: {price} $</p>
                    <p>Available Seats: {available_seats}</p>
                    <p>Total enrolled:{enrolled}</p>
                    <p>You will learn like:</p>
                    <ul>
                        <li className='mx-4'>1. {syllabus[0]}</li>
                        <li className='mx-4'>2. {syllabus[1]}</li>
                        <li className='mx-4'>3. {syllabus[2]}</li>
                    </ul>
                    <div className="card-actions flex justify-between items-center">
                        <div className="avatar placeholder">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                <img src={instructor_image} alt="" />
                            </div>
                        </div>
                        <button onClick={addClasses} disabled={available_seats?false:true} className="btn bg-[#37B34A] text-white hover:text-white hover:bg-[#14693f] rounded-1 btn-sm">Add</button>
                    </div>
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

export default ClassesCard;