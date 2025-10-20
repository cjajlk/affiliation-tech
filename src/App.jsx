import React from "react";

export default function App() {
  const products = [
    {
      name: "Apple iPhone 15 (128 Go)",
      price: "à partir de 859 €",
      image: "https://m.media-amazon.com/images/I/61-r9zOKBCL._AC_SL1500_.jpg",
      link: "https://www.amazon.fr/dp/B0CHXG5V2Y?tag=toutaporte-21",
    },
    {
      name: "Apple AirPods Pro (2ᵉ génération)",
      price: "à partir de 279 €",
      image: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SL1500_.jpg",
      link: "https://www.amazon.fr/dp/B0CHXG5XBG?tag=toutaporte-21",
    },
    {
      name: "Piles Boutons Duracell CR2032 Lithium (Lot de 4)",
      price: "environ 5,99 €",
      image: "https://m.media-amazon.com/images/I/71d+gJrcz9L._AC_SL1500_.jpg",
      link: "https://www.amazon.fr/DURACELL-CR2032-Piles-Boutons-lithium/dp/B06VW5BH2K?th=1&linkCode=ll1&tag=toutaporte-21&linkId=985db326e72229f6ccc60e0872a1a765&language=fr_FR&ref_=as_li_ss_tl",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white text-gray-900 min-h-screen">
      {/* 🌐 Navbar */}
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-extrabold text-indigo-600">
            TechTopAffil
          </h1>
          <div className="space-x-6 text-gray-600 font-medium">
            <a href="#home" className="hover:text-indigo-600 transition">
              Accueil
            </a>
            <a href="#produits" className="hover:text-indigo-600 transition">
              Produits
            </a>
            <a href="#contact" className="hover:text-indigo-600 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* 🏆 Header */}
      <header
        id="home"
        className="text-center pt-40 pb-10 border-b border-gray-200"
      >
        >
        <h1 className="text-4xl font-extrabold mb-3 text-indigo-600">
          🏆 Sélection TechTopAffil 2025
        </h1>
        <p className="text-gray-600 text-lg">
          Les meilleures sélections High-Tech sur Amazon
        </p>
      </header>

      {/* 🛍️ Produits */}
      <main
        id="produits"
        className="max-w-6xl mx-auto px-6 py-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {products.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1"
          >
            <img
              src={p.image}
              alt={p.name}
              className="h-56 w-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="p-5 flex flex-col justify-between">
              <h2 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-2">
                {p.name}
              </h2>
              <p className="text-gray-500 mb-4">{p.price}</p>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white text-center py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                Voir sur Amazon
              </a>
            </div>
          </div>
        ))}
      </main>

      {/* 📩 Contact */}
      <section
        id="contact"
        className="bg-indigo-50 py-10 text-center border-t border-gray-200"
      >
        <h3 className="text-2xl font-bold text-indigo-700 mb-4">
          Vous souhaitez collaborer ?
        </h3>
        <p className="text-gray-600 mb-6">
          Contactez-moi pour des partenariats ou des suggestions de produits.
        </p>
        <a
          href="mailto:contact@techtopaffil.com"
          className="inline-block bg-indigo-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
        >
          ✉️ Envoyer un message
        </a>
      </section>

      {/* ⚙️ Footer */}
      <footer className="text-center py-6 mt-10 text-gray-500 text-sm border-t border-gray-200">
        © 2025 TechTopAffil — Liens affiliés Amazon
      </footer>
    </div>
  );
}
