import React, { useEffect, useState } from 'react';
import Cars from '../Cars/Cars';
import './Car.css'

const Car = () => {
    const [cars, setCar] = useState([])
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setCar(data))
    }, [])
    return (
        <div className='car-container' >
            <div className="cars-item">
                {/* <h2>Cars Item {cars.length}</h2> */}
                {
                    cars.map(car => <Cars key={car.Id} car={car} ></Cars>)
                }
            </div>
            <div className="cars-summary">
                <h4>Cars Summary</h4>
            </div>
        </div>
    );
};

export default Car;