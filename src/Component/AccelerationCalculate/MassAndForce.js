import React, { useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

const MassAndForce = () => {
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
        <div className='container mt-4'>
            <h4 className='text-center'> ভর এবং বল দেওয়া আছে </h4>
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
                        onChange={accelerationValue} name='mass' type="number" placeholder='ভর'
                    />
                    <InputGroup.Append>
                        {
                            mass && <select onChange={massChange}>
                                <option name='unit' value="kg"> kg (কেজি) </option>
                            </select>
                        }
                    </InputGroup.Append>
                </InputGroup>
                <InputGroup className="mb-3 col-md-8">
                    <FormControl
                        disabled placeholder='ত্বরণ' type="number" defaultValue={force && mass && (force / mass)}
                    />
                    <InputGroup.Append>
                        {
                            force && <select onChange={handleUnit} name="select" id="">
                                <option value="ms^-1">ms^-2 ( মিটার/সেকেন্ড2 ) </option>
                            </select>
                        }
                    </InputGroup.Append>
                </InputGroup>
            </div>
        </div>
    );
};

export default MassAndForce;