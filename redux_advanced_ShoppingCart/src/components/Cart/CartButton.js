import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui_slice";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const quantityItemsInCart = useSelector((state) => state.cart.totalQuantity);

  const showCartHandler = () => {
    dispatch(uiActions.showCartToggler());
  };

  return (
    <button onClick={showCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantityItemsInCart}</span>
    </button>
  );
};

export default CartButton;
