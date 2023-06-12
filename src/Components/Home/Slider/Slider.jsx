import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/captioned.css';
import 'react-awesome-slider/dist/styles.css';
import './slider.css'

const Slider = () => {


    const AutoplaySlider = withAutoplay(AwesomeSlider);

    

    return (
        <div className='w-10/12 mx-auto rounded-sm my-4'>
            <AutoplaySlider

                play={true}
                cancelOnInteraction={false}
                interval={1500}

                className='aws-btn'>
                <div  data-src='https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?size=626&ext=jpg&ga=GA1.1.890027464.1676093679&semt=sph'></div>
                <div data-src='https://img.freepik.com/free-photo/cricketer-field-action_53876-63345.jpg?size=626&ext=jpg&ga=GA1.2.890027464.1676093679&semt=sph'></div>
                <div data-src='https://img.freepik.com/free-photo/legs-soccer-football-player_155003-5349.jpg?size=626&ext=jpg&ga=GA1.1.890027464.1676093679&semt=ais'></div>
                <div data-src='https://img.freepik.com/free-photo/man-playing-padel_657883-308.jpg?size=626&ext=jpg&ga=GA1.1.890027464.1676093679&semt=sph'></div>
                <div data-src='https://img.freepik.com/free-photo/full-shot-kids-playing-kickball-field_23-2149457227.jpg?size=626&ext=jpg&ga=GA1.1.890027464.1676093679&semt=ais'></div>

            </AutoplaySlider>
        </div>
    );
};

export default Slider;