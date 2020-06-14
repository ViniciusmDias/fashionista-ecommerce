import React from 'react';

import Navigation from "../components/Navigation";
import AllProducts from "../containers/AllProducts"

const Home: React.FC = () => {
  return (
  <>
    <Navigation/>
    <AllProducts/>
  </>
  )
};
export default Home;
