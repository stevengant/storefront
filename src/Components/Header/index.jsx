import { AppBar, Container, Toolbar, Typography } from "@mui/material";


const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
      }}
    >
      <Container>
        <Toolbar
          disableGutters

        >
          <Typography 
          variant="h4"
          sx={{
            color: "black",

          }}
          >OUR STORE</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;