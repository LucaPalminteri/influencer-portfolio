import siteConfig from "@/siteConfig";
import { Hero } from "./Hero";
import { ImageGrid } from "./ImageGrid";
import { FeaturedContent } from "./FeaturedContent";
import { Collaborations } from "./Collaborations";
import { Analytics } from "./Analytics";
import { ContactForm } from "./ContactForm";
import { Footer } from "./Footer";

export default function InfluencerPortfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        <Hero
          name={siteConfig.name}
          tagline={siteConfig.tagline}
          description={siteConfig.description}
          imageUrl={siteConfig.profileImageUrl}
          socialLinks={siteConfig.socialLinks}
        />
        <ImageGrid images={siteConfig.portfolioImages} />
        <FeaturedContent items={siteConfig.featuredContent} />
        <Collaborations collaborations={siteConfig.collaborations} />
        <Analytics stats={siteConfig.analytics} />
        <ContactForm />
      </div>
      <Footer name={siteConfig.name} socialLinks={siteConfig.socialLinks} />
    </div>
  );
}
