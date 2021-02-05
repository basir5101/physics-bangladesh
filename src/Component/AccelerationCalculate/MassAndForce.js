import React, { useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

const MassAndForce = () => {
    const [initialVelocityUnit, setInitialVelocityUnit] = useState('m/s');
    const [finalVelocityUnit, setFinalVelocityUnit] = useState('m/s');
    const [initialSpeed, setInitialSpeed] = useState(null);
    const [finalSpeed, setFinalSpeed] = useState(null);
    const [accelerationUnit, setAccelerationUnit] = useState('ms^-1');
    const [timeUnit, setTimeUnit] = useState('s');
    const [timeValue, setTimeValue] = useState(null);

    const accelerationValue = e => {
        if (e.target.name === 'initialSpeed') {
            setInitialSpeed(e.target.value)
        }
        if (e.target.name === 'finalSpeed') {
            setFinalSpeed(e.target.value)
        }
        if (e.target.name === 'time') {
            setTimeValue(e.target.value)
        }

    }

    const initialSpeedUnit = e => {
        if (e.target.value === 'cm/s' && initialVelocityUnit === 'm/s') {
            setInitialSpeed(initialSpeed / 100)
            setInitialVelocityUnit('cm/s')
        }
        if (e.target.value === 'm/s' && initialVelocityUnit === 'cm/s') {
            setInitialSpeed(initialSpeed * 100)
            setInitialVelocityUnit('m/s')
        }
    }

    const finalSpeedUnit = e => {
        if (!e.target.value) {
            setFinalVelocityUnit('m/s')
        }
        if (e.target.value === 'cm/s' && finalVelocityUnit === 'm/s') {
            setFinalSpeed(finalSpeed / 100)
            setFinalVelocityUnit('cm/s')
        }
        if (e.target.value === 'm/s' && finalVelocityUnit === 'cm/s') {
            setFinalSpeed(finalSpeed * 100)
            setFinalVelocityUnit('m/s')
        }
    }

    const handleTimeUnit = e => {
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
    }
    const handleUnit = e => {
        if (e.target.value === 'cms^-1') {
            if (accelerationUnit === 'ms^-1') {
                setTimeValue(timeValue / 100)
                setAccelerationUnit('cms^-1');
            }
        }
        if (e.target.value === 'ms^-1') {
            if (accelerationUnit === 'cms^-1') {
                setTimeValue(timeValue * 100)
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
                        onChange={accelerationValue} pattern="\d*" name='initialSpeed' type="number" placeholder='আদি বেগ'
                    />
                    <InputGroup.Append>
                        {
                            initialSpeed &&
                            <select onChange={initialSpeedUnit}>
                                <option value="m/s">m/s ( মিটার / সেকেন্ড ) </option>
                                <option value="cm/s">cm/s ( সেন্টিমিটার / সেকেন্ড )</option>
                            </select>
                        }
                    </InputGroup.Append>
                </InputGroup>
                <InputGroup className="mb-3 col-md-6">
                    <FormControl
                        onChange={accelerationValue} name='finalSpeed' type="number" placeholder='শেষ বেগ'
                    />
                    <InputGroup.Append>
                        {
                            finalSpeed && <select onChange={finalSpeedUnit}>
                                <option name='unit' value="m/s">m/s ( মিটার / সেকেন্ড ) </option>
                                <option value="cm/s">cm/s ( সেন্টিমিটার / সেকেন্ড )</option>
                            </select>
                        }
                    </InputGroup.Append>
                </InputGroup>
                <InputGroup className="mb-3 col-md-4">
                    <FormControl
                        onChange={accelerationValue} name='time' type="number" placeholder='সময়'
                    />
                    <InputGroup.Append>
                        {
                            timeValue && <select onChange={handleTimeUnit} name="select" id="">
                                <option value="s">second ( সেকেন্ড ) </option>
                                <option value="min"> minute ( মিনিট )</option>
                            </select>
                        }
                    </InputGroup.Append>
                </InputGroup>
                <InputGroup className="mb-3 col-md-8">
                    <FormControl
                        disabled placeholder='ত্বরণ' type="number" defaultValue={initialSpeed && finalSpeed && ((finalSpeed - initialSpeed) / timeValue)}
                    />
                    <InputGroup.Append>
                        {
                            initialSpeed && <select onChange={handleUnit} name="select" id="">
                                <option value="ms^-1">ms^-2 ( মিটার/সেকেন্ড2 ) </option>
                                <option value="cms^-1"> cms^-2 ( সেন্টিমিটার/সেকেন্ড2 )</option>
                            </select>
                        }
                    </InputGroup.Append>
                </InputGroup>
            </div>
        </div>
    );
};

export default MassAndForce;