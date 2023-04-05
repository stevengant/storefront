import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const Header = () => {
  const { cart } = useSelector(state => state);

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
          <Button>Cart ({cart.length})</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;