import Image from 'next/image';
import { PageHero, SectionHeader } from '@/components/blocks';
import SeoBreadcrumbs from '@/components/seo-breadcrumbs';
import { leadership } from '@/lib/site';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/leadership', 'Leadership | Hexa',
  'Meet the founders and leadership team behind Hexa and the Hexamatics Group, from finance and technology to operations and delivery.');

export default function LeadershipPage() {
  return (
    <>
      <PageHero eyebrow="Leadership" title="The people who lead Hexa."
        subline="Founder-led since 2002. Meet the people who run the business today." />
      <SeoBreadcrumbs items={[{ name: 'About Hexa', path: '/about' }, { name: 'Leadership', path: '/leadership' }]} />
      <section id="leadership" className="section scroll-mt-20">
        <div className="container-hexa">
          <SectionHeader eyebrow="Who we are" title="Founder-led since 2002. The people who run the business today." />
          <ul className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-5">
            {leadership.map((l) => (
              <li key={l.name}>
                <Image
                  src={l.photo}
                  alt={`Portrait of ${l.name}`}
                  width={510}
                  height={510}
                  className="w-full h-auto"
                />
                <h3 className="mt-4 font-bold">{l.name}</h3>
                <p className="mt-1 text-[15px] leading-snug">{l.role}</p>
                <p className="mt-2 text-muted text-[15px] leading-relaxed">{l.bio}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </>
  );
}
