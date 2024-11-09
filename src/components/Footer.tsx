import { SocialLink } from "@/types";

interface FooterProps {
  name: string;
  socialLinks: SocialLink[];
}

export function Footer({ name, socialLinks }: FooterProps) {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <social.icon className="h-5 w-5" />
              <span className="sr-only">{social.platform}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
