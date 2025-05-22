import { getProductById } from "@/app/_lib/data-service";
import React from "react";

let singleProduct;

async function getProdutData({ params }) {
  const { data: product } = await getProductById(params.id);
  singleProduct = product;
  console.log("inside IIFE");
}

export async function generateMetadata({ params }) {
  console.log("inside generateMetadata");
  // const {data:product} = await getProductById(params.id)
  return {
    title: singleProduct?.title,
  };
}

export default async function ProductDetails({ params }) {
  await getProdutData({ params });
  console.log("inside component");

  return (
    <div>
      {!singleProduct?.message ? (
        <div>
          <h2>{singleProduct?.title}</h2>
          <h2>{singleProduct?.price}</h2>
        </div>
      ) : (
        <h1>{singleProduct?.message}</h1>
      )}
    </div>
  );
}
