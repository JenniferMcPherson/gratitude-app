import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import { getProductById } from '../../utils/mockApi';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      getProductById(parseInt(id)).then(setProduct);
    }
  }, [id]);

  if (!product) {
    return <Layout><p>Loading...</p></Layout>;
  }

  return (
    <Layout>
      <div className="product-detail">
        <h1>{product.name}</h1>
        <img src={product.imageUrl} alt={product.name} style={{maxWidth: '400px'}} />
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Origin: {product.origin}</p>
        <button onClick={() => {/* Add to cart logic */}}>Add to Cart</button>
        <h2>Artisan Story</h2>
        <p>{product.artisanStory}</p>
      </div>
    </Layout>
  );
}
