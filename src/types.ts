import { Instagram, Twitter, Youtube, Facebook, Mail } from "lucide-react";

export interface SocialLink {
  platform: string;
  icon: typeof Instagram | typeof Twitter | typeof Youtube | typeof Facebook | typeof Mail;
  url: string;
}

export interface Collaboration {
  name: string;
  logo: string;
}

export interface FeaturedItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Stat {
  name: string;
  value: string;
  icon: React.ElementType;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  profileImageUrl: string;
  socialLinks: SocialLink[];
  analytics: Stat[];
  collaborations: Collaboration[];
  featuredContent: FeaturedItem[];
  portfolioImages: string[];
}

export interface InstagramResponse {
  data: {
    user?: {
      edge_followed_by: {
        count: number;
      };
    };
  };
}
