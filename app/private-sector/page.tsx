import { Activity, ArrowUpRight, Building2, FileText, Radar, Settings, Users } from 'lucide-react';
import { StatusBadge, StatCard } from '@/components/shared';

const orgs = [
  { name: 'North Ridge Holdings', region: 'West Africa', users: 148, activity: '92% productivity', status: 'Active' },
  { name: 'Aster Logistics', region: 'North Africa', users: 84, activity: '88% productivity', status: 'Active' },
  { name: 'Summit Realty', region: 'Gulf Region', users: 64, activity: '72% productivity', status: 'Review' },
];

const records = [
  { id: 'PR-4012', title: 'Portfolio review', owner: 'M. Bensouda', date: '18 Jun 2026', status: 'Approved' },
  { id: 'PR-4016', title: 'Security assurance checklist', owner: 'A. Idris', date: '17 Jun 2026', status: 'Pending' },
  { id: 'PR-4020', title: 'Annual operating forecast', owner: 'J. Okafor', date: '15 Jun 2026', status: 'Draft' },
];

export default function PrivateSectorPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Private sector</p>
            <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-900">Operations management</h1>
          </div>
          <button className="rounded-xl bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white">Create organization</button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <StatCard label="Organizations" value="184" change="+14.8%" tone="brand" />
          <StatCard label="Active users" value="1,286" change="+8.4%" tone="slate" />
          <StatCard label="Reports" value="62" change="+11.2%" tone="emerald" />
          <StatCard label="Alerts" value="12" change="-3.5%" tone="amber" />
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="card p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-slate-500">Organizations</div>
                <div className="text-2xl font-bold text-slate-900">Portfolio overview</div>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                <Building2 className="h-4 w-4" />
              </div>
            </div>

            <div className="space-y-4">
              {orgs.map((item) => (
                <div key={item.name} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div>
                    <div className="font-semibold text-slate-900">{item.name}</div>
                    <div className="mt-1 text-sm text-slate-500">{item.region}</div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Users</div>
                      <div className="font-semibold text-slate-800">{item.users}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Productivity</div>
                      <div className="font-semibold text-slate-800">{item.activity}</div>
                    </div>
                    <StatusBadge label={item.status} tone={item.status === 'Active' ? 'success' : 'warning'} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-slate-500">Insights</div>
                <div className="text-2xl font-bold text-slate-900">Operational score</div>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Radar className="h-4 w-4" />
              </div>
            </div>

            <div className="space-y-4">
              {[
                ['Compliance', 94],
                ['Service quality', 88],
                ['Portfolio health', 91],
                ['Efficiency', 86],
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="text-slate-600">{label}</span>
                    <span className="font-semibold text-slate-800">{value}%</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
                    <div className="h-full rounded-full bg-gradient-to-r from-brand-600 to-brand-400" style={{ width: `${value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="card overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <div>
                <div className="text-sm font-medium text-slate-500">Records and data</div>
                <div className="text-xl font-bold text-slate-900">Latest management records</div>
              </div>
              <button className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">Export</button>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-left">
                <thead className="bg-slate-50 text-xs uppercase tracking-[0.18em] text-slate-500">
                  <tr>
                    <th className="px-5 py-3">Record ID</th>
                    <th className="px-5 py-3">Title</th>
                    <th className="px-5 py-3">Owner</th>
                    <th className="px-5 py-3">Date</th>
                    <th className="px-5 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((row) => (
                    <tr key={row.id} className="border-t border-slate-200 text-sm text-slate-700">
                      <td className="px-5 py-4 font-semibold text-slate-900">{row.id}</td>
                      <td className="px-5 py-4">{row.title}</td>
                      <td className="px-5 py-4">{row.owner}</td>
                      <td className="px-5 py-4">{row.date}</td>
                      <td className="px-5 py-4"><StatusBadge label={row.status} tone={row.status === 'Approved' ? 'success' : row.status === 'Pending' ? 'warning' : 'brand'} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-slate-500">Activity stream</div>
                  <div className="text-xl font-bold text-slate-900">Recent actions</div>
                </div>
                <Activity className="h-5 w-5 text-brand-600" />
              </div>
              <div className="space-y-3">
                {[
                  'Quarterly report generated',
                  'User access updated for Aster Logistics',
                  'Portfolio review approved by leadership',
                ].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm">
                    <span>{item}</span>
                    <ArrowUpRight className="h-4 w-4 text-brand-700" />
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-slate-500">Settings</div>
                  <div className="text-xl font-bold text-slate-900">Workspace controls</div>
                </div>
                <Settings className="h-5 w-5 text-brand-600" />
              </div>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-center justify-between rounded-xl border border-slate-200 p-3">
                  <span className="flex items-center gap-2"><Users className="h-4 w-4" /> Roles</span>
                  <span className="font-semibold text-slate-800">9 defined</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-slate-200 p-3">
                  <span className="flex items-center gap-2"><FileText className="h-4 w-4" /> Reports</span>
                  <span className="font-semibold text-slate-800">24 templates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
