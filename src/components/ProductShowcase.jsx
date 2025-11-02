import React from 'react';
import { Pill, Star } from 'lucide-react';

const products = [
  {
    id: 'daily-multi',
    name: 'Daily Multivitamin',
    flavor: 'Citrus Burst',
    description: 'Complete daily support with 23 essential nutrients.',
    rating: 4.8,
    tag: 'Most Popular',
    color: 'from-orange-400 to-amber-500',
  },
  {
    id: 'immune-plus',
    name: 'Immune+ Vitamin C',
    flavor: 'Berry Splash',
    description: 'High-potency Vitamin C with zinc for year-round defense.',
    rating: 4.7,
    tag: 'New Flavor',
    color: 'from-pink-500 to-fuchsia-600',
  },
  {
    id: 'focus-b-complex',
    name: 'Focus B-Complex',
    flavor: 'Green Apple',
    description: 'Sustained energy and focus without the jitters.',
    rating: 4.6,
    tag: 'Staff Pick',
    color: 'from-emerald-400 to-green-600',
  },
  {
    id: 'omega-3',
    name: 'Omega-3 Softgels',
    flavor: 'Vanilla Smooth',
    description: 'Ultra-pure fish oil for heart, brain, and joints.',
    rating: 4.9,
    tag: 'Premium',
    color: 'from-blue-400 to-indigo-600',
  },
];

function Rating({ value }) {
  const fullStars = Math.floor(value);
  const half = value - fullStars >= 0.5;
  return (
    <div className="flex items-center gap-1 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < fullStars ? 'fill-current' : half && i === fullStars ? 'fill-current opacity-60' : 'opacity-30'}`} />
      ))}
      <span className="ml-1 text-xs text-slate-500">{value.toFixed(1)}</span>
    </div>
  );
}

export default function ProductShowcase() {
  return (
    <section id="products" className="relative bg-white py-16 sm:py-20">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Find your flavor</h2>
          <p className="mt-3 text-slate-600">Different goals, different tastes. Pick the formula and flavor that you’ll actually look forward to.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div key={p.id} className="group relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-lg">
              <div className={`absolute -top-3 right-3 rounded-full bg-gradient-to-r ${p.color} px-3 py-1 text-xs font-semibold text-white shadow-sm`}>{p.tag}</div>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50 text-blue-700">
                <Pill className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
              <p className="mt-1 text-sm font-medium text-blue-700">Flavor: {p.flavor}</p>
              <p className="mt-2 text-sm text-slate-600">{p.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <Rating value={p.rating} />
                <button className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
