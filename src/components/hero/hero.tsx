import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-black hidden sm:block">
      <div className="absolute top-18 bottom-0 left-0 right-0 z-0">
        <img
          src="../../../public/assets/hero.jpg"
          alt="Imagem Hero"
          className="w-full h-full object-cover backdrop-opacity-90"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/80"></div>
      </div>
      <div
        className="absolute bottom-8 left-1/2 animate-bounce cursor-pointer bg-black/50 p-4 rounded-full"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <ChevronDown />
      </div>
    </section>
  );
}
