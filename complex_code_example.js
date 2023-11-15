/**
 * Filename: complex_code_example.js
 * 
 * This complex JavaScript code example showcases a simulated online store checkout process.
 * It includes various functions and objects related to managing the shopping cart, calculating
 * total costs, applying discounts, processing payments, and generating order summaries.
 */

// Define the ShoppingCart class to manage items and calculate totals
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (const item of this.items) {
      totalPrice += item.price;
    }
    return totalPrice;
  }
}

// Define the Discount class to handle discount calculations
class Discount {
  constructor(code, percentage) {
    this.code = code;
    this.percentage = percentage;
  }

  applyDiscount(price) {
    const discountAmount = (this.percentage / 100) * price;
    return price - discountAmount;
  }
}

// Create an instance of ShoppingCart
const shoppingCart = new ShoppingCart();

// Add some items to the shopping cart
shoppingCart.addItem({ name: 'Product 1', price: 10 });
shoppingCart.addItem({ name: 'Product 2', price: 20 });
shoppingCart.addItem({ name: 'Product 3', price: 30 });

// Define available discounts
const discount1 = new Discount('DISCOUNT25', 25);
const discount2 = new Discount('DISCOUNT50', 50);
const discount3 = new Discount('DISCOUNT10', 10);

// Simulate applying a discount code
const applyDiscountCode = (code) => {
  let totalPrice = shoppingCart.getTotalPrice();
  let discountedPrice = totalPrice;

  switch (code) {
    case 'DISCOUNT25':
      discountedPrice = discount1.applyDiscount(totalPrice);
      break;
    case 'DISCOUNT50':
      discountedPrice = discount2.applyDiscount(totalPrice);
      break;
    case 'DISCOUNT10':
      discountedPrice = discount3.applyDiscount(totalPrice);
      break;
    default:
      console.log('Invalid discount code');
  }

  return discountedPrice;
};

// Process the payment and generate an order summary
const processPayment = (paymentMethod, discountCode) => {
  const discountedPrice = applyDiscountCode(discountCode);

  console.log('Processing payment...');
  // Code for processing payment using the specified payment method

  console.log('Order Summary:');
  console.log('---------------');
  console.log(`Items: ${shoppingCart.items.length}`);
  console.log(`Total Price: $${shoppingCart.getTotalPrice()}`);
  console.log(`Discounted Price: $${discountedPrice}`);
  console.log(`Payment Method: ${paymentMethod}`);
};

// Invoke the payment processing function
processPayment('Credit Card', 'DISCOUNT25');
processPayment('PayPal', 'DISCOUNT10');

// more code lines...
// ...
// ...
// ... (additional code lines for further functionality)

// End of complex_code_example.js