import { Collaboration } from "@/types";
import Image from "next/image";

export function Collaborations({ collaborations }: { collaborations: Collaboration[] }) {
  return (
    <section className="bg-secondary py-16 mx-4">
      <div className="px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Collaborations</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {collaborations.map((brand, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={200}
                height={100}
                className="max-w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
