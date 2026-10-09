import { Filter, Plus, Search, UserRoundCheck, UserRoundX } from 'lucide-react';
import { StatusBadge, StatCard } from '@/components/shared';

const users = [
  { id: 'USR-1042', name: 'Amina Idris', role: 'Operations Lead', company: 'North Ridge Holdings', status: 'Active', lastLogin: '2h ago' },
  { id: 'USR-1187', name: 'Nabil Saleh', role: 'Project Manager', company: 'Summit Realty', status: 'Inactive', lastLogin: '4d ago' },
  { id: 'USR-2048', name: 'Celine Haddad', role: 'Finance Admin', company: 'Aster Logistics', status: 'Active', lastLogin: '12h ago' },
  { id: 'USR-2309', name: 'Yassine Rami', role: 'Security Lead', company: 'Blue Harbor Group', status: 'Pending', lastLogin: '1d ago' },
];

export default function UserManagementPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">User management</p>
            <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-900">Users & access control</h1>
          </div>
          <button className="inline-flex items-center gap-2 rounded-xl bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white">
            <Plus className="h-4 w-4" /> Add user
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <StatCard label="Total users" value="1,286" change="+8.4%" tone="brand" />
          <StatCard label="Active" value="1,089" change="+7.6%" tone="emerald" />
          <StatCard label="Pending" value="118" change="+3.1%" tone="amber" />
          <StatCard label="Inactive" value="79" change="-1.9%" tone="slate" />
        </div>

        <div className="mt-6 card overflow-hidden">
          <div className="flex flex-col gap-4 border-b border-slate-200 p-5 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full max-w-md">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input placeholder="Search user, role or company" className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-brand-400 focus:bg-white" />
            </div>

            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
                <Filter className="h-4 w-4" /> Filters
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
                <UserRoundCheck className="h-4 w-4" /> Active only
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="bg-slate-50 text-xs uppercase tracking-[0.18em] text-slate-500">
                <tr>
                  <th className="px-5 py-3">User</th>
                  <th className="px-5 py-3">Role</th>
                  <th className="px-5 py-3">Company</th>
                  <th className="px-5 py-3">Status</th>
                  <th className="px-5 py-3">Last login</th>
                  <th className="px-5 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-t border-slate-200 text-sm text-slate-700">
                    <td className="px-5 py-4">
                      <div className="font-medium text-slate-900">{user.name}</div>
                      <div className="text-xs text-slate-500">{user.id}</div>
                    </td>
                    <td className="px-5 py-4">{user.role}</td>
                    <td className="px-5 py-4">{user.company}</td>
                    <td className="px-5 py-4"><StatusBadge label={user.status} tone={user.status === 'Active' ? 'success' : user.status === 'Pending' ? 'warning' : 'brand'} /></td>
                    <td className="px-5 py-4">{user.lastLogin}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <button className="rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs font-medium text-slate-700">Edit</button>
                        <button className="text-xs font-medium text-brand-700">Reset</button>
                        {user.status === 'Active' ? <UserRoundX className="h-4 w-4 text-slate-500" /> : <UserRoundCheck className="h-4 w-4 text-emerald-600" />}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
