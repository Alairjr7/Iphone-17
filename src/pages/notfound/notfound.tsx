import { Link } from "react-router-dom";
import feature from "../../../public/assets/ios-features.jpg";

export default function Notfound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-6">
      <div className="max-w-3xl">
        <h1 className="text-8xl md:text-9xl font-bold mb-6 text-gradient">
          404
        </h1>
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
          Página não encontrada
        </h2>
        <p className="text-gray-400 text-lg md:text-xl mb-10">
          Parece que você tentou acessar algo que não existe. Mas não se
          preocupe, você pode voltar para o início.
        </p>

        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/40"
        >
          Voltar para a Home
        </Link>

        <div className="mt-16">
          <img
            src={feature}
            alt="Not Found"
            className="rounded-3xl w-full max-w-md mx-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </section>
  );
}
