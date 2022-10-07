import React from 'react';
import './Cars.css'

const Cars = (props) => {
    const { Name, Image, Price } = props.car;
    return (
        <div className='card' >
            <img src={Image} alt="" />
            <h3>{Name}</h3>
            <p>{Price}</p>
            <p>Add To Cart <button></button></p>
        </div>
    );
};

export default Cars;