import { Activity, Bell, Briefcase, ChevronDown, Search, Settings, Users } from 'lucide-react';
import Link from 'next/link';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { StatCard, StatusBadge } from '@/components/shared';

const chartData = [
  { name: 'Jan', value: 40 },
  { name: 'Feb', value: 62 },
  { name: 'Mar', value: 58 },
  { name: 'Apr', value: 78 },
  { name: 'May', value: 69 },
  { name: 'Jun', value: 92 },
  { name: 'Jul', value: 88 },
];

const activity = [
  { title: 'New private-sector license issued', time: '18 minutes ago', detail: 'North Ridge Holdings', status: 'Approved' },
  { title: 'Password reset completed', time: '1 hour ago', detail: 'Amina Idris', status: 'Completed' },
  { title: 'Quarterly report generated', time: '2 hours ago', detail: 'Operations review', status: 'Queued' },
];

const tableRows = [
  { company: 'North Ridge Holdings', owner: 'M. Bensouda', health: 'Healthy', value: '$1.2M', users: 42 },
  { company: 'Aster Logistics', owner: 'L. Okafor', health: 'Watchlist', value: '$860K', users: 28 },
  { company: 'Blue Harbor Group', owner: 'R. Haddad', health: 'Healthy', value: '$2.4M', users: 63 },
  { company: 'Summit Realty', owner: 'N. Yusuf', health: 'Review', value: '$640K', users: 19 },
];

const navItems = [
  { label: 'Overview', icon: Activity, active: true },
  { label: 'Private Sector', icon: Briefcase },
  { label: 'Users', icon: Users },
  { label: 'Reports', icon: Bell },
  { label: 'Settings', icon: Settings },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 border-r border-slate-200 bg-slate-950 p-5 text-slate-200 lg:block">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-lg font-bold text-white">E</div>
            <div>
              <div className="font-semibold text-white">EGO</div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-slate-400">Executive Suite</div>
            </div>
          </div>

          <div className="space-y-2">
            {navItems.map(({ label, icon: Icon, active }) => (
              <Link href="/dashboard" key={label} className={`sidebar-link ${active ? 'bg-slate-800 text-white' : ''}`}>
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-4">
            <div className="mb-3 text-xs uppercase tracking-[0.24em] text-slate-400">System health</div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">API uptime</span>
                <span className="font-semibold text-emerald-400">99.98%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Queue status</span>
                <span className="font-semibold text-amber-300">Stable</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Security</span>
                <span className="font-semibold text-emerald-400">Protected</span>
              </div>
            </div>
          </div>
        </aside>

        <div className="flex-1">
          <header className="border-b border-slate-200 bg-white">
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center gap-3">
                <button className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 lg:hidden">Menu</button>
                <div className="relative w-[360px] max-w-full">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    placeholder="Search organizations, users or reports"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-3 text-sm outline-none transition focus:border-brand-400 focus:bg-white"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button className="relative rounded-xl border border-slate-200 bg-slate-50 p-2 text-slate-600">
                  <Bell className="h-4 w-4" />
                  <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-brand-500" />
                </button>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 font-semibold text-brand-700">MN</div>
                  <div className="hidden sm:block">
                    <div className="text-sm font-semibold text-slate-900">Moussa Naim</div>
                    <div className="text-xs text-slate-500">Master Manager</div>
                  </div>
                  <ChevronDown className="h-4 w-4 text-slate-500" />
                </div>
              </div>
            </div>
          </header>

          <main className="p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Overview</p>
                <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Management dashboard</h1>
              </div>
              <Link href="/private-sector" className="rounded-xl bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-800">View private sector</Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <StatCard label="Organizations" value="184" change="+14.8%" tone="brand" />
              <StatCard label="Users" value="1,286" change="+8.4%" tone="slate" />
              <StatCard label="Active records" value="92.4K" change="+26.1%" tone="emerald" />
              <StatCard label="Risk alerts" value="12" change="-3.5%" tone="amber" />
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_0.9fr]">
              <div className="card p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-slate-500">Portfolio performance</div>
                    <div className="text-2xl font-bold text-slate-900">Operational trend</div>
                  </div>
                  <StatusBadge label="Healthy" tone="success" />
                </div>

                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="trendFill" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#3f7de2" stopOpacity={0.35} />
                          <stop offset="100%" stopColor="#3f7de2" stopOpacity={0.02} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="name" stroke="#94a3b8" tickLine={false} axisLine={false} />
                      <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
                      <Tooltip />
                      <Area type="monotone" dataKey="value" stroke="#3f7de2" strokeWidth={3} fill="url(#trendFill)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="space-y-6">
                <div className="card p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="text-sm font-medium text-slate-500">Recent activity</div>
                    <button className="text-xs font-semibold text-brand-700">See all</button>
                  </div>
                  <div className="space-y-4">
                    {activity.map((item) => (
                      <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="font-medium text-slate-800">{item.title}</div>
                            <div className="mt-1 text-xs text-slate-500">{item.detail}</div>
                          </div>
                          <StatusBadge label={item.status} tone={item.status === 'Approved' ? 'success' : item.status === 'Completed' ? 'brand' : 'warning'} />
                        </div>
                        <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-slate-400">{item.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 card overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                <div>
                  <div className="text-sm font-medium text-slate-500">Private sector overview</div>
                  <div className="text-xl font-bold text-slate-900">Organization portfolio</div>
                </div>
                <Link href="/users" className="text-sm font-semibold text-brand-700">Manage users</Link>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full text-left">
                  <thead className="bg-slate-50 text-xs uppercase tracking-[0.18em] text-slate-500">
                    <tr>
                      <th className="px-5 py-3">Company</th>
                      <th className="px-5 py-3">Owner</th>
                      <th className="px-5 py-3">Health</th>
                      <th className="px-5 py-3">Portfolio value</th>
                      <th className="px-5 py-3">Users</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableRows.map((row) => (
                      <tr key={row.company} className="border-t border-slate-200 text-sm text-slate-700">
                        <td className="px-5 py-4 font-medium text-slate-900">{row.company}</td>
                        <td className="px-5 py-4">{row.owner}</td>
                        <td className="px-5 py-4"><StatusBadge label={row.health} tone={row.health === 'Healthy' ? 'success' : row.health === 'Watchlist' ? 'warning' : 'brand'} /></td>
                        <td className="px-5 py-4">{row.value}</td>
                        <td className="px-5 py-4">{row.users}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
