import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, amount, product } = action.payload
    const tempItem = state.cart.find((i) => i.id === id)

    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id) {
          let newAmount = cartItem.amount + amount
          return { ...cartItem, amount: newAmount }
        }
        return { ...cartItem }
      })

      return { ...state, cart: tempCart }
    }
    const newItem = {
      id,
      title: product.title,
      amount,
      image: product.image,
      price: product.price,
    }
    return { ...state, cart: [...state.cart, newItem] }
  }

  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload)
    return { ...state, cart: tempCart }
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] }
  }

  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        let newAmount = item.amount
        if (value === 'inc') {
          newAmount = item.amount + 1
        }
        if (value === 'dec') {
          newAmount = item.amount - 1
          if (newAmount < 1) {
            newAmount = 1
          }
        }
        return { ...item, amount: newAmount }
      } else {
        return item
      }
    })

    return { ...state, cart: tempCart }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
