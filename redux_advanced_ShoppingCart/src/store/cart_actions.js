import { uiActions } from "./ui_slice";
import { cartActions } from "./cart_slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://starwars-c1762-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data.");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "sending",
        message: "sending cart data!",
      })
    );

    const sendRequuest = async () => {
      const response = await fetch(
        "https://starwars-c1762-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };

    try {
      await sendRequuest();
      dispatch(
        uiActions.showNotification({
          status: "sucess",
          title: "Success!",
          message: "Sent cart data sucessfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!!",
        })
      );
    }
  };
};
