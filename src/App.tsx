/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Location } from './components/Location';
import { Schedule } from './components/Schedule';
import { Gallery } from './components/Gallery';
import { FormRegistration } from './components/FormRegistration';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth">
      <Header />
      <main>
        <Hero />
        <About />
        <Location />
        <Schedule />
        <Gallery />
        <FormRegistration />
      </main>
      <Footer />
    </div>
  );
}
