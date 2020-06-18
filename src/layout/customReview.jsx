import React from 'react';
import InfoSec from './infoSec';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const review = () => (
    <div className="container-md review">
        <InfoSec tittle="Customer Reviews" info="A newborn baby can feel small and fragile. Learn how to care for your newborn
and find out what" />

        <div class="row">
            <div className="col">
                <a class="carousel-control-prev text-dark" href="#myCarousel" role="button" data-slide="prev">
                    <FontAwesomeIcon icon={faChevronLeft} className='arrow' />
                </a>
            </div>
            <div id="myCarousel" class="carousel col-11 slide w-100" data-ride="carousel">
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item py-5">
                        <div class="row row-cols-md-">
                            <div class="col mb-4">
                                <div class="title">Jon L. Clarkson</div>
                                <div className="date">a day ago</div>
                                <div className="stars">
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStarHalfAlt} className='icon' />
                                </div>
                                <div className="content">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Integer turpis risus, rutrum
                                    imperdiet finibus in, iaculis eu leo. Duis vitae
                                    turpis augue. Sed ullamcorper faucibus volutpat.
                                    Fusce faucibus euismod auctor.
                                </div>
                            </div>
                            <div class="col mb-4">
                                <div class="title">Jon L. Clarkson</div>
                                <div className="date">a day ago</div>
                                <div className="stars">
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStarHalfAlt} className='icon' />
                                </div>
                                <div className="content">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Integer turpis risus, rutrum
                                    imperdiet finibus in, iaculis eu leo. Duis vitae
                                    turpis augue. Sed ullamcorper faucibus volutpat.
                                    Fusce faucibus euismod auctor.
                                </div>
                            </div>
                            <div class="col mb-4">
                                <div class="title">Jon L. Clarkson</div>
                                <div className="date">a day ago</div>
                                <div className="stars">
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStarHalfAlt} className='icon' />
                                </div>
                                <div className="content">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Integer turpis risus, rutrum
                                    imperdiet finibus in, iaculis eu leo. Duis vitae
                                    turpis augue. Sed ullamcorper faucibus volutpat.
                                    Fusce faucibus euismod auctor.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item py-5 active">
                        <div class="row row-cols-md-">
                            <div class="col mb-4">
                                <div class="title">Jon L. Clarkson</div>
                                <div className="date">a day ago</div>
                                <div className="stars">
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStarHalfAlt} className='icon' />
                                </div>
                                <div className="content">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Integer turpis risus, rutrum
                                    imperdiet finibus in, iaculis eu leo. Duis vitae
                                    turpis augue. Sed ullamcorper faucibus volutpat.
                                    Fusce faucibus euismod auctor.
                                </div>
                            </div>
                            <div class="col mb-4">
                                <div class="title">Jon L. Clarkson</div>
                                <div className="date">a day ago</div>
                                <div className="stars">
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStarHalfAlt} className='icon' />
                                </div>
                                <div className="content">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Integer turpis risus, rutrum
                                    imperdiet finibus in, iaculis eu leo. Duis vitae
                                    turpis augue. Sed ullamcorper faucibus volutpat.
                                    Fusce faucibus euismod auctor.
                                </div>
                            </div>
                            <div class="col mb-4">
                                <div class="title">Jon L. Clarkson</div>
                                <div className="date">a day ago</div>
                                <div className="stars">
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStarHalfAlt} className='icon' />
                                </div>
                                <div className="content">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Integer turpis risus, rutrum
                                    imperdiet finibus in, iaculis eu leo. Duis vitae
                                    turpis augue. Sed ullamcorper faucibus volutpat.
                                    Fusce faucibus euismod auctor.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default review;
