import React from 'react';
import HomePage from './Component/homePage/HomePage';
import AllBooks from './Component/homePage/AllBooks';
import AllBooksDetails from './Component/homePage/AllBooksDetails';
import Footer from './Component/Footer';

const Home = () => {
    return (
        <div>
            <HomePage></HomePage>
            <AllBooks></AllBooks>
            {/* <AllBooksDetails></AllBooksDetails> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;