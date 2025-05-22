import { getAllProducts } from "@/app/_lib/data-service";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function ProductList() {
  const {data:allProducts} = await getAllProducts();
  return (
    <>
      {allProducts.products.map((prod) => (
        <Link
          key={prod.id}
          href={`/products/${prod.id}`}
          style={{ textDecoration: "none" }}
        >
          <div className="col">
            <div className="card">
              {/* <img src={prod.thumbnail} class="card-img-top" alt="..." /> */}
              <Image
                src={prod.thumbnail}
                width={200}
                height={200}
                className="card-img-top"
                alt="product image"
              />
              <div className="card-body">
                <h5 className="card-title">{prod.title}</h5>
                <p className="card-text">{prod.description}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
