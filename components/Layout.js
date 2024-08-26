import React from 'react';
import Link from 'next/link';
import '../styles/globals.css';

export default function Layout({ children }) {
  return (
    <div>
      <nav>
        <Link href="/"><a>Home</a></Link>
        <Link href="/products"><a>Products</a></Link>
        <Link href="/about"><a>About</a></Link>
      </nav>
      <main className="container">{children}</main>
      <footer>© 2024 Gratitude App</footer>
    </div>
  );
}
