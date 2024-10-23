import Image from 'next/image';
import notFoundtriste from "@/img/uma estrada deserta.png"; 

export default function NotFound() {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen">
      <Image 
        src={notFoundtriste} 
        alt="Estrada deserta" 
        layout="fill" 
        objectFit="cover" 
        className="z-0" 
      />
      
      <div className="relative z-10 bg-black bg-opacity-50 p-6 rounded-lg">
        <h1 className="text-4xl font-extrabold text-white mb-3">404 - Página Não Encontrada</h1>
        
        <p className="text-lg text-gray-300 mb-6">
          Parece que o recurso que você está procurando não está disponível no momento.
        </p>
        
        <a href="/" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300">
          Voltar à Página Inicial
        </a>
      </div>
    </div>
  );
}
