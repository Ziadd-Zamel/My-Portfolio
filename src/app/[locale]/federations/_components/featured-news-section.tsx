import LargeNewsItem from "./large-news-item";
export const featuredNews = [
  {
    title: "Laginha Beach Volleyball Pro Tour Zone2",
    author: "CAVB",
    date: "27 décembre 2025",
    description:
      "Le Cap-Vert a organisé les finales du Laginha Beach Volleyball Pro Tour, le 21 décembre 2025 un tournoi mondial, rassemblant des équipes venues des...",
    image: "/assets/image-1.jpeg",
  },
  {
    title:
      "Ahmed Khanou reconduit à la tête de la Fédération de volleyball de Sierra Leone",
    author: "Noel Tadegnon",
    date: "21 décembre 2025",
    description:
      "Ahmed Khanou a été réélu président de la Fédération de volleyball de Sierra Leone à l’issue d’un Congrès électif tenu samedi à Freetown...",
    image: "/assets/image-2.jpeg",
  },
  {
    title: "La Sierra Leone, la Gambie et le Niger sur le podium masculin",
    author: "Noel Tadegnon",
    date: "14 décembre 2025",
    description:
      "La Sierra Leone a décroché l’or du tournoi masculin de volleyball à l’issue d’une finale maîtrisée face à la Gambie...",
    image: "/assets/image-3.jpg",
  },
  {
    title: "La Sierra Léon domine le tournoi U17 de la Zone 2",
    author: "CAVB",
    date: "29 novembre 2025",
    description:
      "Sierra Leone s’est imposée en finale du tournoi Zone II U17, au terme d’une compétition disputée...",
    image: "/assets/image-4.jpg",
  },
  {
    title: "BVB U18 Zone2 : rendez-vous à Sal, au Cap-Vert",
    author: "CAVB",
    date: "19 novembre 2025",
    description:
      "La Zone 2 de la Confédération africaine de volleyball (CAVB) tiendra l’édition 2025 de son tournoi U18...",
    image: "/assets/image-1.jpeg",
  },
  {
    title:
      "Réunion de travail entre la CAVB et la Fédération sénégalaise de Volleyball",
    author: "CAVB",
    date: "2 octobre 2025",
    description:
      "Une réunion de travail s’est tenue au siège de la Confédération Africaine de Volleyball...",
    image: "/assets/image-2.jpeg",
  },
];
export default function FeaturedNewsSection() {
  return (
    <div className="mt-10 w-full px-4">
      <div className="max-w-6xl mx-auto">
        {featuredNews.map((item, index) => (
          <LargeNewsItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
