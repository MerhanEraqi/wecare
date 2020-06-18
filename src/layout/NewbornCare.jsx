import React from 'react';
import InfoSec from './infoSec';
import firstImg from '../images/21.png';
import secImage from '../images/22.png';
import thirdImg from '../images/23.png';

const kcare = () => (
    <div className="container-md kcare">
        <InfoSec tittle="Newporn Articles" info="A newborn baby can feel small and fragile. Learn how to care for your newborn
and find out what" />

        <div class="row row-cols-1 row-cols-md-3">
            <div class="col mb-4">
                <div class="card h-100">
                    <div className="card-img-top">
                        <img src={firstImg} class=" h-100" alt="..." />
                    </div>
                    <div class="card-body">
                        <div class="card-title">Closing</div>
                        <div className="content">
                            Lorem ipsum dolor sit amet
                        </div>
                    </div>
                </div>
            </div>
            <div class="col mb-4">
                <div class="card h-100">
                    <div className="card-img-top">
                        <img src={secImage} class="w-100 h-100" alt="..." />
                    </div>
                    <div class="card-body">
                        <div class="card-title">Feeding</div>
                        <div className="content">
                            Lorem ipsum dolor sit amet
                        </div>
                    </div>
                </div>
            </div>
            <div class="col mb-4">
                <div class="card h-100">
                    <div className="card-img-top">
                        <img src={thirdImg} class="w-100 h-100" alt="..." />
                    </div>
                    <div class="card-body">
                        <div class="card-title">Bedtime</div>
                        <div className="content">
                            Lorem ipsum dolor sit amet
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
);

export default kcare;
