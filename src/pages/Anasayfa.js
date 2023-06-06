import React, { useState } from "react";
import { Box } from "@mui/material";

import Header from "../components/Header";
import EgzersizAra from "../components/EgzersizAra";
import Egzersizler from "../components/Egzersizler";

const Anasayfa = () => {
  //egzersizleri tutan state
  const [exercises, setExercises] = useState([]);
  //seçilen egzersizin kategorisini tutan state
  const [bodyPart, setBodyPart] = useState("all");
  return (
    <Box>
      <Header />
      <EgzersizAra
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Egzersizler
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Anasayfa;
