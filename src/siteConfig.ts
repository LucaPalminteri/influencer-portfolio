import { Instagram, Twitter, Youtube, Facebook, Mail, Users, Heart, Eye } from "lucide-react";
import { SiteConfig } from "./types";

const siteConfig: SiteConfig = {
  name: "Cati Barrionuevo",
  tagline: "Lifestyle | Fashion | Travel",
  description: "Influencer and content creator passionate about lifestyle, fashion, and travel.",
  profileImageUrl: "/placeholder.svg?height=150&width=150",
  socialLinks: [
    { platform: "Instagram", icon: Instagram, url: "https://instagram.com/janedoe" },
    { platform: "Twitter", icon: Twitter, url: "https://twitter.com/janedoe" },
    { platform: "YouTube", icon: Youtube, url: "https://youtube.com/janedoe" },
    { platform: "Facebook", icon: Facebook, url: "https://facebook.com/janedoe" },
    { platform: "Email", icon: Mail, url: "mailto:contact@janedoe.com" },
  ],
  analytics: [
    { name: "Followers", value: "37K+", icon: Users },
    { name: "Avg Likes", value: "7K+", icon: Heart },
    { name: "Views", value: "480K+", icon: Eye },
  ],
  collaborations: [
    { name: "Fashion Brand A", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Travel Company B", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Lifestyle Product C", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Cosmetics Brand D", logo: "/placeholder.svg?height=100&width=200" },
  ],
  featuredContent: [
    {
      id: 1,
      title: "Summer Fashion Trends",
      description: "Explore the hottest fashion trends for this summer season.",
      imageUrl: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      title: "Travel Vlog: Bali Adventure",
      description: "Join me on my exciting journey through the beautiful island of Bali.",
      imageUrl: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      title: "Healthy Lifestyle Tips",
      description: "Discover my top tips for maintaining a healthy and balanced lifestyle.",
      imageUrl: "/placeholder.svg?height=200&width=400",
    },
  ],
  portfolioImages: [
    "/placeholder.svg?height=500&width=500",
    "/placeholder.svg?height=500&width=500",
    "/placeholder.svg?height=500&width=500",
    "/placeholder.svg?height=500&width=500",
    "/placeholder.svg?height=500&width=500",
    "/placeholder.svg?height=500&width=500",
  ],
};

export default siteConfig;
