type Tone = 'brand' | 'slate' | 'emerald' | 'amber' | 'success' | 'warning' | 'neutral';

const statToneClasses: Record<Extract<Tone, 'brand' | 'slate' | 'emerald' | 'amber'>, string> = {
  brand: 'bg-brand-50 text-brand-700',
  slate: 'bg-slate-100 text-slate-700',
  emerald: 'bg-emerald-50 text-emerald-700',
  amber: 'bg-amber-50 text-amber-700',
};

const statusToneClasses: Record<Extract<Tone, 'success' | 'warning' | 'brand' | 'neutral'>, string> = {
  success: 'bg-emerald-50 text-emerald-700',
  warning: 'bg-amber-50 text-amber-700',
  brand: 'bg-brand-50 text-brand-700',
  neutral: 'bg-slate-100 text-slate-600',
};

export function StatCard({
  label,
  value,
  change,
  tone,
}: {
  label: string;
  value: string;
  change: string;
  tone: 'brand' | 'slate' | 'emerald' | 'amber';
}) {
  return (
    <div className="card p-5">
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium text-slate-500">{label}</div>
        <div className={`rounded-full px-2 py-1 text-[11px] font-semibold ${statToneClasses[tone]}`}>{change}</div>
      </div>
      <div className="mt-5 text-3xl font-black tracking-tight text-slate-900">{value}</div>
    </div>
  );
}

export function StatusBadge({ label, tone }: { label: string; tone: 'success' | 'warning' | 'brand' | 'neutral' }) {
  return <span className={`status-pill ${statusToneClasses[tone]}`}>{label}</span>;
}

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{title}</h2>
    </div>
  );
}
