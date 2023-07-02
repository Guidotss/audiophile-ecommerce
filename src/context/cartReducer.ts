import { CartItem } from "@/interfaces";
import { CartState } from ".";

type CartActionType =
  | { type: "[CART] - Add product"; payload: CartItem }
  | { type: "[CART] - Delete product"; payload: CartItem }
  | { type: "[CART] - Load products"; payload: CartItem }
  | { type: "[CART] - Delete cart" }
  | { type: "[CART] - Update total price"; payload: number }
  | { type: "[CART] - Update update quantity from modal"; payload: { item:CartItem, increaseBy: number } };

export const cartReducer = (
  state: CartState,
  action: CartActionType
): CartState => {
  switch (action.type) {
    case "[CART] - Add product":
      if (state.cart.length === 0) {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }

      const isProductInCart = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (isProductInCart) {
        return {
          ...state,
          cart: state.cart.map((product) =>
            product.id === action.payload.id
              ? {
                  ...product,
                  quantity: product.quantity + action.payload.quantity,
                }
              : product
          ),
        };
      }

      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case "[CART] - Delete product":
      if (state.cart.length === 0) {
        return state;
      }

      const isProductInCartToDelete = state.cart.find(
        (product) => product.id === action.payload.id
      );

      if (isProductInCartToDelete?.quantity === 0) {
        return {
          ...state,
          cart: state.cart.filter(
            (product) => product.id !== action.payload.id
          ),
        };
      }

      if (isProductInCartToDelete) {
        return {
          ...state,
          cart: state.cart.map((product) => {
            if (product.id === action.payload.id) {
              return {
                ...product,
                quantity: product.quantity - action.payload.quantity,
              };
            }
            return product;
          }),
        };
      }

    case "[CART] - Load products":
      return {
        ...state,
        cart: action.payload as unknown as CartItem[],
      };

    case "[CART] - Delete cart":
      return {
        ...state,
        cart: [],
      };

    case "[CART] - Update total price":
      return {
        ...state,
        totalPrice: action.payload,
      };
    
    case "[CART] - Update update quantity from modal": 
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product.id === action.payload.item.id) {
            return {
              ...product,
              quantity: product.quantity + action.payload.increaseBy,
            };
          }
          return product;
        })
      }
    default:
      return state;
  }
};
