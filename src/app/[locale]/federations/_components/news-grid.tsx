import NewsCard from "./news-card";

export default function NewsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 h-[500px]">
      {/* LEFT BIG CARD */}
      <NewsCard
        title="Misrata accueille le premier tournoi final à six du Championnat libyen de volleyball 2026"
        subtitle="CAVB - 4 avril 2026"
        image="/assets/image-1.jpeg"
        variant="large"
      />

      {/* RIGHT SIDE */}
      <div className="grid grid-rows-2 gap-1">
        {/* TOP RIGHT */}
        <NewsCard
          title="La Zone II de Volleyball prépare le terrain pour l’Assemblée Annuelle Clé au Sénégal"
          image="/assets/image-2.jpeg"
        />

        {/* BOTTOM RIGHT (2 small cards) */}
        <div className="grid grid-cols-2 gap-1">
          <NewsCard
            title="Championnat africain des clubs champions de volleyball Masculin Rwanda du 20 avril au 03 mai 2026"
            image="/assets/image-3.jpg"
          />

          <NewsCard
            title="La Fédération de Guinée-Bissau de volley-ball réélit Aladje Camara à la présidence"
            image="/assets/image-4.jpg"
          />
        </div>
      </div>
    </div>
  );
}
