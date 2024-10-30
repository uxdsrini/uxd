import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export function SocialLinks() {
  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/CreativeboySri', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/srinivasbiskula/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/uxdsrini', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/creativeboysri/', label: 'Instagram' },
  ];

  return (
    <div className="flex justify-center space-x-6">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label={label}
        >
          <Icon className="h-6 w-6" />
        </a>
      ))}
    </div>
  );
}
