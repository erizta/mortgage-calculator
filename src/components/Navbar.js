import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { keyframes } from "@emotion/react";

// Define the gradient animation
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Create a styled component with the gradient background
const StyledAppBar = styled(AppBar)`
  background: linear-gradient(45deg, #b4e1f0 30%, #b9e3c6 90%);
  animation: ${gradientAnimation} 10s infinite;
`;

const StyledTypography = styled(Typography)`
  color: #333;
  font-family: "Poppins", sans-serif;
`;

const Navbar = () => {
  return (
    <StyledAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <StyledTypography variant="h5" sx={{ flexGrow: 1 }}>
            A &amp; H Bank
          </StyledTypography>
          {/* Add more components or links to the toolbar if needed */}
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Navbar;
