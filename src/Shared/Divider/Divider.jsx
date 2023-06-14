import React from 'react';


const Divider = (props) => {

  
    const {title} = props;

    return (
        <div className='w-10/12 my-28 mx-auto'>
             <div className="divider text-[#37B34A] text-lg sm:text-4xl">{title}</div>
        </div>
    );
};

export default Divider;