import React, { useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/physics.png';

const Pressure = () => {
    const [forceUnit, setForceUnit] = useState('m/s');
    const [massUnit, setMassUnit] = useState('m/s');
    const [force, setForce] = useState(null);
    const [mass, setMass] = useState(null);
    const [accelerationUnit, setAccelerationUnit] = useState('ms^-1');

    const accelerationValue = e => {
        if (e.target.name === 'force') {
            setForce(e.target.value)
        }
        if (e.target.name === 'mass') {
            setMass(e.target.value)
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
            setMassUnit('m/s')
        }
        if (e.target.value === 'cm/s' && massUnit === 'm/s') {
            setMass(mass / 100)
            setMassUnit('cm/s')
        }
        if (e.target.value === 'm/s' && massUnit === 'cm/s') {
            setMass(mass * 100)
            setMassUnit('m/s')
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
                <h1> চাপ নির্নয়</h1>
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
                        onChange={accelerationValue} name='mass' type="number" placeholder='ক্ষেত্রফল'
                    />
                    <InputGroup.Append>
                        {
                            mass && <select onChange={massChange}>
                                <option name='unit' value="m^2"> m^2 (মিটার^2) </option>
                            </select>
                        }
                    </InputGroup.Append>
                </InputGroup>
                <InputGroup className="mb-3 col-md-8">
                    <FormControl
                        disabled placeholder='চাপ' type="number" defaultValue={force && mass && (force / mass)}
                    />
                    <InputGroup.Append>
                        {
                            force && <select onChange={handleUnit} name="select" id="">
                                <option value="pa">pa ( প্যাসকেল ) </option>
                            </select>
                        }
                    </InputGroup.Append>
                </InputGroup>
            </div>
        </div>
    );
};

export default Pressure;