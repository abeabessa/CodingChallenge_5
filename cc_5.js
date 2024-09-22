cc_5.js

// Inventory Array of Product Objects
const inventory = [
  {name: 'Espresso', price: '3', quantity: '10'},
  {name: 'Latte', price: '4', quantity: '5'},
  {name: 'Cappuccino', price: '4', quantity: '6'},
  {name: 'Mocha', price: '5', quantity: '4'},
];

// Orders array
const orders = [];

// Function to place an order
function placeOrder (customerName, itemsOrdered) {
    for (let item of itemsOrdered){
        const product = inventory.find(prod => prod.name === item.name);
        if (!product || product.quantity < item.quantity) {
            console.error(`Insufficient stock for ${item.name}`);
            return;
          // Stop processing the order if any item is unavailable

        }
    }
// Update inventory and add order if all items are available
itemsOrdered.forEach(item => {
    const product = inventory.find(prod => prod.name === item.name);
    product.quantity -= item.quantity; 
    // Reduce stock
});
const newOrder = {
    customerName: customerName,
    items: itemsOrdered,
    status: "pending"
};
orders.push(newOrder);
console.log (`Order placed by $(customerName)`);
}

