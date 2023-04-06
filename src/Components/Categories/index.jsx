import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonGroup, Typography, Container } from "@mui/material";
import { useEffect } from "react";
import { get, select } from "../../store/actions";
import SimpleCart from "../SimpleCart";

const Categories = () => {
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get('categories'))
    dispatch(get('products'))

  }, []);

  return (
    <>
      <Typography
        variant="h5"
        marginLeft='20px'
        sx={{
          color: "black",

        }}
      >Browse our Categories</Typography>

      <ButtonGroup variant="text" aria-label="category button group">
        {
          categories.map((category, idx) => (
            <Button
              key={`categories-${idx}`}
              onClick={() => dispatch(select(category))}
            >
              {category.name}
            </Button>
          ))
        }
      </ButtonGroup>
      <Container align="right">
        <SimpleCart />
      </Container>
    </>
  )
};

// const mapStateToProps = ({ categories }) => {
//   return {
//     categories: categories.categories,
//     activeCategory: categories.activeCategory,
//     products: categories.products,
//   };
// }

// const mapDispatchToProps = { setCategory, filterProducts, reset };

export default Categories;