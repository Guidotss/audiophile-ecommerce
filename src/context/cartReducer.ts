import { Product } from '@/interfaces'
import { CartState } from '.'

type CartActionType = 
    | { type: '[CART] - Add product', payload: Product }


export const cartReducer = ( state:CartState, action: CartActionType ):CartState => {
    
    switch (action.type) {
        case '[CART] - Add product':
            return { 
                ...state
            }
        default: 
            return state;
        
    }
}