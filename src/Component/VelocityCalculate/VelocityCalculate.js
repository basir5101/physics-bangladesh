import React, { useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import VelocityDetails from './VelocityDetails';
import velocity from '../../images/velocity.png'

const VelocityCalculate = () => {
    const [distanceUnit, setDistanceUnit] = useState('m');
    const [distanceValue, setDistanceValue] = useState(null);
    const [timeUnit, setTimeUnit] = useState('s');
    const [timeValue, setTimeValue] = useState(null);
    const [forceUnit, setForceUnit] = useState('m/s');

    const forceValue = e => {
        console.log(distanceValue, timeValue)
        if (e.target.name === 'mass') {
            setDistanceValue(e.target.value)
        }
        if (e.target.name === 'acceleration') {
            setTimeValue(e.target.value)
        }

    }
    const handleUnit = e => {
        if (e.target.value === 'km') {
            if (distanceUnit === 'm') {
                setDistanceValue(distanceValue * 1000)
                setDistanceUnit('km')
            }
        }
        if (e.target.value === 'm') {
            if (distanceUnit === 'km') {
                setDistanceValue(distanceValue / 1000)
                setDistanceUnit('m')
            }
        }
        if (e.target.value === 'min') {
            if (timeUnit === 's') {
                setTimeValue(timeValue * 60)
                setTimeUnit('min');
            }
        }
        if (e.target.value === 's') {
            if (timeUnit === 'min') {
                setTimeValue(timeValue / 60)
                setTimeUnit('s');
            }
        }
        if (e.target.value === 'm/min') {
            if (forceUnit === 'm/s') {
                setDistanceValue((distanceValue * 60));
                setForceUnit('m/min');
            }
        }
        if (e.target.value === 'm/s') {
            if (forceUnit === 'm/min') {
                setDistanceValue((distanceValue / 60));
                setForceUnit('m/s');
            }
        }
    }
    return (
        <div className=''>
            <h1 className='bg-header'> বেগ নির্নয় </h1>
            <div className="text-center">
                <img src={velocity} alt="" />
            </div>
            <div className="container row mx-auto">
                <InputGroup className="mb-3 col-md-4">
                    <FormControl
                        onChange={forceValue} name='mass' type="number" placeholder='সরণ'
                    />
                    <InputGroup.Append>
                        {
                            distanceValue &&
                            <select onChange={handleUnit} name="select" id="">
                                <option value="m"> m ( মিটার ) </option>
                                <option value="km"> km ( কিলোমিটার )</option>
                            </select>
                        }
                    </InputGroup.Append>
                </InputGroup>
                <InputGroup className="mb-3 col-md-4">
                    <FormControl
                        onChange={forceValue} name='acceleration' type="number" placeholder='সময়'
                    />
                    <InputGroup.Append>
                        {
                            timeValue && <select onChange={handleUnit} name="select" id="">
                                <option value="s">second ( সেকেন্ড ) </option>
                                <option value="min"> minute ( মিনিট )</option>
                            </select>
                        }
                    </InputGroup.Append>
                </InputGroup>
                <InputGroup className="mb-3 col-md-8">
                    <FormControl
                        disabled placeholder='বেগের মান' type="number" defaultValue={distanceValue && timeValue && (distanceValue / timeValue).toFixed(8)}
                    />
                    <InputGroup.Append>
                        {
                            distanceValue && <select onChange={handleUnit} name="select" id="">
                                <option value="m/s"> m/s ( মিটার / সেকেন্ড ) </option>
                                <option value="m/min"> m/min ( মিটার/মিনিট ) </option>
                            </select>
                        }
                    </InputGroup.Append>
                </InputGroup>
            </div>
            <VelocityDetails />
        </div>
    );
};

export default VelocityCalculate;