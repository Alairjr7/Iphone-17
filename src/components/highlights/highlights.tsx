import type { SpecProps } from "../intro/intro";

export default function Highlights() {
  const spec: SpecProps[] = [
    {
      value: "48MP",
      title: "Principal",
      label: "Sensor quad-pixel com foco automático",
      color: "text-blue-600",
    },
    {
      value: "12MP",
      title: "Ultra Wide",
      label: "Campo de visão de 120° como modo noturno",
      color: "text-orange-500",
    },
    {
      value: "12MP",
      title: "Telefoto 5x",
      label: "Zoom óptico de 5x com estabilização",
      color: "text-blue-600",
    },
  ];

  return (
    <section className="bg-black py-20 px-6" id="design">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="sm:text-5xl text-4xl font-bold mb-4">
            Design revolucionário
          </h2>
          <p className="sm:text-xl text-lg text-gray-400">
            Cada detalhe foi pensado para criar a melhor experiência.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16 ">
          <div className="bg-gray-900 rounded-3xl sm:p-8 p-4">
            <img
              src="../../../public/assets/titanium-design.jpg"
              alt="iphone-titanium"
              className="w-full rounded-2xl mb-4"
            />
            <h3 className="font-bold mb-2 text-2xl sm:text-3xl">
              Titânio Premium
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Estrutura de titânio de grau aerospacial. O smartphone mais forte
              e leve.
            </p>
          </div>
          <div className="bg-gray-900 rounded-3xl p-8">
            <img
              src="../../../public/assets/ios-features.jpg"
              alt="ios 2025"
              className="w-full rounded-2xl mb-4"
            />
            <h3 className="font-bold mb-2 text-2xl sm:text-3xl">iOs 26</h3>
            <p className="text-gray-300 text-sm sm:text-base">
              O sistema operacional mais avançado do mundo com IA integrada.
            </p>
          </div>
        </div>

        <div
          className="bg-gray-900 rounded-3xl sm:p-12 p-6 mb-16 "
          id="performance"
        >
          <h3 className="sm:text-4xl text-2xl font-bold mb-6 text-gradient">
            A18 Pro
          </h3>
          <p className="text-gray-300 mb-6 text-sm sm:text-base">
            O chip mais poderoso em um smartphone.
          </p>
          <img
            src="../../../public/assets/chip-a18-pro.jpg"
            alt="chip a18"
            className="w-full rounded-2xl mb-4"
          />
          <ul className="list-disc list-inside space-y-3 text-gray-300 text-sm sm:text-base">
            <li>CPU 20% mais rápida</li>
            <li>GPU 25% mais eficiente</li>
            <li>Neural Engine com 16 núcleos</li>
            <li>Ray tracing acelerado por hardware</li>
          </ul>
        </div>

        <div className="text-center" id="camera">
          <h3 className="sm:text-4xl text-3xl font-bold mb-10">
            Sistema de câmera Pro avançado
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {spec.map((spec, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl p-8 hover:scale-105 cursor-pointer transition-all duration-300"
              >
                <div className={`text-4xl font-bold mb-4 ${spec.color}`}>
                  {spec.value}
                </div>
                <h4 className="text-xl font-semibold mb-2">{spec.title}</h4>
                <p className="text-gray-400">{spec.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
