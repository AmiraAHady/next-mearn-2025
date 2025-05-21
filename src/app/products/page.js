/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

export default async function Products() {
  const res = await fetch(`https://dummyjson.com/products`);
  const allProducts = await res.json();
  console.log(allProducts.products);
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {allProducts.products.map((prod) => (
        <div className="col" key={prod.id}>
          <div className="card">
            <img src={prod.thumbnail} class="card-img-top" alt="..." />
            {/* <Image
              src={prod.thumbnail}
              width={200}
              height={200}
              className="card-img-top"
              alt="product image"
            /> */}
            <div className="card-body">
              <h5 className="card-title">{prod.title}</h5>
              <p className="card-text">{prod.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
