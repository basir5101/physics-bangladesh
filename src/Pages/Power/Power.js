import React, { useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/physics.png';

const Power = () => {
    const [forceUnit, setForceUnit] = useState('m/s');
    const [massUnit, setMassUnit] = useState('m/s');
    const [work, setWork] = useState(null);
    const [time, setTime] = useState(null);
    const [accelerationUnit, setAccelerationUnit] = useState('ms^-1');

    const accelerationValue = e => {
        if (e.target.name === 'work') {
            setWork(e.target.value)
        }
        if (e.target.name === 'time') {
            setTime(e.target.value)
        }

    }

    const forceChange = e => {
        if (e.target.value === 'cm/s' && forceUnit === 'm/s') {
            setWork(work / 100)
            setForceUnit('cm/s')
        }
        if (e.target.value === 'm/s' && forceUnit === 'cm/s') {
            setWork(work * 100)
            setForceUnit('m/s')
        }
    }

    const massChange = e => {
        if (!e.target.value) {
            setMassUnit('m/s')
        }
        if (e.target.value === 'cm/s' && massUnit === 'm/s') {
            setTime(time / 100)
            setMassUnit('cm/s')
        }
        if (e.target.value === 'm/s' && massUnit === 'cm/s') {
            setTime(time * 100)
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
                <h1> ক্ষমতা নির্নয়</h1>
            </div>
            <div className="work-data container mt-4 mx-auto row">
                <InputGroup className="mb-3 col-md-6">
                    <FormControl
                        onChange={accelerationValue} pattern="\d*" name='work' type="number" placeholder='কাজ'
                    />
                    <InputGroup.Append>
                        {
                            work &&
                            <select onChange={forceChange}>
                                <option value="J">J (জুল)</option>
                            </select>
                        }
                    </InputGroup.Append>
                </InputGroup>
                <InputGroup className="mb-3 col-md-6">
                    <FormControl
                        onChange={accelerationValue} name='time' type="number" placeholder='সময়'
                    />
                    <InputGroup.Append>
                        {
                            time && <select onChange={massChange}>
                                <option value="s"> second (সেকেন্ড) </option>
                            </select>
                        }
                    </InputGroup.Append>
                </InputGroup>
                <InputGroup className="mb-3 col-md-8">
                    <FormControl
                        disabled placeholder='ক্ষমতা' type="number" defaultValue={work && time && (work / time)}
                    />
                    <InputGroup.Append>
                        {
                            work && <select onChange={handleUnit} name="select" id="">
                                <option value="W"> W ( ওয়াট) </option>
                            </select>
                        }
                    </InputGroup.Append>
                </InputGroup>
            </div>
        </div>
    );
};

export default Power;