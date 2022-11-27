import React from "react";
import AdvertiseSection from "./AdvertiseSection";
import Banner from "./Banner";
import Categories from "./Categories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <AdvertiseSection></AdvertiseSection>
    </div>
  );
};

export default Home;
