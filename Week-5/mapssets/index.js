let productViews = new WeakMap();
let cartItems = new WeakSet();

function incrementProductViews(productId) {
  if (!productViews.has(productId)) {
    // Product ID not present, initialize with 1 view
    productViews.set(productId, 1);
  } else {
    // Product ID already present, increment view count
    productViews.set(productId, productViews.get(productId) + 1);
  }
}

function addToCart(productId) {
  if (cartItems.has(productId)) {
    return "Product already in cart";
  } else {
    cartItems.add(productId);
    return "Product added to cart";
  }
}

// Example usage
incrementProductViews(123); // Product ID 123 is viewed for the first time
incrementProductViews(123); // Product ID 123 is viewed for the second time

console.log(addToCart(123)); // "Product added to cart"
console.log(addToCart(123)); // "Product already in cart"
