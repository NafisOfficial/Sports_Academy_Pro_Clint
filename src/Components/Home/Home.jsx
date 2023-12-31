
import { Link } from 'react-router-dom';
import useInstructors from '../../Hooks/useInstructors';
import Divider from '../../Shared/Divider/Divider';
import InstructorsCard from '../InstructorsCard/InstructorsCard';
import Slider from './Slider/Slider';
import useClasses from '../../Hooks/useClasses';
import ClassesCard from '../ClassesCard/ClassesCard';
import { FaLongArrowAltRight } from 'react-icons/fa';
import DataAnalysis from '../DataAnalysis/DataAnalysis';
import useHandleUser from '../../Hooks/useHandleUser';

const Home = () => {

    const [instructors,loading] = useInstructors()
    const [classes] = useClasses()


    return (
        <div >
            <Slider></Slider>
            <Divider title="Popular classes"></Divider>
            <div className='text-center'>{loading && <progress className="progress w-56"></progress>}</div>
            <div className="w-10/12 grid grid-cols-1 sm:grid-cols-3 gap-12 mx-auto">{classes.slice(0,6).map(data => <ClassesCard key={data._id} classesData={data}></ClassesCard>)} </div>
            <div className='w-10/12 text-center sm:text-right sm:ms-20 my-12'><button disabled={loading?true:false} className="btn bg-[#37B34A] text-white hover:text-white hover:bg-[#14693f] rounded-sm btn-sm"><Link to='/classes' className='flex gap-2'>See all classes <FaLongArrowAltRight></FaLongArrowAltRight></Link></button></div>
            <Divider title="Popular instructors"></Divider>
            <div className='text-center'>{loading && <progress className="progress w-56"></progress>}</div>
            <div className="w-10/12 grid grid-cols-1 sm:grid-cols-3 gap-12 mx-auto">{instructors.slice(0,6).map(data => <InstructorsCard key={data._id} instructorData={data}></InstructorsCard>)}
            </div>
            <div className='w-10/12 text-center sm:text-right sm:ms-20 my-12'><button disabled={loading?true:false} className="btn bg-[#37B34A] text-white hover:text-white hover:bg-[#14693f] rounded-sm btn-sm"><Link to='/instructors' className='flex gap-2'>See all Instructors <FaLongArrowAltRight></FaLongArrowAltRight></Link></button></div>
            <Divider title="Data Analysis"></Divider>
            <DataAnalysis></DataAnalysis>
        </div>
    );
};

export default Home;