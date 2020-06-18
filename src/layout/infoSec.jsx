import React from 'react';

const infoSec = (props) => (
    <div className="infoSec text-center" >
        <div className='tittle'>{props.tittle}</div>
        <p className=''>{props.info}</p>
        <div className="line mb-5"></div>
    </div>
);

export default infoSec;