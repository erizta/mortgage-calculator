import React, { useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
// components
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";

const StyledContainer = styled(Container)`
  background: rgba(173, 216, 230, 0.2); // Custom transparent background color
  backdrop-filter: blur(8px); // Custom backdrop filter
  border-radius: 8px;
  padding-bottom: 50px;
  padding-top: 50px;
  margin: auto;
`;

const StyledTypography = styled(Typography)`
  color: #fff; // Custom text color
`;

const App = () => {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
  });
  return (
    <Grid>
      <Navbar />
      <Grid sx={{margin:5}}>

      <StyledContainer maxWidth="xl" sx={{ marginTop: 3 }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data} />
          </Grid>
        </Grid>
      </StyledContainer>
      </Grid>
    </Grid>
  );
};

export default App;
