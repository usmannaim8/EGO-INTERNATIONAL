import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronRight,
  Globe,
  Lock,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

const stats = [
  { label: 'Active organizations', value: '184', detail: '+14.8% vs last quarter' },
  { label: 'Operational efficiency', value: '92.4%', detail: 'Based on KPI scorecards' },
  { label: 'Avg. response time', value: '26 min', detail: 'Across all teams' },
];

const features = [
  { icon: Building2, title: 'Private sector operations', text: 'Manage companies, user access, compliance workflows and operational oversight from one place.' },
  { icon: ShieldCheck, title: 'Security & assurance', text: 'Built-in access control, approval chains and activity tracking for sensitive business operations.' },
  { icon: BarChart3, title: 'Performance analytics', text: 'Turn operational data into executive-ready dashboards, trends and strategic recommendations.' },
];

const servicePillars = [
  'Portfolio oversight',
  'User provisioning',
  'Compliance reporting',
  'Stakeholder visibility',
  'Process automation',
  'Decision support',
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-700 text-lg font-bold text-white">E</div>
            <div>
              <div className="text-lg font-semibold tracking-tight text-slate-900">EGO International</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-slate-500">Management Platform</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <Link href="#platform">Platform</Link>
            <Link href="#solutions">Solutions</Link>
            <Link href="#insights">Insights</Link>
            <Link href="#contact">Contact</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/login" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-100">Log in</Link>
            <Link href="/dashboard" className="rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-800">Request demo</Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-[size:32px_32px] opacity-50" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
              <Sparkles className="h-3.5 w-3.5" />
              Private-sector command center
            </div>

            <h1 className="max-w-xl text-5xl font-black tracking-tight text-slate-900 xl:text-6xl">
              Professional management for modern private operations.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              EGO delivers a unified operating layer for private-sector organizations to oversee teams, approvals, compliance, performance and strategic execution in one clear framework.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/dashboard" className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-700/20 transition hover:bg-brand-800">
                Explore platform
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/login" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100">
                Sign in
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-600">
              {servicePillars.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="card overflow-hidden p-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-950 p-5 text-white">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Executive overview</p>
                    <h2 className="mt-2 text-2xl font-bold">Q4 Operating Pulse</h2>
                  </div>
                  <div className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-semibold text-emerald-300">+18.5%</div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Portfolio</div>
                    <div className="mt-3 text-3xl font-bold">$8.4M</div>
                    <div className="mt-1 text-xs text-emerald-300">+12.7% this month</div>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Users</div>
                    <div className="mt-3 text-3xl font-bold">1,286</div>
                    <div className="mt-1 text-xs text-sky-300">+84 onboarded</div>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Risk</div>
                    <div className="mt-3 text-3xl font-bold">Low</div>
                    <div className="mt-1 text-xs text-amber-300">2 controls pending</div>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-4">
                  <div className="mb-3 flex items-center justify-between text-sm text-slate-300">
                    <span>Operational trend</span>
                    <span className="text-emerald-300">Healthy</span>
                  </div>
                  <div className="flex h-24 items-end gap-2">
                    {[35, 44, 52, 48, 62, 68, 90].map((bar, index) => (
                      <div key={index} className="flex-1 rounded-t-lg bg-gradient-to-t from-brand-600 to-brand-400" style={{ height: `${bar}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Platform capabilities</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">Everything private-sector leadership needs to operate confidently.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card p-6">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="solutions" className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">Operational model</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight">A platform built for strategic visibility and fast action.</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {[
                ['Governance', 'Clear approvals, role-based access and quality controls across every process.'],
                ['Performance', 'Measure portfolio health, productivity and service levels in real time.'],
                ['Collaboration', 'Unify teams, stakeholders and business entities within shared workflows.'],
                ['Compliance', 'Track exceptions, policies and audit trails with complete accountability.'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-slate-700 bg-slate-800 p-5">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/15 text-brand-300">
                    <BriefcaseBusiness className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="insights" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={stat.label} className="card p-8">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-500">{stat.label}</span>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  {index === 0 ? <Building2 className="h-4 w-4" /> : index === 1 ? <TrendingUp className="h-4 w-4" /> : <Globe className="h-4 w-4" />}
                </div>
              </div>
              <div className="text-4xl font-black tracking-tight text-slate-900">{stat.value}</div>
              <div className="mt-2 text-sm text-slate-600">{stat.detail}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="card flex flex-col items-center justify-between gap-8 p-8 text-center md:flex-row md:text-left">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Ready to transform operations?</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Bring more structure, visibility and confidence to your business environment.</h2>
          </div>
          <Link href="/login" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800">
            Launch management portal
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <footer id="contact" className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-700 text-sm font-bold text-white">E</div>
            <div>
              <div className="font-semibold text-slate-900">EGO International</div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Private-sector platform</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-slate-600">
            <Link href="#platform">Platform</Link>
            <Link href="#solutions">Solutions</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/login">Login</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
