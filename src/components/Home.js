import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => (
  <div className="flex">
    <p className="font-bold">Welcome to Hello Rails Back-end </p>
    <NavLink to="/greeting">Go To Greetings</NavLink>
  </div>
);

export default Home;
