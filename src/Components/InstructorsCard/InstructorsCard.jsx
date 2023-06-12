import React from 'react';

const InstructorsCard = ({instructorData}) => {

    const {instructor_image,instructor_name,instructor_email,instructor_category,num_classes_taken,total_students} = instructorData

    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure><img src={instructor_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {instructor_name}</h2>
                    <p>Email: {instructor_email}</p>
                    <p>Catagory: {instructor_category}</p>
                    <p>Total students:{total_students}</p>
                    <div className="card-actions flex justify-between">
                        <div>Tatal classes: {num_classes_taken}</div>
                        <button className="btn bg-[#37B34A] text-white hover:text-white hover:bg-[#14693f] rounded-1 btn-xs">Classes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorsCard;