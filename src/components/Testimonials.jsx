import React from 'react';
import { Star } from 'lucide-react';

const quotes = [
  {
    name: 'Ava R.',
    text: 'The Berry Splash immune vitamins taste amazing. I actually remember to take them!',
  },
  {
    name: 'Marco D.',
    text: 'Energy without the crash. The B-Complex has been a game changer for busy days.',
  },
  {
    name: 'Priya S.',
    text: 'Clean ingredients and noticeable results. Love the Citrus Burst flavor!',
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-white py-16 sm:py-20">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Loved by customers</h2>
          <p className="mt-3 text-slate-600">Real stories from people who made their wellness routine simple—and tasty.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-slate-700">“{q.text}”</blockquote>
              <figcaption className="mt-3 text-sm font-semibold text-slate-900">{q.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
