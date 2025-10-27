interface FooterProps {
  title: string;
  links: string[];
}

export default function Footer() {
  const sections: FooterProps[] = [
    {
      title: "Comprar e Saber Mais",
      links: [
        "Iphine 17 Pro",
        "iPhone 17 Pro Max",
        "Comparar modelos",
        "Acessórios",
      ],
    },
    {
      title: "Especificações",
      links: ["Características técnicas", "Câmera", "Bateria", "Display"],
    },
    {
      title: "Suporte",
      links: ["Suporte ao iPhone", "AppleCare+", "iOS 19", "Contato"],
    },
    {
      title: "Apple",
      links: ["Sobre a Apple", "Newscroom", "Privacidade", "Carreiras"],
    },
  ];

  const buttonLinks: string[] = [
    "Politica de privacidade",
    "Termos de uso",
    "Vendas",
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="hover:text-white cursor-pointer">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-md text-gray-300">Copyright © 2025 Apple Inc. Todos os direitos reservados.</p>
            <div className="flex gap-6  text-gray-400">
              {buttonLinks.map((link, index) => (
                <a
                  href="#"
                  className="hover:text-white cursor-pointer"
                  key={index}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-6 ">
            Site criado para fins educacionais - Desenvolvido por Alair Júnior
          </p>
        </div>
      </div>
    </footer>
  );
}
