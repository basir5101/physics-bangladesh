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

    ]


    return (
        <div className=''>
            <div className="bg-header d-flex justify-content-around">
                <Link to='/'> <img src={logo} alt="" /></Link>
                <h1> পদার্থবিজ্ঞান ক্যালকুলেশন </h1>
            </div>
            <div className="row container mx-auto">
                {
                    categoryList.map(category => (
                        <Link to={`${category.link}`} className="col-md-4 my-3 text-center category-card border-left">
                            <div>
                                <p> {category.name} </p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Category;