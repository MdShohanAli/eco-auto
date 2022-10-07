import React from 'react';
import './Cars.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Cars = (props) => {
    const { Name, Image, Price } = props.car;
    return (
        <div className='card' >
            <img src={Image} alt="" />
            <h3>{Name}</h3>
            <p>{Price}</p>
            <p>Add To Cart <button> <FontAwesomeIcon icon={faCartShopping} /> </button></p>
        </div>
    );
};

export default Cars;