import React from 'react';
import './Category.css';
import { Link } from 'react-router-dom';

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

    ]


    return (
        <div className=''>
            <h2 className='bg-header'> পদার্থ বিজ্ঞান ক্যালকুলেশন </h2>
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