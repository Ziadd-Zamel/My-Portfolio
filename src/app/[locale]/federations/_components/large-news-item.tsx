import Image from "next/image";

interface Props {
  title: string;
  author: string;
  date: string;
  description: string;
  image: string;
}

export default function LargeNewsItem({
  title,
  author,
  date,
  description,
  image,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-6 py-6 border-b">
      {/* IMAGE */}
      <div className="relative w-full md:w-[240px] h-[150px] flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-px"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col justify-start">
        <h2 className="text-xl font-semibold leading-snug mb-2">{title}</h2>

        <p className="text-sm text-gray-600 mb-2">
          <span className="font-medium">{author}</span> - {date}
        </p>

        <p className="text-sm text-gray-700 line-clamp-3">{description}</p>
      </div>
    </div>
  );
}
