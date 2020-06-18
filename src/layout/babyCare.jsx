import React, { Fragment } from 'react';
import InfoSec from './infoSec';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import firstImg from '../images/4.png';
import secImage from '../images/5.png';
import thirdImg from '../images/6.png';

class care extends React.Component {
    state = {
        isClicked: false,
        counter: 0
    };

    getAllPosts = () => {
        let isClicked = this.state.isClicked;
        let counter = this.state.counter;
        if (counter >= 1) {
            isClicked = false
        } else {
            isClicked = true;
            counter += 1;
        }
        this.setState({
            isClicked,
            counter
        })

    }

    render() {
        return (
            <div className="container-md care">
                <InfoSec tittle="BabyCare Articles" info="A newborn baby can feel small and fragile. Learn how to care for your newborn
and find out what" />

                {
                    this.state.isClicked ?
                        <Fragment>
                            <div class="row row-cols-1 row-cols-md-3">
                                <div class="col mb-4">
                                    <div class="card h-100">
                                        <img src={firstImg} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <div class="card-title">Congratulaons! You've got a new member of your family</div>
                                            <div className="date">By Olivia - May 28, 2019</div>
                                            <div className="content">
                                                Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit. Integer turpis risus, rutrum
                                                imperdiet finibus in, iaculis eu leo. Duis vitae
                                                turpis augue. Sed ullamcorper faucibus
                                                volutpat. Fusce faucibus euismod auctor.
                        </div>
                                            <a className='arrow' href='#'><FontAwesomeIcon icon={faArrowRight} className='icon' /></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col mb-4">
                                    <div class="card h-100">
                                        <img src={secImage} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <div class="card-title">Changing diapers frequently is an important aspect</div>
                                            <div className="date">By Olivia - May 28, 2019</div>
                                            <div className="content">
                                                Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit. Integer turpis risus, rutrum
                                                imperdiet finibus in, iaculis eu leo. Duis vitae
                                                turpis augue. Sed ullamcorper faucibus
                                                volutpat. Fusce faucibus euismod auctor.
                        </div>
                                            <a className='arrow' href='#'><FontAwesomeIcon icon={faArrowRight} className='icon' /></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col mb-4">
                                    <div class="card h-100">
                                        <img src={thirdImg} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <div class="card-title">Here’s How You Can Get Your Kids to Eat Whole Grains</div>
                                            <div className="date">By Olivia - May 28, 2019</div>
                                            <div className="content">
                                                Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit. Integer turpis risus, rutrum
                                                imperdiet finibus in, iaculis eu leo. Duis vitae
                                                turpis augue. Sed ullamcorper faucibus
                                                volutpat. Fusce faucibus euismod auctor.
                        </div>
                                            <a className='arrow' href='#'><FontAwesomeIcon icon={faArrowRight} className='icon' /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row row-cols-1 row-cols-md-3">
                                <div class="col mb-4">
                                    <div class="card h-100">
                                        <img src={firstImg} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <div class="card-title">Congratulaons! You've got a new member of your family</div>
                                            <div className="date">By Olivia - May 28, 2019</div>
                                            <div className="content">
                                                Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit. Integer turpis risus, rutrum
                                                imperdiet finibus in, iaculis eu leo. Duis vitae
                                                turpis augue. Sed ullamcorper faucibus
                                                volutpat. Fusce faucibus euismod auctor.
                        </div>
                                            <a className='arrow' href='#'><FontAwesomeIcon icon={faArrowRight} className='icon' /></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col mb-4">
                                    <div class="card h-100">
                                        <img src={secImage} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <div class="card-title">Changing diapers frequently is an important aspect</div>
                                            <div className="date">By Olivia - May 28, 2019</div>
                                            <div className="content">
                                                Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit. Integer turpis risus, rutrum
                                                imperdiet finibus in, iaculis eu leo. Duis vitae
                                                turpis augue. Sed ullamcorper faucibus
                                                volutpat. Fusce faucibus euismod auctor.
                        </div>
                                            <a className='arrow' href='#'><FontAwesomeIcon icon={faArrowRight} className='icon' /></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col mb-4">
                                    <div class="card h-100">
                                        <img src={thirdImg} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <div class="card-title">Here’s How You Can Get Your Kids to Eat Whole Grains</div>
                                            <div className="date">By Olivia - May 28, 2019</div>
                                            <div className="content">
                                                Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit. Integer turpis risus, rutrum
                                                imperdiet finibus in, iaculis eu leo. Duis vitae
                                                turpis augue. Sed ullamcorper faucibus
                                                volutpat. Fusce faucibus euismod auctor.
                        </div>
                                            <a className='arrow' href='#'><FontAwesomeIcon icon={faArrowRight} className='icon' /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Fragment>
                        : <div class="row row-cols-1 row-cols-md-3">
                            <div class="col mb-4">
                                <div class="card h-100">
                                    <img src={firstImg} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <div class="card-title">Congratulaons! You've got a new member of your family</div>
                                        <div className="date">By Olivia - May 28, 2019</div>
                                        <div className="content">
                                            Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit. Integer turpis risus, rutrum
                                            imperdiet finibus in, iaculis eu leo. Duis vitae
                                            turpis augue. Sed ullamcorper faucibus
                                            volutpat. Fusce faucibus euismod auctor.
                        </div>
                                        <a className='arrow' href='#'><FontAwesomeIcon icon={faArrowRight} className='icon' /></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-4">
                                <div class="card h-100">
                                    <img src={secImage} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <div class="card-title">Changing diapers frequently is an important aspect</div>
                                        <div className="date">By Olivia - May 28, 2019</div>
                                        <div className="content">
                                            Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit. Integer turpis risus, rutrum
                                            imperdiet finibus in, iaculis eu leo. Duis vitae
                                            turpis augue. Sed ullamcorper faucibus
                                            volutpat. Fusce faucibus euismod auctor.
                        </div>
                                        <a className='arrow' href='#'><FontAwesomeIcon icon={faArrowRight} className='icon' /></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-4">
                                <div class="card h-100">
                                    <img src={thirdImg} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <div class="card-title">Here’s How You Can Get Your Kids to Eat Whole Grains</div>
                                        <div className="date">By Olivia - May 28, 2019</div>
                                        <div className="content">
                                            Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit. Integer turpis risus, rutrum
                                            imperdiet finibus in, iaculis eu leo. Duis vitae
                                            turpis augue. Sed ullamcorper faucibus
                                            volutpat. Fusce faucibus euismod auctor.
                        </div>
                                        <a className='arrow' href='#'><FontAwesomeIcon icon={faArrowRight} className='icon' /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                }
                <div className="btn-con">
                    <button className='btn' onClick={() => this.getAllPosts()}>All Posts</button>
                </div>
            </div>
        )
    }
}

export default care;
