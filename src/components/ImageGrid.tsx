import Image from "next/image";

interface ImageGridProps {
  images: string[];
}

export function ImageGrid({ images }: ImageGridProps) {
  return (
    <section className="px-4 py-16 bg-background">
      <h2 className="text-3xl font-bold mb-8 text-center text-foreground">My Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative aspect-square overflow-hidden rounded-lg shadow-sm">
            <Image
              src={src}
              alt={`Portfolio image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
