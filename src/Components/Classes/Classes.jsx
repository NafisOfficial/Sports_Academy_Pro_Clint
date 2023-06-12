import React, { useEffect, useState } from 'react';
import ClassesCard from '../ClassesCard/ClassesCard';
import useClasses from '../../Hooks/useClasses';

const Classes = () => {

    const [classes, loading] = useClasses()


    return (
        <div>
            <>
                <div className='text-center'>{loading && <progress className="progress w-56"></progress>}</div>
                <div className="w-10/12 grid grid-cols-1 sm:grid-cols-3 gap-12 mx-auto my-12">
                    {classes.map(data => <ClassesCard key={data._id} classesData={data}></ClassesCard>)}
                </div>
            </>
        </div>
    );
};

export default Classes;