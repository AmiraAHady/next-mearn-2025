import Image from "next/image";
import React from "react";

export default function Login() {
  return (
    <>
      <div className="container m-2 bg-danger">
        <h1>Login Page</h1>
      </div>
      {/* <Image src="/img1.png" width={200} height={200} alt="login Img"/> */}
      <div style={{position:'relative',width:'100%',height:'400px'}}>
      <Image src="/img1.png" fill={true} alt="login Img"/>
      </div>
      
    </>
  );
}
