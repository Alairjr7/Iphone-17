import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#intro"
          className="text-xl font-semibold text-white hover:text-blue-500 transition-colors duration-300"
        >
          iPhone 17 Pro
        </a>

        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          <li className="capitalize hover:text-gray-300 transition-colors duration-200">
            <a href="/#design">design</a>
          </li>
          <li className="capitalize hover:text-gray-300 transition-colors duration-200">
            <a href="/#camera">câmera</a>
          </li>
          <li className="capitalize hover:text-gray-300 transition-colors duration-200">
            <a href="/#performance">performance</a>
          </li>
          <li className="capitalize hover:text-gray-300 transition-colors duration-200">
            <a href="/#colors">cores</a>
          </li>

          <button className="bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 cursor-pointer" onClick={() => navigate("/produto/iphone17")}>
            Comprar
          </button>
        </ul>

        {/* Botão Menu Mobile */}
        <button
          className="md:hidden text-white hover:text-gray-300 transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
          <ul className="flex flex-col items-center gap-6 py-8 text-lg">
            <li>
              <a
                href="/#design"
                className="hover:text-blue-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                design
              </a>
            </li>
            <li>
              <a
                href="/#camera"
                className="hover:text-blue-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                câmera
              </a>
            </li>
            <li>
              <a
                href="/#performance"
                className="hover:text-blue-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                performance
              </a>
            </li>
            <li>
              <a
                href="/#colors"
                className="hover:text-blue-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                cores
              </a>
            </li>
            <button
              className="bg-blue-600 px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => {
                setIsOpen(false), navigate("/produto/iphone17");
              }}
            >
              Comprar
            </button>
          </ul>
        </div>
      )}
    </header>
  );
}
