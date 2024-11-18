import Link from 'next/link';
import React from 'react';

interface ProductInterface {
  id: number;
  title: string;
  description: string;
  stock: number;
}

const ProdukPage = async () => {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();

  return (
    <div>
      {data.products.map((product: ProductInterface) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>stok {product.stock}</p>
          <Link href={`/produk/${product.id}`}>detail produk</Link>
        </div>
      ))}
    </div>
  );
};

export default ProdukPage;
