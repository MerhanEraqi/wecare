import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const footer = () => (
    <footer className="container-md">
        <div className="footer-header">
            <div class="row">
                <div class="col-9 mb-4">
                    <p>Sign up for our newsletter <br /> <span>Newborn Baby</span></p>
                </div>
                <div class="col">
                    <button className='btn'>Get Started <FontAwesomeIcon icon={faArrowRight} className='icon' /></button>

                </div>
            </div>
        </div>

        <div class="row row-cols-1 row-cols-md-4 main-row">
            <div class="col mb-4">
                <div className='title pb-3'>About US</div>
                <ul>
                    <li>Privacy and policy</li>
                    <li>Our Customer</li>
                    <li>Blog Post</li>
                    <li>Help & Support</li>
                </ul>
            </div>
            <div class="col mb-4">
                <div className='title pb-3'>Community</div>
                <ul>
                    <li>About us</li>
                    <li>Our clients</li>
                    <li>Legal notic</li>
                </ul>
            </div>
            <div class="col mb-4">
                <div className='title pb-3'>Help & Advice</div>
                <ul>
                    <li>Help Center</li>
                    <li>Contact Support</li>
                    <li>Instructions</li>
                    <li>Some Question</li>
                </ul>
            </div>
            <div className="col mb-4 rate">
                <div className="stars mb-4">
                    <FontAwesomeIcon icon={faStar} className='icon' />
                    <FontAwesomeIcon icon={faStar} className='icon' />
                    <FontAwesomeIcon icon={faStar} className='icon' />
                    <FontAwesomeIcon icon={faStar} className='icon' />
                    <FontAwesomeIcon icon={faStarHalfAlt} className='icon' />
                </div>
                <p>10,000 Trust people The full-stack design team who focuses on digital products whatever they are.</p>
                <div class="social d-flex flex-row">
                    <div class="col">
                        <a href="#"><FontAwesomeIcon icon={faFacebook} className='icon' /></a>
                    </div>
                    <div class="col">
                        <a href="#"><FontAwesomeIcon icon={faTwitter} className='icon' /></a>
                    </div>
                    <div class="col">
                        <a href="#"><FontAwesomeIcon icon={faInstagram} className='icon' /></a>
                    </div>
                    <div class="col">
                        <a href="#"><FontAwesomeIcon icon={faGithub} className='icon' /></a>
                    </div>

                </div>
            </div>

        </div >
        <div className="footer-btt">
            <a className="brand" href="#"><span>We</span>Care</a>
            <p>Designed by @uiexpert - 2019</p>
        </div>
    </footer >
);

export default footer;