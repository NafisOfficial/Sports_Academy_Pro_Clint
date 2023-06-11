import React, { useEffect, useState } from 'react';
import InstructorsCard from '../InstructorsCard/InstructorsCard';

const Instructors = () => {

    const [instructors, setInstructors] = useState([])
    const [showAll, setShowAll] = useState(false)

    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data));
    }, [])



    return (
        <>
            <div className="w-10/12 grid grid-cols-1 sm:grid-cols-3 gap-12 mx-auto">
                {showAll ? instructors.map(data => <InstructorsCard key={data._id} instructorData={data}></InstructorsCard>) : instructors.slice(0, 6).map(data => <InstructorsCard key={data._id} instructorData={data}></InstructorsCard>)}

            </div>
            <div className='text-center'>
               { showAll? <button onClick={()=>setShowAll(false)} className="btn w-38 mx-auto my-6 bg-[#37B34A] text-white hover:text-white hover:bg-[#14693f] rounded-sm ">Hide</button>
                :
                <button onClick={()=>setShowAll(true)} className="btn w-38 mx-auto my-6 bg-[#37B34A] text-white hover:text-white hover:bg-[#14693f] rounded-sm ">Show All</button> }
            </div>
        </>
    );
};

export default Instructors;