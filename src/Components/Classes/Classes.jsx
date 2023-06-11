import React, { useEffect, useState } from 'react';
import ClassesCard from '../ClassesCard/ClassesCard';

const Classes = () => {

    const [classes, setClasses] = useState([])
    const [showAll, setShowAll] = useState(false)

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data));
    }, [])


    return (
        <div>
            <>
                <div className="w-10/12 grid grid-cols-1 sm:grid-cols-3 gap-12 mx-auto">
                    {showAll ? classes.map(data => <ClassesCard key={data._id} classesData={data}></ClassesCard>) : classes.slice(0, 6).map(data => <ClassesCard key={data._id} classesData={data}></ClassesCard>)}

                </div>
                <div className='text-center'>
                    {showAll ? <button onClick={() => setShowAll(false)} className="btn w-38 mx-auto my-6 bg-[#37B34A] text-white hover:text-white hover:bg-[#14693f] rounded-sm ">Hide</button>
                        :
                        <button onClick={() => setShowAll(true)} className="btn w-38 mx-auto my-6 bg-[#37B34A] text-white hover:text-white hover:bg-[#14693f] rounded-sm ">Show All</button>}
                </div>
            </>
        </div>
    );
};

export default Classes;