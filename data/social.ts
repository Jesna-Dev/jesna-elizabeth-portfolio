export interface SocialLink {
  id: string;
  label: string;
  href: string;
  /** Short mark used in the circular badges. */
  glyph: string;
}

export const EMAIL = 'jesnakelizabethjolly@gmail.com';

/** Served from /public. Update the filename here if the CV file is renamed. */
export const RESUME_URL = '/jesna-elizabeth-jolly-resume.pdf';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jesna-k-elizabeth-jolly/',
    glyph: 'in'
  },
  {
    id: 'behance',
    label: 'Behance',
    href: 'https://www.behance.net/jesnakelizabe',
    glyph: 'Bē'
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/creativesbyelix/',
    glyph: 'ig'
  },
  {
    id: 'email',
    label: 'Email',
    href: `mailto:${EMAIL}`,
    glyph: '@'
  }
];

/** mailto links must not open in a new tab. */
export const isExternalSocial = (href: string) => href.startsWith('http');
