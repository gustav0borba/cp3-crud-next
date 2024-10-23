import Image from 'next/image';
import notFoundtriste from "@/img/emogi_triste.png";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-200 overflow-hidden">

      <Image src={notFoundtriste} alt="Emoji triste" width={300} height={200} className="mb-0 mt-[-10%]" />
      
      <h1 className="text-4xl font-extrabold text-gray-900 mb-3 mt-[-5%]">404 - Página Não Encontrada</h1>
      
      <p className="text-lg text-gray-700 mb-6 mt-5">
        Parece que o recurso que você está procurando não está disponível no momento.
      </p>
      
      <a href="/" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300">
        Voltar à Página Inicial
      </a>
    </div>
  );
}
