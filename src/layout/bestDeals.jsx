import React from 'react';
import InfoSec from './infoSec';
import firstImg from '../images/2.png';
import secImage from '../images/1.png';
import thirdImg from '../images/3.png';

const bestDeals = () => (
    <div className="container-md bestDeals">
        <InfoSec tittle="Best Deals" info="A newborn baby can feel small and fragile. Learn how to care for your newbornand find out what" />

        <div class="row row-cols-1 row-cols-md-3">
            <div class="col mb-4">
                <div class="card h-100">
                    <div className="card-img-top">
                        <img src={firstImg} class="w-100 h-100" alt="..." />
                    </div>
                    <div class="card-body">
                        <div class="card-title">Mee Mee Baby Stroller</div>
                        <button className="btn">Add To Cart</button>
                    </div>
                </div>
            </div>
            <div class="col mb-4">
                <div class="card h-100">
                    <div className="card-img-top">
                        <img src={secImage} class="w-100 h-100" alt="..." />
                    </div>
                    <div class="card-body">
                        <div class="card-title">Hooded Blanket Cum</div>
                        <button className="btn">Add To Cart</button>
                    </div>
                </div>
            </div>
            <div class="col mb-4">
                <div class="card h-100">
                    <div className="card-img-top">
                        <img src={thirdImg} class="w-100 h-100" alt="..." />
                    </div>
                    <div class="card-body">
                        <div class="card-title">Gentle Baby Bath</div>
                        <button className="btn">Add To Cart</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
);

export default bestDeals;
