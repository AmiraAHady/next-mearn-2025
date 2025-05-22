"use client"
import Link from 'next/link';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "./header.module.css"
import { usePathname } from 'next/navigation';



export default function Header() {
   const currentPath= usePathname()
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">MyApp</Navbar.Brand>
      <Nav className={`me-auto ${styles.link}`}>
        <Link href="/" className={(currentPath=='/'?'bg-danger':'')}>Home</Link>
        <Link href="/products" className={(currentPath=='/products'?'bg-danger':'')}>Products</Link>
        <Link href="/about" className={(currentPath=='/about'?'bg-danger':'')}>About</Link>
        <Link href="/contactus" className={(currentPath=='/contactus'?'bg-danger':'')}>ContactUs</Link>
        <Link href="/login" className={(currentPath=='/login'?'bg-danger':'')}>Login</Link>
        <Link href="/todo" className={(currentPath=='/todo'?'bg-danger':'')}>ToDos</Link>
      </Nav>
    </Container>
  </Navbar>
  </>

  )
}
