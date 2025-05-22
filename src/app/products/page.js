/* eslint-disable @next/next/no-img-element */
import ProductList from "@/components/productList";
import React, { Suspense } from "react";
import Loading from "../loading";
import SpinnerLoader from "@/components/spinner";

export default function Products() {
  return (
    <>
    <h2>here we List Our Products</h2>
    <p>New Income Products</p>
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <Suspense fallback={<SpinnerLoader />}>
      <ProductList />
      </Suspense>
    </div>
    </>
  );
}
