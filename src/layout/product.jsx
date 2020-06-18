import React from 'react';
import InfoSec from './infoSec';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import firstImg from '../images/7.png';
import secImage from '../images/8.png';

const product = () => (
    <div className=" product">
        <div className="content">
            <div class="row row-cols-1 row-cols-md-2">
                <div class="col mb-4 img">
                    <div className="row">
                        <div class="col-8 product-img">
                            <img src={firstImg} alt="" className='w-100 h-100' />
                        </div>
                        <div class="col-8 blur">
                            <img src={secImage} alt="" className='w-100 h-100' />

                        </div>
                    </div>
                </div>
                <div class="col mb-4 info">
                    <div className="title">Baby Carrier One Air</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer turpis risus, rutrum imperdiet finibus in, iaculis eu leo. Duis vitae turpis augue.</p>
                    <div className="price">Price <span>$219.99</span></div>
                    <button className='btn'>Learn More <FontAwesomeIcon icon={faArrowRight} className='icon' /></button>
                </div>

            </div>
        </div>
    </div>
);

export default product;
