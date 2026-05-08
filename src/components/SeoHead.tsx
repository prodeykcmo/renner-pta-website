import { useEffect } from 'react';
import { siteConfig } from '../siteConfig';

type Props = { title: string; description?: string };

// Lightweight SEO helper — updates <title> and <meta description> per route.
export default function SeoHead({ title, description }: Props) {
  useEffect(() => {
    const fullTitle = `${title} · ${siteConfig.name}`;
    document.title = fullTitle;
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', 'description');
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', description);
    }
  }, [title, description]);
  return null;
}
