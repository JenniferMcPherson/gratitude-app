const products = [
  {
    id: 1,
    name: "Handmade Scarf",
    description: "Beautiful scarf made by artisans in Peru",
    price: 49.99,
    origin: "Peru",
    imageUrl: "https://example.com/scarf.jpg",
    artisanStory: "Meet Maria, a skilled weaver from Cusco..."
  },
  {
    id: 2,
    name: "Carved Wooden Box",
    description: "Intricate wooden box crafted in India",
    price: 79.99,
    origin: "India",
    imageUrl: "https://example.com/wooden-box.jpg",
    artisanStory: "Raj has been carving wood for over 30 years..."
  },
  {
    id: 3,
    name: "Hand-painted Ceramic Vase",
    description: "Colorful vase painted by artists in Mexico",
    price: 89.99,
    origin: "Mexico",
    imageUrl: "https://example.com/vase.jpg",
    artisanStory: "The Lopez family has been creating ceramics for generations..."
  }
];

export function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 500);
  });
}

export function getProductById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find(p => p.id === id);
      resolve(product);
    }, 500);
  });
}
