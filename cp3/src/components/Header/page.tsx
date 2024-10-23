import React from 'react';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wide gradient-text gradient-text-hover">Portfólio Do Estudante</h1>

        <nav>
          <ul className="flex space-x-8">
            <li>
              <a href="/" className="hover:text-orange-400 transition-colors duration-200 text-lg font-medium">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-orange-400 transition-colors duration-200 text-lg font-medium">Sobre</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
