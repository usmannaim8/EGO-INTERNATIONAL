import { Plus, ShieldCheck, UserCog, UserRoundPlus, Users } from 'lucide-react';
import { StatusBadge, StatCard } from '@/components/shared';

const accountRows = [
  { name: 'Amina Idris', company: 'North Ridge Holdings', role: 'Operations Lead', status: 'Active', access: 'Full' },
  { name: 'Sami Haddad', company: 'Blue Harbor Group', role: 'Finance Manager', status: 'Pending', access: 'Restricted' },
  { name: 'Lina Okafor', company: 'Aster Logistics', role: 'Security Admin', status: 'Inactive', access: 'Full' },
];

export default function MasterManagerPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Master manager</p>
            <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-900">System administration</h1>
          </div>
          <button className="inline-flex items-center gap-2 rounded-xl bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white">
            <Plus className="h-4 w-4" /> Create account
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <StatCard label="Managed accounts" value="148" change="+11.3%" tone="brand" />
          <StatCard label="New requests" value="24" change="+5.1%" tone="slate" />
          <StatCard label="Active users" value="91.8%" change="+3.2%" tone="emerald" />
          <StatCard label="Failed logins" value="7" change="-2.1%" tone="amber" />
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="card p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-slate-500">Operations</div>
                <div className="text-2xl font-bold text-slate-900">Admin actions</div>
              </div>
              <UserCog className="h-5 w-5 text-brand-700" />
            </div>

            <div className="space-y-3">
              {[
                ['Create private-sector account', 'Issue new credentials and assignment boundaries', 'UserRoundPlus'],
                ['Assign roles & permissions', 'Configure access across management and operations teams', 'ShieldCheck'],
                ['Reset credentials', 'Trigger temporary password and verification process', 'Users'],
              ].map(([title, text, icon]) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                      {icon === 'UserRoundPlus' ? <UserRoundPlus className="h-4 w-4" /> : icon === 'ShieldCheck' ? <ShieldCheck className="h-4 w-4" /> : <Users className="h-4 w-4" />}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{title}</div>
                      <div className="text-sm text-slate-500">{text}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <div>
                <div className="text-sm font-medium text-slate-500">Access control</div>
                <div className="text-xl font-bold text-slate-900">Account management</div>
              </div>
              <button className="text-sm font-semibold text-brand-700">Review all</button>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-left">
                <thead className="bg-slate-50 text-xs uppercase tracking-[0.18em] text-slate-500">
                  <tr>
                    <th className="px-5 py-3">User</th>
                    <th className="px-5 py-3">Company</th>
                    <th className="px-5 py-3">Role</th>
                    <th className="px-5 py-3">Status</th>
                    <th className="px-5 py-3">Access</th>
                  </tr>
                </thead>
                <tbody>
                  {accountRows.map((row) => (
                    <tr key={row.name} className="border-t border-slate-200 text-sm text-slate-700">
                      <td className="px-5 py-4 font-medium text-slate-900">{row.name}</td>
                      <td className="px-5 py-4">{row.company}</td>
                      <td className="px-5 py-4">{row.role}</td>
                      <td className="px-5 py-4"><StatusBadge label={row.status} tone={row.status === 'Active' ? 'success' : row.status === 'Pending' ? 'warning' : 'brand'} /></td>
                      <td className="px-5 py-4">{row.access}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
