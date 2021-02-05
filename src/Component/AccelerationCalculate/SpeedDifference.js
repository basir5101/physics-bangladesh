import React, { useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

const SpeedDifference = () => {
    const [velocityUnit, setVelocityUnit] = useState('m/s');
    const [initialSpeed, setInitialSpeed] = useState(null);
    const [finalSpeed, setFinalSpeed] = useState(null);
    const [accelerationUnit, setAccelerationUnit] = useState('n');
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
    const handleUnit = e => {
        if (e.target.value === 'cm/s') {
            if (velocityUnit === 'm/s') {
                setInitialSpeed(initialSpeed / 1000)
                setVelocityUnit('cm/s')
            }
        }
        if (e.target.value === 'm/s') {
            if (velocityUnit === 'cm/s') {
                setInitialSpeed(initialSpeed * 1000)
                setVelocityUnit('m/s')
            }
        }
        if (e.target.value === 'cms^-1') {
            if (finalSpeed === 'ms^-1') {
                setVelocityUnit(velocityUnit / 100)
                setFinalSpeed('cms^-1');
            }
        }
        if (e.target.value === 'ms^-1') {
            if (finalSpeed === 'cms^-1') {
                setVelocityUnit(velocityUnit * 100)
                setFinalSpeed('ms^-1');
            }
        }
        if (e.target.value === 'dyne') {
            if (accelerationUnit === 'n') {
                setInitialSpeed((initialSpeed * 100000));
                setAccelerationUnit('dyne');
            }
        }
        if (e.target.value === 'n') {
            if (accelerationUnit === 'dyne') {
                setInitialSpeed((initialSpeed / 100000));
                setAccelerationUnit('n');
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
    }
    return (
        <div className='container mt-4'>
            <h4 className='text-center'> বেগের পার্থক্য দেওয়া আছে </h4>
            <div className="force-data container mt-4 mx-auto row">
                <InputGroup className="mb-3 col-md-6">
                    <FormControl
                        onChange={accelerationValue} name='initialSpeed' type="number" placeholder='আদি বেগ'
                    />
                    <InputGroup.Append>
                        {
                            initialSpeed &&
                            <select onChange={handleUnit} name="select" id="">
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
                            finalSpeed && <select onChange={handleUnit} name="select" id="">
                                <option value="m/s">m/s ( মিটার / সেকেন্ড ) </option>
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
                            timeValue && <select onChange={handleUnit} name="select" id="">
                                <option value="s">second ( সেকেন্ড ) </option>
                                <option value="min"> minute ( মিনিট )</option>
                            </select>
                        }
                    </InputGroup.Append>
                </InputGroup>
                <InputGroup className="mb-3 col-md-8">
                    <FormControl
                        disabled placeholder='বলের মান' type="number" defaultValue={initialSpeed && finalSpeed && ((finalSpeed - initialSpeed) / timeValue).toFixed(3)}
                    />
                    <InputGroup.Append>
                        {
                            initialSpeed && <select onChange={handleUnit} name="select" id="">
                                <option value="n"> N ( নিউটন ) </option>
                                <option value="dyne"> dyne (ডাইন) </option>
                            </select>
                        }
                    </InputGroup.Append>
                </InputGroup>
            </div>
        </div>
    );
};

export default SpeedDifference;