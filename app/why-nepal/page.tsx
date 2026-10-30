import { pageMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import { CheckList, CtaBand, PageHero, SectionHeader } from '@/components/blocks';
import { RETENTION } from '@/lib/site';

export const metadata: Metadata = pageMetadata('/why-nepal', 'Why Nepal: Talent, Cost and Risk, in Numbers | Hexa', 'Why Hexa runs its primary delivery centre in Kathmandu: sourced accountancy and engineering talent figures, a fully loaded cost comparison with Manila, Bangalore, Kuala Lumpur and Sydney, and the risks, including September 2025, faced directly.');

// Every figure on this page carries a source in `sources`. Re-check them each year:
// ICAN publishes its annual report after the Nepali fiscal year closes in mid-July,
// and the UGC publishes its EMIS higher education report about a year in arrears.
const sources = {
  ican: {
    label: 'ICAN Annual Report 2081/82 (fiscal year to mid-July 2025), Members and Students Highlights',
    href: 'https://en.ican.org.np/_browsable/file/resouces/81_82.pdf',
  },
  ugc: {
    label: 'University Grants Commission, Education Management Information System report 2023/24, Section 6 and Annex 5',
    href: 'https://giwmscdnone.gov.np/media/pdf_upload/EMIS%202023-24_mu8su0b.pdf',
  },
  acca: {
    label: 'Nepali Times, “Widening scope in accountancy”, 27 July 2018',
    href: 'https://nepalitimes.com/widening-scope-in-accountancy',
  },
  curfew: {
    label: 'PBS NewsHour, “Curfew lifted in Nepal as calm returns after deadly protests and new interim PM appointed”, 13 September 2025',
    href: 'https://www.pbs.org/newshour/world/curfew-lifted-in-nepal-as-calm-returns-after-deadly-protests-and-new-interim-pm-appointed',
  },
  election: {
    label: 'House of Commons Library, “Nepal: 2026 legislative election and future prospects”',
    href: 'https://commonslibrary.parliament.uk/research-briefings/cbp-10622/',
  },
  power: {
    label: 'The Kathmandu Post, “Nepal records Rs18.76 billion electricity trade surplus in fiscal 2025-26”, 24 July 2026',
    href: 'https://kathmandupost.com/money/2026/07/24/nepal-records-rs18-76-billion-electricity-trade-surplus-in-fiscal-2025-26',
  },
  peg: {
    label: 'The Kathmandu Post, “Is the peg to INR still a safe harbour?”, 26 February 2026',
    href: 'https://kathmandupost.com/columns/2026/02/26/is-the-peg-to-inr-still-a-safe-harbour',
  },
  nyc: {
    label: 'WIPO Lex, Nepal: Convention on the Recognition and Enforcement of Foreign Arbitral Awards (New York, 1958)',
    href: 'https://www.wipo.int/wipolex/es/treaties/parties/remarks/NP/973',
  },
  fibre: {
    label: 'The Kathmandu Post, “Nepal ends India’s internet monopoly with Chinese link”, 13 January 2018',
    href: 'https://kathmandupost.com/money/2018/01/13/nepal-ends-indias-internet-monopoly-with-chinese-link',
  },
} as const;

type SourceKey = keyof typeof sources;
const sourceOrder = Object.keys(sources) as SourceKey[];
const ref = (key: SourceKey) => sourceOrder.indexOf(key) + 1;

const talentStats: { figure: string; label: string; source: SourceKey }[] = [
  { figure: '9,623', label: 'ICAN members: 2,428 Chartered Accountants and 7,195 Registered Auditors', source: 'ican' },
  { figure: '14,019', label: 'Active ICAN Chartered Accountancy students', source: 'ican' },
  { figure: '1,666', label: 'New ICAN student enrolments in the year', source: 'ican' },
  { figure: '208', label: 'New Chartered Accountants registered in the year', source: 'ican' },
  { figure: '39,492', label: 'Management faculty graduates in one year, the pool our finance teams hire from', source: 'ugc' },
  { figure: '34,700+', label: 'Students enrolled on four-year computing degrees: BSc CSIT, BCA, BE Computer and Software, BIT', source: 'ugc' },
];

const talentNotes: { title: string; body: string; source?: SourceKey }[] = [
  {
    title: 'ACCA pipeline',
    body: 'ACCA is taught through accredited learning partners in Kathmandu, and our delivery centre is an ACCA Approved Employer. ACCA does not publish a Nepal-only count. The last public figure was 2,700 students and around 600 members, in 2018.',
    source: 'acca',
  },
  {
    title: 'Computing graduates each year',
    body: 'The UGC does not split graduate numbers by programme. Computing enrolment of more than 34,700 across four-year degrees means roughly 8,500 students in each year group, alongside 6,833 engineering and 10,477 science and technology graduates in 2023/24.',
    source: 'ugc',
  },
  {
    title: 'English-first written work',
    body: 'Business, accounting and engineering are studied and practised in English, so documentation, tickets and reports read the way you expect.',
  },
];

const overlap = [
  { market: 'Asia', fit: 'Strong overlap across the full working day.' },
  { market: 'Australia', fit: 'Strong overlap, with Kathmandu mornings meeting the Australian afternoon.' },
  { market: 'United Kingdom', fit: 'Morning overlap with the UK, so handover happens at the start of your day.' },
  { market: 'United States', fit: 'A defined handover model: work is briefed at your day’s end and returned by your next morning.' },
];

// Indicative bands from Hexa analysis, October 2026. Mid-level finance professional
// (three to six years, part or fully qualified), USD per year. Fully loaded means
// salary and bonus, statutory employer contributions, benefits, workspace, IT and
// supervision. Provider margin is excluded. Review against current salary guides
// and exchange rates before each annual update.
const costBands = [
  { city: 'Kathmandu', low: 11_000, high: 19_000 },
  { city: 'Bangalore', low: 15_000, high: 25_000 },
  { city: 'Manila', low: 17_000, high: 27_000 },
  { city: 'Kuala Lumpur', low: 26_000, high: 40_000 },
  { city: 'Sydney', low: 90_000, high: 120_000 },
];
const costScaleMax = 120_000;
const usd = (n: number) => `$${Math.round(n / 1000)}k`;

const risks: { title: string; body: string; sources?: SourceKey[] }[] = [
  {
    title: 'Political stability',
    body: 'We do not ask you to assume it. In September 2025 protests brought down the government. The constitutional process held: the President appointed an interim prime minister on 12 September, the curfew lifted on 13 September, and the election went ahead on the date set, 5 March 2026. One party won an outright majority, 182 of 275 seats, and a new cabinet took office on 27 March 2026.',
    sources: ['curfew', 'election'],
  },
  {
    title: 'Connectivity',
    body: 'Nepal reaches the internet over several fibre gateways into India and a separate route into China through Rasuwagadhi, live since January 2018. The September 2025 restriction blocked named social platforms, not internet access, and was reversed within days. At the centre, two independent networks fail over automatically.',
    sources: ['fibre'],
  },
  {
    title: 'Power',
    body: 'Nepal became a net exporter of electricity in fiscal 2024/25 and ran a trade surplus of Rs 18.76 billion in 2025/26. The dry winter months still need imports from India, which is why the centre runs its own backup power and does not depend on the grid.',
    sources: ['power'],
  },
  {
    title: 'FX and repatriation of fees',
    body: 'You are invoiced by Hexamatics Nepal, the company that employs the team and runs the centre, and pay by international bank transfer in your choice of currency, including US dollars, Australian dollars and Malaysian ringgit. Fees arrive as export earnings through Nepal’s regulated banking system, and nothing needs to leave Nepal for your work to be delivered: salaries and the centre are paid locally. Those local costs are in Nepalese rupees, pegged to the Indian rupee at 1.6 since 1993.',
    sources: ['peg'],
  },
  {
    title: 'Contract jurisdiction',
    body: 'You contract directly with Hexamatics Nepal, under Nepali law. There is no intermediary between your contract and the people doing the work, and Hexamatics Nepal answers to the same group governance as every Hexamatics company. Nepal has been party to the New York Convention on arbitral awards since 1998.',
    sources: ['nyc'],
  },
];

// What happened inside Hexa during September 2025. These are the facts a buyer will test.
const september2025 = [
  'September 2025 payroll paid on 29 September',
  'The team worked from home through September, with online check-in and working protocols set by each manager',
  'Every client deliverable and service level met that month: 100 percent',
  'No security incident and no data loss, with home working covered by our data loss prevention (DLP) system',
  'Clients briefed immediately, with our risk assessment, as soon as the risk was known',
];

const controls = [
  'ISO 27001 certified information security',
  'Dual-network failover and backup power at the delivery centre',
  'Work happens inside your systems, under your access controls',
  'A continuity record through periods of disruption across several markets',
];

if (
  process.env.VERCEL_ENV === 'production' &&
  [...risks.map((r) => r.body), ...september2025].some((text) => text.includes('[CONFIRM'))
) {
  throw new Error('Why Nepal still has unconfirmed facts marked [CONFIRM]. Fill them in before a production deploy.');
}

function SourceRefs({ keys }: { keys: SourceKey[] }) {
  return (
    <>
      {keys.map((key) => (
        <sup key={key} className="ml-0.5">
          <a href={`#source-${ref(key)}`} className="text-hexa-magenta font-semibold">
            [{ref(key)}]
          </a>
        </sup>
      ))}
    </>
  );
}

export default function WhyNepalPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Nepal"
        title="A talent decision, not a cost decision."
        subline="Kathmandu is our primary delivery centre. Here are the numbers behind that choice, the cost against other centres, and the risks, faced directly."
        primary={{ label: 'Book a call', href: '/call' }}
        secondary={{ label: 'Visit the centre', href: '/call#proposal' }}
      />

      <section className="section">
        <div className="container-hexa">
          <SectionHeader
            eyebrow="Talent depth"
            title="People trained for the work you need done."
            intro="A regulated accountancy profession, a large business graduate base and a growing computing pipeline. Figures are from the latest published reports."
          />
          <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {talentStats.map((s) => (
              <div key={s.label} className="card p-6">
                <dt className="sr-only">{s.label}</dt>
                <dd className="gradient-text text-4xl font-bold tracking-tight">{s.figure}</dd>
                <dd className="mt-2 text-muted leading-snug">
                  {s.label}
                  <SourceRefs keys={[s.source]} />
                </dd>
              </div>
            ))}
          </dl>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {talentNotes.map((t) => (
              <li key={t.title} className="card p-7">
                <h3 className="text-lg font-bold">{t.title}</h3>
                <p className="mt-3 text-muted leading-relaxed">
                  {t.body}
                  {t.source && <SourceRefs keys={[t.source]} />}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-hexa-soft">
        <div className="container-hexa">
          <SectionHeader
            eyebrow="Cost"
            title="Fully loaded cost per finance FTE, by centre."
            intro="Indicative annual cost in US dollars for a mid-level finance professional with three to six years’ experience. Fully loaded means salary and bonus, statutory employer contributions, benefits, workspace, IT and supervision. Provider margin is excluded."
          />
          <div className="card p-6 sm:p-8">
            <table className="w-full text-left">
              <caption className="sr-only">Indicative fully loaded annual cost per finance FTE in US dollars</caption>
              <thead>
                <tr className="text-sm text-muted">
                  <th scope="col" className="pb-4 font-semibold w-32">Centre</th>
                  <th scope="col" className="pb-4 font-semibold w-36">Annual band</th>
                  <th scope="col" className="pb-4 font-semibold hidden sm:table-cell">
                    <span className="sr-only">Band on a common scale</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {costBands.map((b) => (
                  <tr key={b.city} className="border-t border-black/5">
                    <th scope="row" className={`py-4 pr-4 ${b.city === 'Kathmandu' ? 'font-bold' : 'font-semibold'}`}>
                      {b.city}
                    </th>
                    <td className="py-4 pr-4 tabular-nums whitespace-nowrap">
                      {usd(b.low)} to {usd(b.high)}
                    </td>
                    <td className="py-4 hidden sm:table-cell" aria-hidden>
                      <div className="relative h-2 rounded-full bg-black/5">
                        <div
                          className="absolute inset-y-0 rounded-full bg-hexa-magenta"
                          style={{
                            left: `${(b.low / costScaleMax) * 100}%`,
                            width: `${((b.high - b.low) / costScaleMax) * 100}%`,
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-6 text-sm text-muted leading-relaxed">
              Hexa analysis, October 2026, from published salary guides, statutory contribution rates and local workspace
              costs, converted at prevailing exchange rates. These are market costs of employing someone, not Hexa prices.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-hexa">
          <SectionHeader
            eyebrow="Risk, faced directly"
            title="The questions every serious buyer asks."
            intro="Here is what we would want to know in your position, answered with the record."
          />
          <ul className="grid gap-5 md:grid-cols-2">
            {risks.map((r) => (
              <li key={r.title} className="card p-7">
                <h3 className="text-lg font-bold">{r.title}</h3>
                <p className="mt-3 text-muted leading-relaxed">
                  {r.body}
                  {r.sources && <SourceRefs keys={r.sources} />}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-dark py-20 md:py-24">
        <div className="container-hexa grid gap-12 lg:grid-cols-2">
          <SectionHeader
            eyebrow="September 2025"
            title="Our best continuity proof is the month it was tested."
            intro="Kathmandu was under curfew from 8 to 13 September 2025. This is what happened to client work and to our people."
          />
          <div className="lg:pt-10">
            <CheckList items={september2025} dark />
          </div>
        </div>
      </section>

      <section className="section bg-hexa-soft">
        <div className="container-hexa">
          <SectionHeader
            eyebrow="Working-day overlap"
            title="Time zones that work for your week."
            intro="Kathmandu is on UTC+5:45."
          />
          <dl className="grid gap-4 sm:grid-cols-2">
            {overlap.map((o) => (
              <div key={o.market} className="card p-6">
                <dt className="font-bold text-lg">{o.market}</dt>
                <dd className="mt-2 text-muted leading-relaxed">{o.fit}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="container-hexa grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Retention"
              title={`${RETENTION} team retention.`}
              intro="Saturated offshore markets lose people to the next offer. In Kathmandu, people build long careers with us, so knowledge of your work stays with your work."
            />
          </div>
          <div>
            <SectionHeader eyebrow="Controls and continuity" title="Run to the same controls as anywhere else." />
            <CheckList items={controls} />
          </div>
        </div>
      </section>

      <section className="section bg-hexa-soft">
        <div className="container-hexa">
          <SectionHeader
            eyebrow="Group backing"
            title="Inside Hexamatics group governance."
            intro="Delivery in Nepal runs under the same group governance, policies and oversight as Hexamatics operations across Malaysia, Singapore, Indonesia and the Philippines."
          />
          <h2 className="eyebrow mb-4">Sources</h2>
          <ol className="space-y-2 text-sm text-muted">
            {sourceOrder.map((key, i) => (
              <li key={key} id={`source-${i + 1}`}>
                [{i + 1}]{' '}
                <a href={sources[key].href} target="_blank" rel="noopener noreferrer" className="underline hover:text-hexa-magenta">
                  {sources[key].label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        title="See the centre for yourself."
        body="Visit our delivery centre in Kathmandu, or start with a call."
        primary={{ label: 'Book a call', href: '/call' }}
        secondary={{ label: 'Plan a visit', href: '/call#proposal' }}
      />
    </>
  );
}
