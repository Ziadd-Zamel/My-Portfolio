import Image from "next/image";

interface NewsItem {
  title: string;
  date: string;
  image: string;
}

const news: NewsItem[] = [
  {
    title:
      "La Fédération zambienne de volleyball présente sa vision de développement devant...",
    date: "16 février 2026",
    image: "/assets/image-1.jpeg",
  },
  {
    title: "La délégation d’inspection de la CAVB conclut sa visite au Rwanda",
    date: "4 février 2026",
    image: "/assets/image-2.jpeg",
  },
  {
    title:
      "La CAVB en mission d’inspection à Kigali avant le Championnat d’Afrique...",
    date: "1 février 2026",
    image: "/assets/image-3.jpg",
  },
  {
    title: "Coupe des clubs champions Zone3",
    date: "28 janvier 2026",
    image: "/assets/image-4.jpg",
  },
  {
    title:
      "La CAVB rend hommage à l’ancien président de la Fédération érythréenne...",
    date: "22 janvier 2026",
    image: "/assets/image-1.jpeg",
  },
  {
    title: "La CAVB tiendra son Congrès ordinaire 2026 au Cap-Vert",
    date: "12 février 2026",
    image: "/assets/image-2.jpeg",
  },
  {
    title:
      "L’Égypte accueille à nouveau le cours des arbitres internationaux indoor, une...",
    date: "2 février 2026",
    image: "/assets/image-3.jpg",
  },
  {
    title:
      "Bientôt un complexe de beach-volley aux normes internationales au Bénin",
    date: "29 janvier 2026",
    image: "/assets/image-4.jpg",
  },
  {
    title:
      "CAN de volleyball messieurs Kinshasa 2026 : une édition historique en...",
    date: "22 janvier 2026",
    image: "/assets/image-1.jpeg",
  },
  {
    title:
      "L’Union arabe de volleyball tient sa réunion annuelle du Bureau exécutif...",
    date: "16 janvier 2026",
    image: "/assets/image-2.jpeg",
  },
];

export default function NewsListSection() {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {news.map((item, index) => (
        <div
          key={index}
          className="flex gap-4 items-start hover:bg-gray-50 p-2  transition cursor-pointer"
        >
          {/* IMAGE */}
          <div className="relative w-[110px] h-[70px] flex-shrink-0">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover rounded-px"
            />
          </div>

          {/* TEXT */}
          <div className="flex flex-col">
            <h3 className="text-sm font-medium leading-snug line-clamp-2">
              {item.title}
            </h3>
            <span className="text-xs text-gray-500 mt-1">{item.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
