import Image from "next/image";

type Props = {
  title: string;
  subtitle?: string;
  image: string;
  variant?: "large" | "default";
};

export default function NewsCard({
  title,
  subtitle,
  image,
  variant = "default",
}: Props) {
  return (
    <div className="relative w-full h-full overflow-hidden group cursor-pointer">
      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover group-hover:scale-105 transition duration-300"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Text */}
      <div className="absolute bottom-0 p-4 text-white">
        <h2
          className={`font-semibold ${variant === "large" ? "text-xl md:text-2xl" : "text-sm md:text-base"}`}
        >
          {title}
        </h2>

        {subtitle && <p className="text-xs mt-1 opacity-80">{subtitle}</p>}
      </div>
    </div>
  );
}
