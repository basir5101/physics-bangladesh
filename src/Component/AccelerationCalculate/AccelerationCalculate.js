import React, { useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import DistanceTravel from './DistanceTravel';
import MassAndForce from './MassAndForce';
import SpeedDifference from './SpeedDifference';
import logo from './../../images/physics.png';
import { Link } from 'react-router-dom';

const AccelerationCalculate = () => {
    const [speed, setSpeed] = useState(true);
    const [distance, setDistance] = useState(false);
    const [massAndForce, setMassAndForce] = useState(false);

    const handleCategoryChange = e => {
        if (e.target.value === 'speed') {
            setSpeed(true);
            setDistance(false);
            setMassAndForce(false);
        }
        if (e.target.value === 'distance') {
            setSpeed(false);
            setDistance(true);
            setMassAndForce(false);
        }
        if (e.target.value === 'massAndForce') {
            setSpeed(false);
            setDistance(false);
            setMassAndForce(true);
        }

    }
    return (
        <div className=''>
            <div className="bg-header d-flex justify-content-around">
                <Link to='/'> <img src={logo} alt="" /></Link>
                <h1> ত্বরন নির্নয়</h1>
            </div>

            <p className='text-center'>কিসের মান দেওয়া আছে তার উপর নির্ভর করে আমরা ৩ ভাবে ত্বরন নির্নয় করতে পারি। </p>
            <div className="mx-auto container">
                <InputGroup className="">
                    <FormControl
                        disabled placeholder='দেওয়া আছে' type="number"
                    />
                    <InputGroup.Append><select onChange={handleCategoryChange} name="select" id="">
                        <option value="speed"> বেগের পার্থক্য </option>
                        <option value="distance"> অতিক্রান্ত দুরুত্ব </option>
                        <option value="massAndForce"> ভর এবং বল </option>
                    </select>
                    </InputGroup.Append>
                </InputGroup>
            </div>
            <div>
                {
                    speed && <SpeedDifference />
                }
                {
                    distance && <DistanceTravel />
                }
                {
                    massAndForce && <MassAndForce />
                }
            </div>
        </div>
    );
};

export default AccelerationCalculate;