import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import User from './User';
import { authContext } from '../../Shared/AuthProvider/AuthProvider';


const ManageUsers = () => {

    const users = useLoaderData();

    const { darkmod } = useContext(authContext)



    return (
        <div className={`w-10/12 mx-auto ${darkmod?'text-white':''}`}>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className={`${darkmod?'text-white':''}`}>
                            <th>User Info</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Make your your</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(data=><User key={data?._id} data={data}></User>)}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageUsers;