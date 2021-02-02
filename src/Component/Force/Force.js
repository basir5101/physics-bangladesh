import React, { useState } from 'react';
import './Force.css';

const Force = () => {
    const [force, setForce] = useState(0);
    const [massUnit, setMassUnit] = useState('kg');
    const [accelerationUnit, setAccelerationUnit] = useState('ms^-1');
    const [forceUnit, setForceUnit] = useState('n');
    const [forceValues, setForceValues] = useState({
        mass: null,
        acceleration: null
    })




    const forceValue = e => {
        forceValues[e.target.name] = e.target.value;
        if (forceValues.mass && forceValues.acceleration) {
            setForce((forceValues.mass * forceValues.acceleration).toFixed(6))
        } else
            setForce(null)
    }
    const handleUnit = e => {
        console.log(e.target.value);
        if (e.target.value === 'gm') {
            if (massUnit === 'kg') {
                const newValue = { ...forceValues };
                newValue.mass = forceValues.mass / 1000;
                setForce((newValue.mass * newValue.acceleration).toFixed(6))
                setForceValues(newValue);
                setMassUnit('gm')
            }
        }
        if (e.target.value === 'kg') {
            if (massUnit === 'gm') {
                const newValue = { ...forceValues };
                newValue.mass = forceValues.mass * 1000;
                setForce((newValue.mass * newValue.acceleration).toFixed(6))
                setForceValues(newValue);
                setMassUnit('kg')
            }
        }
        if (e.target.value === 'cms^-1') {
            if (accelerationUnit === 'ms^-1') {
                const newValue = { ...forceValues };
                newValue.acceleration = forceValues.acceleration / 100;
                setForce((newValue.mass * newValue.acceleration).toFixed(6))
                setForceValues(newValue);
                setAccelerationUnit('cms^-1');
            }
        }
        if (e.target.value === 'ms^-1') {
            if (accelerationUnit === 'cms^-1') {
                const newValue = { ...forceValues };
                newValue.acceleration = forceValues.acceleration * 100;
                setForce((newValue.mass * newValue.acceleration))
                setForceValues(newValue);
                setAccelerationUnit('ms^-1');
            }
        }
        if (e.target.value === 'dyne') {
            if (forceUnit === 'n') {
                setForce((force * 100000).toFixed(2));
                setForceUnit('dyne');
            }
        }
        if (e.target.value === 'n') {
            if (forceUnit === 'dyne') {
                setForce(force / 100000);
                setForceUnit('n');
            }
        }
    }
    return (
        <div className='force-container'>
            <h1> রৈখিক বল নির্নয় </h1>
            <div className="force-data">
                <div>
                    <label htmlFor="">ভরঃ </label>
                    <input onChange={forceValue} name='mass' type="number" placeholder='ভর' />
                    <select onClick={handleUnit} name="select" id="">
                        <option value="kg">kg ( কিলোগ্রাম ) </option>
                        <option value="gm">gm ( গ্রাম )</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">ত্বরন</label>
                    <input onChange={forceValue} name='acceleration' type="number" placeholder='ত্বরন' />
                    <select onClick={handleUnit} name="select" id="">
                        <option value="ms^-1">ms^-2 ( মিটার/সেকেন্ড2 ) </option>
                        <option value="cms^-1"> cms^-2 ( সেন্টিমিটার/সেকেন্ড2 )</option>
                    </select>
                </div>
                <div className='result-container'>
                    <button className='force-value'> বলের মানঃ  {forceValues.mass && forceValues.acceleration && force} </button>

                    <select onClick={handleUnit} name="select" id="">
                        <option value="n"> N ( নিউটন ) </option>
                        <option value="dyne"> dyne (ডাইন) </option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Force;