
let cart = [];

const cartService = {
  addToCart: (property) => {
    cart.push(property);
    console.log('Property added to cart:', property);
  },
  getCart: () => {
    return cart;
  },
  clearCart: () => {
    cart = [];
  },
};

export default cartService;
