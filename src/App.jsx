import React from 'react';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <ProductShowcase />
      <Benefits />
      <Testimonials />
      <footer className="border-t border-slate-200 py-8">
        <div className="container mx-auto px-6 lg:px-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Vitalis Vitamins. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#products" className="text-slate-600 hover:text-slate-900">Products</a>
            <a href="#benefits" className="text-slate-600 hover:text-slate-900">Benefits</a>
            <a href="#" className="text-slate-600 hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
