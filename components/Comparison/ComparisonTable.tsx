import type { ProductComparisonFeature } from '@/types/product';

interface ComparisonTableProps {
  features: ProductComparisonFeature[];
}

const tiers = [
  { id: 'standard', label: 'Standard', description: 'Giá cơ bản' },
  { id: 'pro', label: 'Pro', description: 'Phổ biến' },
  { id: 'premium', label: 'Premium', description: 'Cao cấp' },
] as const;

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ features }) => (
  <section id="comparison" className="section-padding py-24">
    <div className="mb-12 space-y-4 text-center">
      <p className="text-sm uppercase tracking-[0.5em] text-blue-500">Choose Your Tier</p>
      <h2 className="section-title">So sánh gói SmartFurn</h2>
      <p className="section-subtitle mx-auto">
        Chọn cấu hình phù hợp với không gian sống và nhu cầu công nghệ của bạn.
      </p>
    </div>
    <div className="overflow-hidden rounded-3xl border border-white/10">
      <table className="min-w-full divide-y divide-white/10">
        <thead className="bg-white/5 text-xs uppercase tracking-[0.4em] text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-4 text-left">Tính năng</th>
            {tiers.map((tier) => (
              <th
                key={tier.id}
                scope="col"
                className={`px-6 py-4 text-center ${tier.id === 'pro' ? 'bg-blue-500/20 text-white' : ''}`}
              >
                <div className="flex flex-col items-center gap-1">
                  <span>{tier.label}</span>
                  <span className="text-[10px] uppercase tracking-[0.5em] text-gray-400">{tier.description}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5 text-sm text-gray-200">
          {features.map((feature) => (
            <tr key={feature.label} className="backdrop-blur">
              <th scope="row" className="px-6 py-6 text-left text-white">
                {feature.label}
              </th>
              {tiers.map((tier) => (
                <td
                  key={tier.id}
                  className={`px-6 py-6 text-center ${tier.id === 'pro' ? 'bg-blue-500/10 text-white font-semibold' : ''}`}
                >
                  {typeof feature.values[tier.id] === 'boolean'
                    ? feature.values[tier.id]
                      ? '✓'
                      : '—'
                    : feature.values[tier.id]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);
