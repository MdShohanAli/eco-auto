import React from 'react';
import './Cars.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Cars = (props) => {
    // console.log(props);
    const { AddToCart, car } = props;
    const { Name, Image, Price } = car;

    return (
        <div className='card' >
            <img src={Image} alt="" />
            <h3>{Name}</h3>
            <p>{Price}</p>
            <button onClick={() => AddToCart(car.Name)}> Add To Cart<FontAwesomeIcon icon={faCartShopping} /> </button>
        </div>
    );
};

export default Cars;