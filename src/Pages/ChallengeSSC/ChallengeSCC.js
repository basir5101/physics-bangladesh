import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/physics.png';

const ChallengeSCC = () => {
    const categoryList = [
        {
            name: '১ম দিন',
            link: '/first-day-ssc'
        },
        {
            name: '২য় দিন',
            link: '/second-day-ssc'
        },
        {
            name: '৩য় দিন',
            link: '/third-day-ssc'
        },
    ]
    return (
        <div>
            <div className="bg-header d-flex justify-content-around">
                <Link to='/'> <img src={logo} alt="" /></Link>
                <h1>চ্যালেঞ্জ</h1>
            </div>
            <div className="row container mx-auto">
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

export default ChallengeSCC;