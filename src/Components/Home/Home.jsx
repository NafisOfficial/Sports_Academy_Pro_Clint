
import Divider from '../../Shared/Divider/Divider';
import Instructors from '../Instructors/Instructors';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Divider title="Our honorable instructors"></Divider>
            <Instructors></Instructors>
        </div>
    );
};

export default Home;