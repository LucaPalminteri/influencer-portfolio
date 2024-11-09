import { FeaturedItem } from "@/types";
import Image from "next/image";

export function FeaturedContent({ items }: { items: FeaturedItem[] }) {
  return (
    <section className="px-4 py-16 bg-background">
      <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Featured Content</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div key={item.id} className="bg-card rounded-lg overflow-hidden shadow-sm">
            <Image src={item.imageUrl} alt={item.title} width={400} height={200} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
