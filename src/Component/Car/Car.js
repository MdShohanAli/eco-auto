import React, { useEffect, useState } from 'react';
import Cars from '../Cars/Cars';
import './Car.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const Car = () => {
    const AddToCart = (car) => {

        const newCart = [...cart, car]

        setCart(newCart)

    }

    const [cars, setCar] = useState([])
    const [cart, setCart] = useState([])





    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setCar(data))
    }, [])

    return (
        <div className='car-container' >

            <div className="cars-item">


                {
                    cars.map(car => <Cars
                        key={car.Id}
                        AddToCart={AddToCart}
                        car={car} ></Cars>)
                }
            </div>
            <div className="cars-summary">

                <h2>Select Item</h2>

                <p>{cart} <FontAwesomeIcon icon={faCartShopping} /></p>
                <button className='summary-btn' >Choose One For Me</button> <br /> <br />
                <button className='summary-btn' >Choose Again</button>

            </div>
        </div>
    );
};

export default Car;