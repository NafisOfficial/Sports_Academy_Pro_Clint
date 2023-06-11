import React from 'react';

const ClassesCard = ({ classesData }) => {


    const { class_name, class_image, instructor_image, available_seats, price, enrolled, syllabus } = classesData


    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure><img src={class_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {class_name}</h2>
                    <p>Price: {price} $</p>
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
                        <button className="btn bg-[#37B34A] text-white hover:text-white hover:bg-[#14693f] rounded-sm btn-sm">Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;