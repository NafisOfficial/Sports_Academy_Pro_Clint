
import { Link } from 'react-router-dom';
import useInstructors from '../../Hooks/useInstructors';
import Divider from '../../Shared/Divider/Divider';
import Instructors from '../Instructors/Instructors';
import InstructorsCard from '../InstructorsCard/InstructorsCard';
import Slider from './Slider/Slider';

const Home = () => {

    const [instructors,loading] = useInstructors()

    return (
        <div>
            <Slider></Slider>
            <Divider title="Popular classes"></Divider>

            <Divider title="Popular instructors"></Divider>
            <div className="w-10/12 grid grid-cols-1 sm:grid-cols-3 gap-12 mx-auto">{instructors.slice(0,6).map(data => <InstructorsCard key={data._id} instructorData={data}></InstructorsCard>)}
              
            </div>
            <div className='w-10/12 text-center sm:text-right sm:ms-20 my-12'><Link to='/instructors' ><button className="btn bg-[#37B34A] text-white hover:text-white hover:bg-[#14693f] rounded-sm btn-xs">See all classes</button></Link></div>
        </div>
    );
};

export default Home;