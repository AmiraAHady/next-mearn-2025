import Image from "next/image";
import styles from "./page.module.css";
import { auth } from "./_lib/auth";

export const metadata = {
  title: "home",
  description: "this is e-commerce page",
};
export default async function Home() {
  const userInfo = await auth();
  console.log(userInfo);
  return (
    <>
      <h1>hello from next app </h1>
      {userInfo?.user && <h1> ya {userInfo.user.name}</h1>}
    </>
  );
}
// ssr
