const depthMarkets = [
  {
    name: 'Malaysia',
    regulators: 'LHDN · SSM',
    filings: 'SST, CP204, Form E and EA, EPF, SOCSO, EIS',
    standard: 'MFRS and MPERS reporting',
  },
  {
    name: 'Singapore',
    regulators: 'ACRA · IRAS',
    filings: 'GST, Form C-S, CPF, IR8A, XBRL filing',
    standard: 'SFRS reporting',
  },
  {
    name: 'Australia',
    regulators: 'ATO · ASIC',
    filings: 'BAS, IAS, PAYG withholding, superannuation guarantee, Single Touch Payroll',
    standard: 'AASB reporting',
  },
  {
    name: 'Indonesia',
    regulators: 'DJP',
    filings: 'PPh 21, 23 and 25, PPN, e-Faktur, BPJS',
    standard: 'PSAK reporting',
  },
];

const alsoSupported = ['Myanmar', 'Bangladesh', 'United Kingdom', 'United States', 'Canada'];

export default function MarketsContent() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#080818] text-white py-24 lg:py-28">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#E6007E] text-xs font-semibold uppercase tracking-[.16em] mb-6">Depth, not a country list</p>
          <h1 className="text-4xl sm:text-5xl leading-[1.05] font-semibold mb-6">Four markets we work in every day.</h1>
          <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
            We handle the statutory calendar, the filings, and the reporting standard in each. Other
            jurisdictions are supported on request through the wider group.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {depthMarkets.map((market) => (
              <div key={market.name} className="border border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{market.name}</h3>
                <p className="text-xs font-semibold text-[#E6007E] tracking-wide mb-3">{market.regulators}</p>
                <p className="text-sm text-gray-600 mb-2">{market.filings}</p>
                <p className="text-sm text-gray-500">{market.standard}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-gray-600">
            Also supported on request:{' '}
            <span className="text-gray-900 font-medium">{alsoSupported.join(', ')}</span>, and more.
          </p>
        </div>
      </section>
    </>
  );
}
