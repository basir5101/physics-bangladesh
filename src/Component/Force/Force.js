import React, { useState } from 'react';
import './Force.css';
import { FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/physics.png';

const Force = () => {
    const [massUnit, setMassUnit] = useState('kg');
    const [massValue, setMassValue] = useState(null);
    const [accelerationUnit, setAccelerationUnit] = useState('ms^-1');
    const [accelerationValue, setAccelerationValue] = useState(null);
    const [forceUnit, setForceUnit] = useState('n');

    const forceValue = e => {
        console.log(massValue, accelerationValue)
        if (e.target.name === 'mass') {
            setMassValue(e.target.value)
        }
        if (e.target.name === 'acceleration') {
            setAccelerationValue(e.target.value)
        }

    }
    const handleUnit = e => {
        if (e.target.value === 'gm') {
            if (massUnit === 'kg') {
                setMassValue(massValue / 1000)
                setMassUnit('gm')
            }
        }
        if (e.target.value === 'kg') {
            if (massUnit === 'gm') {
                setMassValue(massValue * 1000)
                setMassUnit('kg')
            }
        }
        if (e.target.value === 'cms^-1') {
            if (accelerationUnit === 'ms^-1') {
                setAccelerationValue(accelerationValue / 100)
                setAccelerationUnit('cms^-1');
            }
        }
        if (e.target.value === 'ms^-1') {
            if (accelerationUnit === 'cms^-1') {
                setAccelerationValue(accelerationValue * 100)
                setAccelerationUnit('ms^-1');
            }
        }
        if (e.target.value === 'dyne') {
            if (forceUnit === 'n') {
                setMassValue((massValue * 100000));
                setForceUnit('dyne');
            }
        }
        if (e.target.value === 'n') {
            if (forceUnit === 'dyne') {
                setMassValue((massValue / 100000));
                setForceUnit('n');
            }
        }
    }
    return (
        <div className='force-container'>
            <div className="bg-header d-flex justify-content-around">
                <Link to='/'> <img src={logo} alt="" /></Link>
                <h1> বলের মান নির্নয়</h1>
            </div>
            <div className="force-data container mt-4 mx-auto row">
                <InputGroup className="mb-3 col-md-4">
                    <FormControl
                        onChange={forceValue} name='mass' type="number" placeholder='ভর'
                    />
                    <InputGroup.Append>
                        {
                            massValue &&
                            <select onChange={handleUnit} name="select" id="">
                                <option value="kg">kg ( কিলোগ্রাম ) </option>
                                <option value="gm">gm ( গ্রাম )</option>
                            </select>
                        }
                    </InputGroup.Append>
                </InputGroup>
                <InputGroup className="mb-3 col-md-4">
                    <FormControl
                        onChange={forceValue} name='acceleration' type="number" placeholder='ত্বরন'
                    />
                    <InputGroup.Append>
                        {
                            accelerationValue && <select onChange={handleUnit} name="select" id="">
                                <option value="ms^-1">ms^-2 ( মিটার/সেকেন্ড2 ) </option>
                                <option value="cms^-1"> cms^-2 ( সেন্টিমিটার/সেকেন্ড2 )</option>
                            </select>
                        }
                    </InputGroup.Append>
                </InputGroup>
                <InputGroup className="mb-3 col-md-8">
                    <FormControl
                        disabled placeholder='বলের মান' type="number" defaultValue={massValue && accelerationValue && (massValue * accelerationValue).toFixed(3)}
                    />
                    <InputGroup.Append>
                        {
                            massValue && <select onChange={handleUnit} name="select" id="">
                                <option value="n"> N ( নিউটন ) </option>
                                <option value="dyne"> dyne (ডাইন) </option>
                            </select>
                        }
                    </InputGroup.Append>
                </InputGroup>
            </div>
            <div className="details text-center bg-dark text-white py-3 my-3 ">
                <div className="container">
                    <p> বল নির্নয়ের সূত্র আমরা পাই নিউটনের ২য় সূত্র থেকে। যার সহজ রুপ <strong>F = ma</strong> যেখানে <strong>F</strong> হলো প্রযুক্ত বল, <strong>m</strong> বস্তুর ভর এবং <strong>a</strong> হলো বস্তুর ত্বরন </p>
                    <p> * সহজ ভাবে বল হচ্ছে বস্তুর ভর এবং ত্বরনের গুনফল</p>
                </div>
            </div>
        </div>
    );
};

export default Force;