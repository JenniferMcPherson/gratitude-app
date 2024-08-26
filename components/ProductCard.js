import React from 'react';

export default function ProductCard({ name, description, price, origin, imageUrl }) {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} style={{width: '100%', height: '200px', objectFit: 'cover'}} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <p>Origin: {origin}</p>
    </div>
  );
}
