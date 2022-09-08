import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../../components/Exercises';
import SearchExercises from '../../components/SearchExercise';
import HeroBanner from '../../components/HeroBanner';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <Navbar/>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  );
};

export default Home;