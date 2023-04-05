import { useDispatch, useSelector } from "react-redux";
import { setCategory, reset } from "../../store/actions";
import { Button, ButtonGroup, Typography } from "@mui/material";
import SimpleCart from "../SimpleCart";

const Categories = () => {
  const { categories } = useSelector(state => state);
  const dispatch = useDispatch();

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
          categories.categories.map((category, idx) => {
            return (
              <Button
                key={`category-${idx}`}
                onClick={() => {
                  dispatch(setCategory(category));
                }}
              >
                {category.displayName}
              </Button>
            )
          })
        }
        <Button
          onClick={() => reset()}
        >RESET
        </Button>
      </ButtonGroup>

      <SimpleCart />
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