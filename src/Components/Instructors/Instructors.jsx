import InstructorsCard from '../InstructorsCard/InstructorsCard';
import useInstructors from '../../Hooks/useInstructors';

const Instructors = () => {

    const [instructors,loading] = useInstructors();


    return (
        <>
        <div className='text-center'>{loading && <progress className="progress w-56"></progress>}</div>
            <div className="w-10/12 grid grid-cols-1 sm:grid-cols-3 gap-12 mx-auto my-12">
                {instructors.map(data => <InstructorsCard key={data._id} instructorData={data}></InstructorsCard>)}

            </div>
        </>
    );
};

export default Instructors;