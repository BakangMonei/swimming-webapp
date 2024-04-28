import React from 'react';
import NavBar from '../components/navbar/NavBar';
import SliderShow from '../components/slideshow/SliderShow';
import HomeFooter from '../components/footer/HomeFooter';
import Carousell from '../components/carousel/Carousel';



const HomePage = () => {
  return (
    <div className="max-h-screen ">
      <NavBar />
      {/* <SliderShow /> */}

      <div className="max-h-screen">
      <Carousell/>
      </div>
      <HomeFooter />
    </div>
  );
};

export default HomePage;