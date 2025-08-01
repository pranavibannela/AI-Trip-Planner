import React from 'react';
import { Button } from '../button';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="flex flex-col items-center mx-56 gap-9">
      <h2 className="font-extrabold text-[40px] text-center mt-16">
        <span className="text-[#f56551]">Discover Your Next Adventure with AI:</span> Personalized Itineraries at Your Fingertips
      </h2>
      <p className='text-xl text-gray-500 text-center'>
        Your personal trip planner and travel curator, creating customer Itineraries tailored to your interests and budget.
      </p>
      <Link to={'/create-trip'}>
        <Button>Get Started, it's Free</Button>
      </Link>
    </div>
  );
}

export default Hero;
