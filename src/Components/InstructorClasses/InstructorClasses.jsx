
import React from 'react';
import useClasses from '../../Hooks/useClasses';
import useInstructorClasses from '../../Hooks/useInstructorClasses';
import Card from './Card';


const InstructorClasses = () => {

     const [instructorClass] = useInstructorClasses()


    return (
        <div className="w-10/12 grid grid-cols-1 sm:grid-cols-3 gap-12 mx-auto my-12">
            {instructorClass?.map(data => <Card key={data._id} classesData={data}></Card>)}
        </div>
    );
};

export default InstructorClasses;