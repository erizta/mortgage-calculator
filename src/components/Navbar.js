import { AppBar, Container, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h5">A & H Bank</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
