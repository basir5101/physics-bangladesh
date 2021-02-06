import React, { useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/physics.png';

const Density = () => {
    const [forceUnit, setForceUnit] = useState('m/s');
    const [massUnit, setMassUnit] = useState('m/s');
    const [mass, setMass] = useState(null);
    const [volume, setVolume] = useState(null);
    const [accelerationUnit, setAccelerationUnit] = useState('ms^-1');

    const accelerationValue = e => {
        if (e.target.name === 'mass') {
            setMass(e.target.value)
        }
        if (e.target.name === 'volume') {
            setVolume(e.target.value)
        }

    }

    const forceChange = e => {
        if (e.target.value === 'cm/s' && forceUnit === 'm/s') {
            setMass(mass / 100)
            setForceUnit('cm/s')
        }
        if (e.target.value === 'm/s' && forceUnit === 'cm/s') {
            setMass(mass * 100)
            setForceUnit('m/s')
        }
    }

    const massChange = e => {
        if (!e.target.value) {
            setMassUnit('m/s')
        }
        if (e.target.value === 'cm/s' && massUnit === 'm/s') {
            setVolume(volume / 100)
            setMassUnit('cm/s')
        }
        if (e.target.value === 'm/s' && massUnit === 'cm/s') {
            setVolume(volume * 100)
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
                <h1> ঘনত্ব নির্নয়</h1>
            </div>
            <div className="mass-data container mt-4 mx-auto row">
                <InputGroup className="mb-3 col-md-6">
                    <FormControl
                        onChange={accelerationValue} pattern="\d*" name='mass' type="number" placeholder='ভর'
                    />
                    <InputGroup.Append>
                        {
                            mass &&
                            <select onChange={forceChange}>
                                <option value="J">J (জুল)</option>
                            </select>
                        }
                    </InputGroup.Append>
                </InputGroup>
                <InputGroup className="mb-3 col-md-6">
                    <FormControl
                        onChange={accelerationValue} name='volume' type="number" placeholder='আয়তন'
                    />
                    <InputGroup.Append>
                        {
                            volume && <select onChange={massChange}>
                                <option value="s"> second (সেকেন্ড) </option>
                            </select>
                        }
                    </InputGroup.Append>
                </InputGroup>
                <InputGroup className="mb-3 col-md-8">
                    <FormControl
                        disabled placeholder='ক্ষমতা' type="number" defaultValue={mass && volume && (mass / volume)}
                    />
                    <InputGroup.Append>
                        {
                            mass && <select onChange={handleUnit} name="select" id="">
                                <option value="W"> kg/m^3(কেজি/মিটার^3) </option>
                            </select>
                        }
                    </InputGroup.Append>
                </InputGroup>
            </div>
        </div>
    );
};

export default Density;