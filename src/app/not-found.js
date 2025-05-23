import React from "react";

export default function NotFound() {
  return (
    <div class="d-flex align-items-center justify-content-center vh-100">
      <div class="text-center">
        <h1 class="display-1 fw-bold">404</h1>
        <p class="fs-3">
          {" "}
          <span class="text-danger">Opps!</span> Page not found.
        </p>
        <p class="lead">The page you are looking for does not exist.</p>
        <a href="index.html" class="btn btn-primary">
          Go Home
        </a>
      </div>
    </div>
  );
}
