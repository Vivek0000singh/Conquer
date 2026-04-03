import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box mt="80px" bgcolor="#DAE3E6">
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="41px"
      textAlign="center"
      pb="40px"
    >
      <br />
      Made by <span style={{ fontSize: '24px', fontWeight: 'bold' }}>VIVEK SINGH</span>
    </Typography>
  </Box>
);

export default Footer;
