import React from 'react';
import { Shield, Leaf, Pill } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Third‑party Tested',
    desc: 'Every batch is verified for purity and potency by independent labs.',
  },
  {
    icon: Leaf,
    title: 'Clean Ingredients',
    desc: 'Non‑GMO, no artificial colors, and sweetened with real fruit.',
  },
  {
    icon: Pill,
    title: 'Easy to Take',
    desc: 'Great-tasting chewables and smooth softgels for everyday use.',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-slate-50 py-16 sm:py-20">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Better for your body</h2>
          <p className="mt-3 text-slate-600">Designed with care and backed by science so you feel the difference every day.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
