import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-6 mt-auto">
      <div className="container mx-auto">
        <p className="text-sm">
          Desenvolvido por <span className="font-semibold">Arthur</span> e <span className="font-semibold">Gustavo</span>
        </p>
        <p className="text-xs text-gray-400 mt-2">
          © {new Date().getFullYear()} - Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
