const products = [
    { id: 1, name: 'Smartphone', price: 180, img: './images/smartphone.jpg' },
    { id: 2, name: 'Smartwatch', price: 30, img: './images/smartwatch.jpg' },
    { id: 3, name: 'Ultrabook Laptop', price: 799, img: './images/laptop.jpg' },
    { id: 4, name: 'Wireless Earbuds', price: 99.99, img: './images/earbuds.jpg' }
];

function addToCart(productId) {
    // Find the product by ID
    const product = products.find(p => p.id === productId);

    // Get the cart from localStorage or initialize an empty cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product already exists in the cart
    const existingProduct = cart.find(p => p.id === productId);

    if (existingProduct) {
        // If product exists, increase quantity
        existingProduct.quantity += 1;
    } else {
        // Otherwise, add new product to the cart with quantity 1
        cart.push({ ...product, quantity: 1 });
    }

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Show an alert confirming the item was added
    alert(`${product.name} has been added to your cart!`);
}

