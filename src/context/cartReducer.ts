import { CartItem } from "@/interfaces";
import { CartState } from ".";

type CartActionType = { type: "[CART] - Add product"; payload: CartItem };

export const cartReducer = (
  state: CartState,
  action: CartActionType
): CartState => {
  switch (action.type) {
    case "[CART] - Add product":
        

        const item = state.cart?.find((item: CartItem) => item.id === action.payload.id);
        console.log(item);
        if (!item) {
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        }

      return {
        ...state,
        cart: state.cart?.map((item: CartItem) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
                quantity: action.payload.quantity + item.quantity,
            };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};
