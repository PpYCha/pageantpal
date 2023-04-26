import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { contestantData } from "./api/data";

const Home = () => {
  const [contestantList, setContestantList] = useState([]);

  useEffect(() => {
    setContestantList(contestantData);
  }, []);

  return (
    <Box>
      {contestantList.map((value, index) => (
        <Typography key={index}>{value.contestantFirstName}</Typography>
      ))}
    </Box>
  );
};

export default Home;
