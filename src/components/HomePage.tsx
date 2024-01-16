"use client";

import { Container, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Container maxWidth={false}>
      <Typography
        variant="h1"
        textAlign={"center"}
        sx={{ background: "#f12c2c" }}
      >
        Clickup
      </Typography>
    </Container>
  );
};

export default HomePage;
