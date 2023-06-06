import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";
import Detaylar from "../components/Detaylar";
import EgzersizVideo from "../components/EgzersizVideo";

const EgzersizDetaylari = () => {
  //egzersiz ile alakalı detayları tutan state
  const [exerciseDetail, setExerciseDetail] = useState({});
  //egzersize uygun you tube videolarını tutan state
  const [exerciseVideos, setExerciseVideos] = useState([]);
  //egzersizin id sini öğrenerek onun datasını apiden istiyoruz
  const { id } = useParams();

  //egzersiz her değiştiğinde egzersiz detaylarının datasını ve ilgili you tube videolarının 
  //url lerini apiden istiyoruz
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);
      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideosData.contents);
    };

    fetchExercisesData();
  }, [id]);
  return (
    <Box>
      <Detaylar exerciseDetail={exerciseDetail} />
      <EgzersizVideo
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
    </Box>
  );
};

export default EgzersizDetaylari;
