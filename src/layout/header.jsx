import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const header = () => (
    <div className="container-md" >
        <div className="header-img">
        </div>
        <div className="overlay"></div>


        <div className="header-content pt-5">
            <h6 className='pb-4'>Welcome <span><span>We</span>Care</span></h6>
            <h1 className=''>How to Take Care of</h1>
            <h2 className='pb-4'>Newborn Baby</h2>
            <p>
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is
                that it has a more-or-less normal distribution of letters,
            </p>
            <button className='btn'>Learn More <FontAwesomeIcon icon={faArrowRight} className='icon' /></button>
        </div>

    </div>
);

export default header;