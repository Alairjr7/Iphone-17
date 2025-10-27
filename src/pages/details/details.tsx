import { Link } from "react-router-dom";
import { useState } from "react";

interface SpecProps {
  id: string;
  image: string;
  color: string;
}
export default function Details() {
  const [selectedColor, setSelectedColor] = useState("blue");
  const spec: SpecProps[] = [
    {
      id: "blue",
      image: "../../../public/assets/iphone-blue.jpg",
      color: "bg-blue-500",
    },
    {
      id: "silver",
      image: "../../../public/assets/iphone-silver.jpg",
      color: "bg-gray-300",
    },
    {
      id: "orange",
      image: "../../../public/assets/iphone-orange.jpg",
      color: "bg-orange-500",
    },
  ];
  return (
    <section className="min-h-screen bg-black text-white pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Imagem do Produto */}
        <div className="flex flex-col items-center gap-20 ">
          <div className="relative group max-w-2xl w-full overflow-hidden h-[300px]  ">
            <img
              src={spec.find((color) => color.id === selectedColor)?.image}
              alt="iPhone 17 Pro"
              className="rounded-3xl w-full shadow-2xl transition-transform duration-500 group-hover:scale-105 object-cover object-bottom-right h-full"
            />
            <div className="absolute inset-0 rounded-3xl bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-full" />
          </div>
          <div className="flex items-center gap-4">
            {spec.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(color.id)}
                className="cursor-pointer transition-colors duration-300"
              >
                <div
                  className={`w-8 h-8 rounded-full border-2 ${color.color} ${
                    selectedColor === color.id
                      ? "border-white "
                      : "border-gray-600"
                  }`}
                ></div>
              </button>
            ))}
          </div>
        </div>

        {/* Informações */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">
            iPhone 17 Pro
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            O novo iPhone 17 Pro redefine o que é ser um smartphone. Construído
            em titânio de grau aeroespacial, com o chip A18 Pro, câmera tripla
            de 48MP e IA integrada para desempenho e fotografia incomparáveis.
          </p>

          {/* Especificações principais */}
          <div className="grid grid-cols-2 gap-4 text-center my-8">
            <div className="bg-gray-900 rounded-2xl py-6 hover:bg-gray-800 transition-all duration-300">
              <p className="text-3xl font-bold text-blue-600">6.3"</p>
              <p className="text-gray-400">Tela Super Retina XDR</p>
            </div>
            <div className="bg-gray-900 rounded-2xl py-6 hover:bg-gray-800 transition-all duration-300">
              <p className="text-3xl font-bold text-orange-500">A18 Pro</p>
              <p className="text-gray-400">Chip mais rápido</p>
            </div>
            <div className="bg-gray-900 rounded-2xl py-6 hover:bg-gray-800 transition-all duration-300">
              <p className="text-3xl font-bold text-blue-600">48MP</p>
              <p className="text-gray-400">Câmera principal</p>
            </div>
            <div className="bg-gray-900 rounded-2xl py-6 hover:bg-gray-800 transition-all duration-300">
              <p className="text-3xl font-bold text-orange-500">29h</p>
              <p className="text-gray-400">Bateria</p>
            </div>
          </div>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/40 cursor-pointer">
              Comprar agora
            </button>
            <Link
              to="/"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
            >
              Voltar
            </Link>
          </div>
        </div>
      </div>

      {/* Seção extra */}
      <div className="max-w-6xl mx-auto mt-24">
        <h2 className="text-4xl font-bold mb-8">Destaques</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">Titânio Premium</h3>
            <p className="text-gray-400">
              Leve, resistente e elegante — o material mais avançado já usado em
              um smartphone.
            </p>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">
              Sistema de Câmeras Pro
            </h3>
            <p className="text-gray-400">
              Três lentes que capturam tudo com detalhes incríveis, até mesmo à
              noite.
            </p>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">iOS 26</h3>
            <p className="text-gray-400">
              Um sistema operacional mais inteligente e fluido, com integração
              total de IA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
