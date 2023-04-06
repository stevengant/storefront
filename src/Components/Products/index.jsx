import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, adjustInventory } from '../../store/actions';

const Products = () => {
  const { products } = useSelector(state => state);
  const { activeCategory } = useSelector(state => state.categories);
  const dispatch = useDispatch();

  const addItemHandler = (product) => {
    dispatch(addToCart(product));
    dispatch(adjustInventory(product));
  };

  return (
    <>
      {
        activeCategory && 
        <Typography
        variant="h4"
        align="center"
        >
          {activeCategory.name.toUpperCase()}
          </Typography>
      }
      {
        activeCategory && 
        <Typography
        align="center"
        >
          {activeCategory.description.toUpperCase()}
          </Typography>
      }

      {activeCategory && <Container maxWidth="md">
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid 
            item key={product.name} 
            xs={12} 
            sm={6} 
            md={4}
            m="auto"
            
            >
              <Card >
                <CardMedia
                  component="img"
                  image={`https://source.unsplash.com/random?${product.name}`}
                  title={product.name}
                />
                <CardContent >
                  <Typography 
                  gutterBottom 
                  variant="h5" 
                  component="h2"
                  align="left"
                  >
                    {product.name.toUpperCase()}
                  </Typography>
                  <Typography>
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => addItemHandler(product)}
                  >
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>}
    </>
  )

};

export default Products;