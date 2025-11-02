import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[540px] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/5EwoDiC2tChvmy4K/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-950/40 via-blue-900/20 to-blue-950/70" />
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="max-w-3xl text-white">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-wide ring-1 ring-white/20 backdrop-blur">
              New tastes in stock
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Vitamins that fit your lifestyle
            </h1>
            <p className="mt-4 text-base text-white/80 sm:text-lg">
              Choose from a range of targeted formulas and delicious flavors. Backed by science, crafted for daily wellness.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50"
              >
                Shop best-sellers
              </a>
              <a
                href="#benefits"
                className="inline-flex items-center justify-center rounded-md bg-transparent px-5 py-3 text-sm font-semibold text-white ring-1 ring-inset ring-white/60 transition hover:bg-white/10"
              >
                Why our vitamins
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
