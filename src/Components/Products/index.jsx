import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../../store/actions';

const Products = () => {
  const { products } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <>
      <Typography
        variant="h2"
        align="center"
        sx={{
          color: "black",

        }}
      ></Typography>

      <Box sx={{ width: '100%' }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            products.map((product, idx) => {
              return (
                <Grid item xs={2} sm={4} md={4} key={`product-${idx}`}>

                  <Card
                    variant="outlined"
                    sx={{
                      margin: "1rem",
                    }}
                  >
                    <CardContent>
                      <Typography>Name: {product.name}</Typography>
                      <Typography>Price: {product.price}</Typography>
                      <Typography>In-Stock: {product.inStock}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button onClick={() => dispatch(addToCart(product))} size="small">Add to Cart</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>

                </Grid>
              )
            })
          }
        </Grid>
      </Box>
    </>
  )
}

// const mapStateToProps = ({ categories }) => {
//   return {
//     categories: categories.categories,
//     activeCategory: categories.activeCategory,
//     products: categories.products,
//   };
// }

// const mapDispatchToProps = {};

export default Products;