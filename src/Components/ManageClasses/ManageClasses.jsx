import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ManageClass from './ManageClass';

const ManageClasses = () => {

    const data = useLoaderData();

    return (
        <div>
            <div className="w-10/12 grid grid-cols-1 sm:grid-cols-3 gap-12 mx-auto my-12">
                        {data.map(data => <ManageClass key={data._id} pendingclassesData={data}></ManageClass>)}
                </div>
        </div>
    );
};

export default ManageClasses;