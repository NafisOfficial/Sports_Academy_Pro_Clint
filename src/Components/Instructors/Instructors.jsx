import React, { useEffect, useState } from 'react';
import InstructorsCard from '../InstructorsCard/InstructorsCard';

const Instructors = () => {

    const [instructors,setInstructors] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/instructors')
        .then(res=>res.json())
        .then(data=>setInstructors(data));
    },[])



    return (
        <div className="w-10/12 grid grid-cols-1 sm:grid-cols-3 gap-12 mx-auto">
            {instructors.map(data=><InstructorsCard  key={data._id} instructorData={data}></InstructorsCard>)}
        </div>
    );
};

export default Instructors;