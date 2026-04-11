import React from 'react';
import HomePage from './Component/homePage/HomePage';
import AllBooks from './Component/homePage/AllBooks';
import AllBooksDetails from './Component/homePage/AllBooksDetails';

const Home = () => {
    return (
        <div>
            <HomePage></HomePage>
            <AllBooks></AllBooks>
            {/* <AllBooksDetails></AllBooksDetails> */}
        </div>
    );
};

export default Home;