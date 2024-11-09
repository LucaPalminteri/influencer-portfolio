import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SocialLink } from "@/types";

interface HeroProps {
  name: string;
  tagline: string;
  imageUrl: string;
  description: string;
  socialLinks: SocialLink[];
}

export function Hero({ name, tagline, imageUrl, socialLinks, description }: HeroProps) {
  return (
    <section className="px-4 py-20 text-center bg-background text-foreground">
      <Image
        src={imageUrl}
        alt={name}
        width={150}
        height={150}
        className="mx-auto rounded-full mb-8 border-4 border-primary"
      />
      <h1 className="text-4xl font-bold mb-4 text-foreground">{name}</h1>
      <p className="text-xl text-muted-foreground mb-4">{tagline}</p>
      {/* <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">{description}</p> */}
      <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
        Embajadora de <a href="https://www.instagram.com/lolamorarosario/">@lolamorarosario</a> y{" "}
        <a href="https://www.instagram.com/bellassiemprespa/">@bellassiemprespa</a>.
      </p>
      <div className="flex justify-center space-x-4">
        {socialLinks.map((link, index) => (
          <Button key={index} variant="outline" size="icon" asChild>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-foreground hover:bg-primary transition-colors"
            >
              <link.icon className="h-5 w-5" />
              <span className="sr-only">{link.platform}</span>
            </a>
          </Button>
        ))}
      </div>
    </section>
  );
}
