import React from 'react';

const DetailProdukPage = async ({
  params,
}: {
  params: {
    produkId: string;
  };
}) => {
  const { produkId } = params;

  const response = await fetch('https://dummyjson.com/products/' + produkId);
  const data = await response.json();
  return (
    <div>
      <h1>ini detail produk {produkId}</h1>
      {JSON.stringify(data)}
    </div>
  );
};

export default DetailProdukPage;
