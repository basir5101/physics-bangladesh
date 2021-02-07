import React from 'react';
import './Category.css';
import { Link } from 'react-router-dom';
import logo from '../../images/physics.png'

const Category = () => {

    const categoryList = [
        {
            name: 'বেগ নির্নয়',
            link: '/velocity'
        },
        {
            name: 'ত্বরন নির্নয়',
            link: '/acceleration'
        },
        {
            name: 'বলের মান নির্নয়',
            link: '/force'
        },
        {
            name: 'কাজ নির্নয়',
            link: '/work'
        },
        {
            name: 'গতিশক্তি নির্নয়',
            link: '/kinetic-energy'
        },
        {
            name: 'বিভব শক্তি নির্নয়',
            link: '/potential-energy'
        },
        {
            name: 'ক্ষমতা নির্নয়',
            link: '/power'
        },
        {
            name: 'চাপ নির্নয়',
            link: '/pressure'
        },
        {
            name: 'ঘনত্ব',
            link: 'density'
        },
        {
            name: 'প্লবতা',
            link: 'buoyancy'
        },
        {
            name: 'তাপমাত্রা স্কেল',
            link: 'temperature-scale'
        },
    ]


    return (
        <div className=''>
            <div className="bg-header d-flex justify-content-around">
                <Link to='/'> <img src={logo} alt="" /></Link>
                <h4> পদার্থবিজ্ঞান ক্যালকুলেশন </h4>
            </div>
            <div className="row container  mx-auto">
                <div className="col-md-12 col-md-4 my-3 text-center border-left">
                    <Link to='/challenge-ssc' className="category-card">
                        <div>
                            <p> 30 দিনের চ্যালেঞ্জ (SSC) </p>
                        </div>
                    </Link>
                </div>
                {
                    categoryList.map(category => (
                        <div className="col-md-4 col-md-4 my-3 text-center border-left">
                            <Link to={`${category.link}`} className="category-card">
                                <div>
                                    <p> {category.name} </p>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Category;