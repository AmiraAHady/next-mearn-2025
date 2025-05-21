import Image from "next/image";
import styles from "./page.module.css";

export const metadata={
  title:"home",
  description:'this is e-commerce page'
}
export default function Home() {
  return (
    <h1>hello from next app</h1>
  );
}
// ssr