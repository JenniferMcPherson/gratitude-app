import React from 'react';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';

const sampleProducts = [
  { name: "Handmade Scarf", description: "Beautiful scarf made by artisans in Peru", price: 49.99, origin: "Peru" },
  { name: "Carved Wooden Box", description: "Intricate wooden box crafted in India", price: 79.99, origin: "India" },
];

export default function Products() {
  return (
    <Layout>
      <h1>Our Products</h1>
      <p>Explore our collection of personalized gifts from around the world.</p>
      <div className="product-list">
        {sampleProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </Layout>
  );
}
