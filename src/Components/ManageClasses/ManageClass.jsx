import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const ManageClass = ({ pendingclassesData }) => {
    const { _id, status, class_name, class_image, instructor_name, instructor_image, available_seats, price, enrolled, syllabus } = pendingclassesData;

    const handleApprove = () => {
        fetch(`https://sports-server-nafisofficial.vercel.app/updateClass/${_id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    toast.success("Class is approved")
                }
            })
    }
    const handleDelete = () => {
        Swal.fire({
            title: 'Give a short feedback',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Submit',
            showLoaderOnConfirm: true,
            preConfirm: (data) => {
                fetch('https://sports-server-nafisofficial.vercel.app/feedback', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then()
            },
            allowOutsideClick: () => !Swal.isLoading()
        })
        
        fetch(`https://sports-server-nafisofficial.vercel.app/updateClass/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.success("Class is Deleted")
                }
                else {
                    toast.error('Operation failed')
                }
            })
    }








    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure><img src={class_image} alt="Shoes" /></figure>
                <div className={available_seats ? "card-body" : "card-body bg-red-200"}>
                    <h2 className="card-title text-[#37B372]">Class name: {class_name}</h2>
                    <h2 className="card-title text-[#37B372]">Instructor: {instructor_name}</h2>
                    <p className='text-orange-400'>Price: {price} $</p>
                    <p>Available Seats: {available_seats}</p>
                    <p>Total enrolled:{enrolled}</p>
                    <p>You will learn like:</p>
                    <p className='text-red-300'>Status:{status ? status : 'Approved'}</p>
                    <ul>
                        <li className='mx-4'>1. {syllabus[0]}</li>
                        <li className='mx-4'>2. {syllabus[1]}</li>
                        <li className='mx-4'>3. {syllabus[2]}</li>
                    </ul>
                    <div className="card-actions flex justify-between items-center">
                        {
                            status == 'pending' ? <button onClick={handleApprove} className="btn bg-[#37B34A] text-white hover:text-white hover:bg-[#14693f] rounded-1 btn-sm">Approve</button> : <button disabled className="btn bg-[#37B34A] text-white hover:text-white hover:bg-[#14693f] rounded-1 btn-sm">Approve</button>
                        }


                        <button onClick={handleDelete} className="btn bg-[#37B34A] text-white hover:text-white hover:bg-[#14693f] rounded-1 btn-sm">Deny</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageClass;