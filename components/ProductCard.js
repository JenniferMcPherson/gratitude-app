import React from 'react';

export default function ProductCard({ name, description, price, origin }) {
  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <p>Origin: {origin}</p>
    </div>
  );
}
