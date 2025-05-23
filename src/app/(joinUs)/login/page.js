import { signIn, signOut } from "@/app/_lib/auth";
import Image from "next/image";
import React from "react";

export default function Login() {


  const loginUser=async()=>{
    "use server"
    await signIn('google',{
      redirectTo:'/'
    })
  }
  const logoutUser=async()=>{
    "use server"
    await signOut('google',{
      redirectTo:'/'
    })
  }


  return (
    <>
      <div className="container m-2 bg-danger">
        <h1>Login Page</h1>
        
        
      </div>
      <form action={loginUser}>
        <button className="btn btn-success" >Login</button>
        </form>
      <form action={logoutUser}>
        <button className="btn btn-info" >Logout</button>
        </form>
      {/* <Image src="/img1.png" width={200} height={200} alt="login Img"/> */}
      <div style={{position:'relative',width:'100%',height:'400px'}}>
      {/* <Image src="/img1.png" fill={true} alt="login Img"/> */}
      </div>
      
    </>
  );
}
