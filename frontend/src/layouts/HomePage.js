import React from 'react';
import NavBar from '../components/navbar/NavBar';
import SliderShow from '../components/slideshow/SliderShow';
import HomeFooter from '../components/footer/HomeFooter';



const HomePage = () => {
  return (
    <div className="max-h-screen">
      <NavBar />
      <SliderShow />
      <HomeFooter />
    </div>
  );
};

export default HomePage;