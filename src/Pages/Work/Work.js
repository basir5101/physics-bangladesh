import React, { useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/physics.png';

const Work = () => {
    const [forceUnit, setForceUnit] = useState('m/s');
    const [distanceUnit, setDistanceUnit] = useState('m/s');
    const [force, setForce] = useState(null);
    const [distance, setDistance] = useState(null);
    const [accelerationUnit, setAccelerationUnit] = useState('ms^-1');

    const accelerationValue = e => {
        if (e.target.name === 'force') {
            setForce(e.target.value)
        }
        if (e.target.name === 'distance') {
            setDistance(e.target.value)
        }

    }

    const forceChange = e => {
        if (e.target.value === 'cm/s' && forceUnit === 'm/s') {
            setForce(force / 100)
            setForceUnit('cm/s')
        }
        if (e.target.value === 'm/s' && forceUnit === 'cm/s') {
            setForce(force * 100)
            setForceUnit('m/s')
        }
    }

    const massChange = e => {
        if (!e.target.value) {
            setDistanceUnit('m/s')
        }
        if (e.target.value === 'cm/s' && distanceUnit === 'm/s') {
            setDistance(distance / 100)
            setDistanceUnit('cm/s')
        }
        if (e.target.value === 'm/s' && distanceUnit === 'cm/s') {
            setDistance(distance * 100)
            setDistanceUnit('m/s')
        }
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
                <h1> কাজের মান নির্নয়</h1>
            </div>
            <div className="force-data container mt-4 mx-auto row">
                <InputGroup className="mb-3 col-md-6">
                    <FormControl
                        onChange={accelerationValue} pattern="\d*" name='force' type="number" placeholder='বল'
                    />
                    <InputGroup.Append>
                        {
                            force &&
                            <select onChange={forceChange}>
                                <option value="n">N (নিউটন)</option>
                            </select>
                        }
                    </InputGroup.Append>
                </InputGroup>
                <InputGroup className="mb-3 col-md-6">
                    <FormControl
                        onChange={accelerationValue} name='distance' type="number" placeholder='সরণ'
                    />
                    <InputGroup.Append>
                        {
                            distance && <select onChange={massChange}>
                                <option name='unit' value="m"> m (মিটার) </option>
                            </select>
                        }
                    </InputGroup.Append>
                </InputGroup>
                <InputGroup className="mb-3 col-md-8">
                    <FormControl
                        disabled placeholder='চাপ' type="number" defaultValue={force && distance && (force * distance)}
                    />
                    <InputGroup.Append>
                        {
                            force && <select onChange={handleUnit} name="select" id="">
                                <option value="J">J ( জুল ) </option>
                            </select>
                        }
                    </InputGroup.Append>
                </InputGroup>
            </div>
        </div>
    );
};
export default Work;