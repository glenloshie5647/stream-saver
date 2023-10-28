/*
Filename: ComplexCodeExample.js

Description: This code demonstrates a complex JavaScript program that implements a virtual online shopping platform with various features such as authentication, product listing, shopping cart, order management, and more.

Author: [Your Name]

Date: [Date]

*/

// Class representing a User
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  // Method to log in the user
  login() {
    console.log(`User ${this.username} logged in successfully.`);
  }

  // Method to log out the user
  logout() {
    console.log(`User ${this.username} logged out successfully.`);
  }
}

// Class representing an Item
class Item {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  // Method to calculate total price
  calculateTotal() {
    return this.price * this.quantity;
  }
}

// Class representing a Shopping Cart
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  // Method to add an item to the cart
  addItem(item) {
    this.items.push(item);
    console.log(`Item ${item.name} added to the shopping cart.`);
  }

  // Method to remove an item from the cart
  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
      console.log(`Item ${item.name} removed from the shopping cart.`);
    } else {
      console.log(`Item ${item.name} is not in the shopping cart.`);
    }
  }

  // Method to get the total price of all items in the cart
  getTotalPrice() {
    let totalPrice = 0;
    this.items.forEach((item) => {
      totalPrice += item.calculateTotal();
    });
    return totalPrice;
  }
}

// Class representing an Order
class Order {
  constructor(user, items, totalPrice) {
    this.user = user;
    this.items = items;
    this.totalPrice = totalPrice;
    this.orderNumber = Math.floor(Math.random() * 1000000);
    this.orderDate = new Date();
  }

  // Method to display the order details
  displayOrderDetails() {
    console.log(`Order Number: ${this.orderNumber}`);
    console.log(`Order Date: ${this.orderDate}`);
    console.log(`User: ${this.user.username}`);
    console.log(`Total Price: ${this.totalPrice}`);
    console.log("Items:");
    this.items.forEach((item) => {
      console.log(`${item.name} - ${item.quantity} x ${item.price}`);
    });
  }
}

// Usage example

// Create some sample items
const item1 = new Item("Product 1", 10, 2);
const item2 = new Item("Product 2", 20, 1);
const item3 = new Item("Product 3", 15, 3);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(item1);
cart.addItem(item2);
cart.addItem(item3);

// Calculate the total price
const totalPrice = cart.getTotalPrice();
console.log(`Total Price: ${totalPrice}`);

// Create a user
const user = new User("JohnDoe", "johndoe@example.com", "password");

// Login the user
user.login();

// Create an order
const order = new Order(user, cart.items, totalPrice);

// Display the order details
order.displayOrderDetails();