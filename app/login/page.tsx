'use client';

import Link from 'next/link';
import { Eye, EyeOff, Lock, Mail, ShieldCheck, Sparkles } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget as HTMLFormElement);
    const email = String(form.get('email') ?? '');
    const password = String(form.get('password') ?? '');

    if (!email || !password) {
      setSuccess('');
      setError('Please enter both email and password.');
      return;
    }

    if (password.length < 8) {
      setSuccess('');
      setError('Password must contain at least 8 characters.');
      return;
    }

    setError('');
    setSuccess('Login credentials validated. Redirecting to your secure workspace...');
  };

  return (
    <main className="flex min-h-screen bg-slate-100">
      <div className="hidden w-[42%] flex-col justify-between bg-slate-950 p-10 text-white lg:flex">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-lg font-bold text-white">E</div>
            <div>
              <div className="text-xl font-semibold">EGO International</div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-slate-400">Private Sector Portal</div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs uppercase tracking-[0.2em] text-brand-300">
            <Sparkles className="h-3.5 w-3.5" /> Secure workspace
          </div>

          <h1 className="max-w-md text-4xl font-black leading-tight tracking-tight">
            Confidence, clarity and control for your operating environment.
          </h1>

          <p className="max-w-md text-slate-300">
            Unified oversight for staff, organizations, approvals and performance metrics across private-sector operations.
          </p>

          <div className="grid gap-4 pt-6">
            {[
              'Role-based access and approval routing',
              'Operational dashboards and KPI visibility',
              'Secure activity audit and user monitoring',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/80 p-3 text-sm text-slate-200">
                <ShieldCheck className="h-4 w-4 text-brand-400" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="text-sm text-slate-400">© 2026 EGO International. Protected workspace</div>
      </div>

      <div className="flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-md rounded-[28px] border border-slate-200 bg-white p-7 shadow-soft">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Welcome back</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">Sign in</h2>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
              <Lock className="h-5 w-5" />
            </div>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Email address</label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@eago.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-3 text-sm outline-none transition focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100"
                />
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium text-slate-700">Password</label>
                <Link href="/" className="text-xs font-medium text-brand-700 hover:text-brand-800">Forgot password?</Link>
              </div>

              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-10 text-sm outline-none transition focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-slate-700"
                  onClick={() => setShowPassword((value) => !value)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 text-sm text-slate-600">
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={() => setRemember((value) => !value)}
                  className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                />
                Remember me
              </label>

              <div className="flex items-center gap-2 text-brand-700">
                <ShieldCheck className="h-4 w-4" />
                Secure login
              </div>
            </div>

            {error ? <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</div> : null}
            {success ? <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">{success}</div> : null}

            <button type="submit" className="w-full rounded-xl bg-brand-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-800">
              Sign in
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-slate-500">
            Need access? <Link href="/" className="font-semibold text-brand-700">Contact your administrator</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
