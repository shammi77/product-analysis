import React from 'react';
import './Home.css';


const Home = () => {
    return (
        <div className="row">
            <div className='col-6'>
                <h1 className="restaurant">Your next go to restaurant</h1>
                <p>This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again</p>
            </div>
            <div className='col-6'>
                <img height='400px' width='500px' src='https://www.cthawards.com/wp-content/uploads/2019/10/you-can-now-be-sued-for-writing-a-negative-restaurant-review-article-img.jpg' alt='' />
                
            </div>
        </div>
    );
};

export default Home;