import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { authContext } from '../../Shared/AuthProvider/AuthProvider';
import Selected from '../Selected/Selected';

const StudentClasses = () => {

    const { user } = useContext(authContext);


    const [selectedByUser, setSelectedByUser] = useState([])

    


    useEffect(() => {
        fetch('http://localhost:5000/userBooked')
            .then(res => res.json())
            .then(data => setSelectedByUser(data.filter(dt => dt.booked_by === user?.email)))
    }, [user?.email])








    return (
        <div className='w-10/12 mx-auto'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Instructor Info</th>
                            <th>Class info</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedByUser.map((data)=><Selected key={data._id} data={data}></Selected>)}
                        
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default StudentClasses;