import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HeaderImage from "../assets/images/banner.png";

const Header = () => {
  return (
    <Box
      sx={{ mt: { lg: "150px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Terle, Gülümse <br />
        Ve Tekrar Et
      </Typography>
      <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Size göre kişiselleştirilmiş en etkili egzersizlere göz atın
      </Typography>
      <Stack>
        <a
          href="#exercises"
          style={{
            marginTop: "45px",
            textDecoration: "none",
            width: "200px",
            textAlign: "center",
            background: "#FF2625",
            padding: "14px",
            fontSize: "22px",
            textTransform: "none",
            color: "white",
            borderRadius: "4px",
          }}
        >
          Egzersizleri Keşfet
        </a>
      </Stack>
      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{
          opacity: "0.1",
          display: { lg: "block", xs: "none" },
          fontSize: "200px",
        }}
      >
        Exercise
      </Typography>
      <img src={HeaderImage} alt="hero-banner" className="hero-banner-img" />
    </Box>
  );
};

export default Header;
