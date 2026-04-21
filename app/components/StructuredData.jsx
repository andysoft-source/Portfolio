import { PERSONAL_INFO } from '../constants/personalInfo';

export function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PERSONAL_INFO.name,
    jobTitle: PERSONAL_INFO.title,
    email: PERSONAL_INFO.email,
    telephone: PERSONAL_INFO.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: PERSONAL_INFO.location,
    },
    url: PERSONAL_INFO.social.portfolio,
    sameAs: [
      PERSONAL_INFO.social.github,
      PERSONAL_INFO.social.linkedin,
    ].filter(Boolean),
    knowsAbout: [
      'Full-Stack Development',
      'AI Integration',
      'Web Development',
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'Automation',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${PERSONAL_INFO.name} - Portfolio`,
    url: PERSONAL_INFO.social.portfolio,
    author: {
      '@type': 'Person',
      name: PERSONAL_INFO.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

