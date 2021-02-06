import React, { useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/physics.png'

const PotentialEnergy = () => {
    const [forceUnit, setForceUnit] = useState('m/s');
    const [massUnit, setMassUnit] = useState('m/s');
    const [volume, setVolume] = useState(null);
    const [density, setTime] = useState(null);
    const [acceleration, setAcceleration] = useState(null);
    const [accelerationUnit, setAccelerationUnit] = useState('ms^-1');

    const accelerationValue = e => {
        if (e.target.name === 'volume') {
            setVolume(e.target.value)
        }
        if (e.target.name === 'density') {
            setTime(e.target.value)
        }

    }

    const forceChange = e => {
        if (e.target.value === 'cm/s' && forceUnit === 'm/s') {
            setVolume(volume / 100)
            setForceUnit('cm/s')
        }
        if (e.target.value === 'm/s' && forceUnit === 'cm/s') {
            setVolume(volume * 100)
            setForceUnit('m/s')
        }
    }

    const massChange = e => {
        if (e.target.value === 'cm/s' && massUnit === 'm/s') {
            setTime(density / 100)
            setMassUnit('cm/s')
        }
        if (e.target.value === 'm/s' && massUnit === 'cm/s') {
            setTime(density * 100)
            setMassUnit('m/s')
        }
    }

    const accelerationChange = e => {
        setAcceleration(e.target.value)
    }
    const handleUnit = e => {
        if (e.target.value === 'cms^-1') {
            if (accelerationUnit === 'ms^-1') {
                setAccelerationUnit('cms^-1');
            }
        }
        if (e.target.value === 'ms^-1') {
            if (accelerationUnit === 'cms^-1') {
                setAccelerationUnit('ms^-1');
            }
        }
    }
    return (
        <div>
            <div className="bg-header d-flex justify-content-around">
                <Link to='/'> <img src={logo} alt="" /></Link>
                <h1> বিভব শক্তি নির্নয়</h1>
            </div>
            <div className="volume-data container mt-4 mx-auto row">
                <InputGroup className="mb-3 col-md-6">
                    <FormControl
                        onChange={accelerationValue} pattern="\d*" name='volume' type="number" placeholder='ভর'
                    />
                    <InputGroup.Append>
                        {
                            volume &&
                            <select onChange={forceChange}>
                                <option value="J">kg (কেজি)</option>
                            </select>
                        }
                    </InputGroup.Append>
                </InputGroup>
                <InputGroup className="mb-3 col-md-6">
                    <FormControl
                        onChange={accelerationChange} name='density' type="number" placeholder='অভিকর্ষজ ত্বরণ'
                    />
                    <InputGroup.Append>
                        {
                            density && <select onChange={accelerationChange}>
                                <option value="s"> ms^-2 (মিটার/সেকেন্ড^2) </option>
                            </select>
                        }
                    </InputGroup.Append>
                </InputGroup>
                <InputGroup className="mb-3 col-md-6">
                    <FormControl
                        onChange={accelerationValue} name='density' type="number" placeholder='উচ্চতা'
                    />
                    <InputGroup.Append>
                        {
                            density && <select onChange={massChange}>
                                <option value="s"> m(মিটার) </option>
                            </select>
                        }
                    </InputGroup.Append>
                </InputGroup>
                <InputGroup className="mb-3 col-md-8">
                    <FormControl
                        disabled placeholder='প্লবতা' type="number" defaultValue={volume && density && acceleration && (volume * density * acceleration)}
                    />
                    <InputGroup.Append>
                        {
                            volume && <select onChange={handleUnit} name="select" id="">
                                <option value="W"> J (জুল) </option>
                            </select>
                        }
                    </InputGroup.Append>
                </InputGroup>
            </div>
        </div>
    );
};



export default PotentialEnergy;