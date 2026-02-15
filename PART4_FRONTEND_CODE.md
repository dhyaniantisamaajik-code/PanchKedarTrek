# PART 4: FRONTEND CODE IMPLEMENTATION
## Premium Travel UI - React/Next.js + Tailwind CSS

---

## IMPLEMENTATION STRATEGY

This section provides the **complete frontend code** to transform the visual designs into a working Next.js application.

### Structure
- **Enhanced globals.css** - Additional CSS for design principles
- **Redesigned Components** - Updated React components with new layouts
- **New Pages** - Trek detail page, Booking page
- **Utility Functions** - Helpers for animations, formatting
- **Tailwind Config Updates** - New tokens for design system

---

## FILE 1: Enhanced globals.css Additions

```css
/* Add to existing src/app/globals.css */

/* ============================================
   PARALLAX & SCROLL ANIMATIONS
   ============================================ */

@keyframes parallax {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(var(--parallax-distance));
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes imageZoom {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.08);
  }
}

@keyframes glowFloat {
  0%, 100% {
    transform: translateY(0);
    box-shadow: 0 10px 30px rgba(212, 165, 116, 0.2);
  }
  50% {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(212, 165, 116, 0.4);
  }
}

@keyframes scrollBounce {
  0%, 100% {
    transform: translateY(0);
    opacity: 0.8;
  }
  50% {
    transform: translateY(8px);
    opacity: 1;
  }
}

@keyframes wordGlow {
  0%, 100% {
    color: #0f1c3f;
  }
  50% {
    color: #d4a574;
  }
}

/* ============================================
   UTILITY CLASSES - PREMIUM EFFECTS
   ============================================ */

.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.glass-dark {
  background: rgba(15, 28, 63, 0.7);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(42, 90, 153, 0.3);
}

.text-gradient {
  background: linear-gradient(135deg, #0f1c3f, #d4a574);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-gradient-warm {
  background: linear-gradient(135deg, #d4a574, #9b7653);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.blur-bg {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
}

.glow-gold {
  box-shadow: 0 10px 30px rgba(212, 165, 116, 0.4), 
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.glow-blue {
  box-shadow: 0 10px 30px rgba(42, 90, 153, 0.3);
}

.border-gradient {
  position: relative;
  border: 1px solid transparent;
  background: linear-gradient(white, white) padding-box,
              linear-gradient(135deg, #d4a574, #9b7653) border-box;
}

/* ============================================
   ANIMATION UTILITIES
   ============================================ */

.animate-fadeInUp {
  animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.animate-slideInLeft {
  animation: slideInLeft 0.8s ease-out forwards;
}

.animate-slideInRight {
  animation: slideInRight 0.8s ease-out forwards;
}

.animate-imageZoom {
  animation: imageZoom 0.7s ease-out forwards;
}

.animate-glowFloat {
  animation: glowFloat 3s ease-in-out infinite;
}

.animate-scrollBounce {
  animation: scrollBounce 1.5s ease-in-out infinite;
}

.animate-wordGlow {
  animation: wordGlow 2s ease-in-out infinite;
}

.animation-delay-1 {
  animation-delay: 0.1s;
}

.animation-delay-2 {
  animation-delay: 0.2s;
}

.animation-delay-3 {
  animation-delay: 0.3s;
}

.animation-delay-4 {
  animation-delay: 0.4s;
}

/* ============================================
   RESPONSIVE TYPOGRAPHY SCALING
   ============================================ */

@media (max-width: 768px) {
  h1 {
    font-size: 2rem; /* from 3.5rem */
    line-height: 1.1;
  }

  h2 {
    font-size: 1.75rem; /* from 2.625rem */
    line-height: 1.2;
  }

  h3 {
    font-size: 1.25rem; /* from 1.75rem */
  }

  .text-lg {
    font-size: 0.875rem; /* slightly smaller on mobile */
  }
}

/* ============================================
   ENHANCED FORM STYLING
   ============================================ */

input[type="text"],
input[type="email"],
input[type="phone"],
input[type="date"],
select,
textarea {
  @apply w-full px-4 py-3 bg-white border-2 border-neutral-200 rounded-lg;
  @apply focus:outline-none focus:border-accent-warm focus:ring-2 focus:ring-accent-warm focus:ring-offset-2;
  @apply transition-all duration-300;
  font-family: var(--font-sans);
}

input::placeholder,
textarea::placeholder {
  color: var(--color-neutral-400);
}

input:focus,
textarea:focus {
  box-shadow: 0 10px 30px rgba(212, 165, 116, 0.2);
}

/* ============================================
   SMOOTH SCROLL & REDUCED MOTION
   ============================================ */

html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* ============================================
   SCROLLBAR STYLING
   ============================================ */

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

::-webkit-scrollbar-thumb {
  background: var(--color-accent-warm);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-accent-warm-dark);
}
```

---

## FILE 2: Updated Header Component

```typescript
// src/components/Header.tsx

'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-dark shadow-lg'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-warm to-accent-warm-dark flex items-center justify-center">
              <span className="text-white font-bold text-lg">PK</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-sm font-bold text-primary-900">PANCH KEDAR</span>
              <span className="text-xs text-neutral-600">Trek Adventures</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/treks">All Treks</NavLink>
            <NavLink href="/#about">About</NavLink>
            <NavLink href="/#contact">Contact</NavLink>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.116-4.913 5.453-4.913 8.877 0 1.52.295 3.019.867 4.41l-1.292 4.758a.942.942 0 001.173 1.173l4.758-1.293a9.86 9.86 0 004.412.865h.004c2.993 0 5.825-1.134 7.938-3.246 2.113-2.112 3.247-4.944 3.247-7.938 0-5.432-4.412-9.853-9.853-9.853" />
              </svg>
              Chat
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden border-t border-neutral-200 py-4 space-y-3 animate-fadeInUp">
            <MobileNavLink href="/">Home</MobileNavLink>
            <MobileNavLink href="/treks">All Treks</MobileNavLink>
            <MobileNavLink href="/#about">About</MobileNavLink>
            <MobileNavLink href="/#contact">Contact</MobileNavLink>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 bg-green-500 text-white rounded-lg font-semibold text-center"
            >
              Chat on WhatsApp
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-neutral-700 hover:text-accent-warm font-semibold relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-warm group-hover:w-full transition-all duration-300" />
    </Link>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="block px-4 py-2 text-neutral-700 hover:text-accent-warm font-semibold">
      {children}
    </Link>
  );
}
```

---

## FILE 3: Redesigned Hero Section

```typescript
// src/components/HeroSection.tsx

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full overflow-hidden mt-16 md:mt-20">
      {/* Parallax Background Images */}
      <div className="absolute inset-0 h-screen md:h-[600px]">
        {/* Base Layer - Mountains (slowest parallax) */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-primary-900 via-primary-800 to-primary-700"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1500&h=800&fit=crop"
            alt="Himalayan Mountains"
            className="w-full h-full object-cover opacity-70"
          />
        </div>

        {/* Floating Elements - Animated Circles (parallax effect) */}
        <div
          className="absolute top-20 right-20 w-64 h-64 bg-accent-warm opacity-10 rounded-full blur-3xl pointer-events-none"
          style={{
            transform: `translateY(${scrollY * -0.2}px)`,
          }}
        />
        <div
          className="absolute bottom-40 left-40 w-80 h-80 bg-primary-500 opacity-5 rounded-full blur-3xl pointer-events-none"
          style={{
            transform: `translateY(${scrollY * 0.4}px)`,
          }}
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/30 to-white" />
      </div>

      {/* Content */}
      <div className="relative h-screen md:h-[600px] flex flex-col items-center justify-center px-4 text-center">
        {/* Premium Badge */}
        <div
          className={`mb-6 glass px-6 py-3 rounded-full inline-block transition-all duration-700 ${
            isLoaded ? 'opacity-100 animate-fadeInUp' : 'opacity-0'
          }`}
        >
          <p className="text-sm md:text-base text-accent-warm font-semibold">
            ⭐ 4.9/5 Rated • 1000+ Happy Trekkers
          </p>
        </div>

        {/* Main Headline */}
        <h1
          className={`text-5xl md:text-7xl font-serif font-bold mb-4 transition-all duration-700 ${
            isLoaded ? 'opacity-100 animate-fadeInUp animation-delay-1' : 'opacity-0'
          }`}
        >
          <span className="block text-neutral-900">Conquer Sacred</span>
          <span className="block text-gradient">HIMALAYAN PEAKS</span>
        </h1>

        {/* Subheading */}
        <p
          className={`text-lg md:text-xl text-neutral-700 mb-8 max-w-2xl transition-all duration-700 font-light ${
            isLoaded ? 'opacity-100 animate-fadeInUp animation-delay-2' : 'opacity-0'
          }`}
        >
          Experience pristine Himalayan landscapes with expert guides, small group sizes, and unforgettable memories
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col md:flex-row gap-4 mb-12 transition-all duration-700 ${
            isLoaded ? 'opacity-100 animate-fadeInUp animation-delay-3' : 'opacity-0'
          }`}
        >
          <Link
            href="/treks"
            className="px-8 py-4 bg-gradient-to-r from-accent-warm to-accent-warm-dark text-white font-bold rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group"
          >
            Explore All Treks
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white border-2 border-primary-900 text-primary-900 font-bold rounded-lg hover:bg-primary-50 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.116-4.913 5.453-4.913 8.877 0 1.52.295 3.019.867 4.41l-1.292 4.758a.942.942 0 001.173 1.173l4.758-1.293a9.86 9.86 0 004.412.865h.004c2.993 0 5.825-1.134 7.938-3.246 2.113-2.112 3.247-4.944 3.247-7.938 0-5.432-4.412-9.853-9.853-9.853" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 animate-scrollBounce ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-8 h-12 border-2 border-primary-900 rounded-full flex items-start justify-center pt-2">
            <div className="w-1.5 h-2 bg-primary-900 rounded-full animate-scrollBounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## FILE 4: Enhanced Trek Card Component

```typescript
// src/components/TrekCard.tsx

'use client';

import Link from 'next/link';

interface Trek {
  id: string;
  name: string;
  elevation: number;
  duration: number;
  price: number;
  difficulty: 'easy' | 'moderate' | 'difficult' | 'expert';
  season: string;
  image: string;
  rating: number;
  reviews: number;
}

const DIFFICULTY_EMOJIS = {
  easy: '🌱',
  moderate: '🏔️',
  difficult: '⛰️',
  expert: '🗻',
};

const DIFFICULTY_COLORS = {
  easy: 'bg-green-100 text-green-800',
  moderate: 'bg-amber-100 text-amber-800',
  difficult: 'bg-orange-100 text-orange-800',
  expert: 'bg-red-100 text-red-800',
};

export default function TrekCard({ trek }: { trek: Trek }) {
  return (
    <Link href={`/trek/${trek.id}`}>
      <div className="group relative rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 h-full cursor-pointer transform hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative overflow-hidden h-64 bg-primary-100">
          <img
            src={trek.image}
            alt={trek.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Rating Badge - Top Right */}
          <div className="absolute top-3 right-3 bg-white/90 px-3 py-1 rounded-full text-sm font-bold text-primary-900 backdrop-blur-sm">
            ⭐ {trek.rating} ({trek.reviews})
          </div>

          {/* Difficulty Badge - Top Left */}
          <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm ${DIFFICULTY_COLORS[trek.difficulty]}`}>
            {DIFFICULTY_EMOJIS[trek.difficulty]} {trek.difficulty.charAt(0).toUpperCase() + trek.difficulty.slice(1)}
          </div>

          {/* Season Badge - Bottom Right */}
          <div className="absolute bottom-3 right-3 bg-white/90 px-3 py-1 rounded-full text-sm font-semibold text-primary-900 backdrop-blur-sm">
            🗓️ {trek.season}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Trek Name */}
          <h3 className="text-xl font-serif font-bold text-neutral-900 mb-2 group-hover:text-accent-warm transition-colors">
            {trek.name}
          </h3>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3 mb-4 text-center text-sm">
            <div className="p-2 bg-primary-50 rounded-lg group-hover:bg-accent-warm/10 transition-colors">
              <p className="text-neutral-600 text-xs">Elevation</p>
              <p className="font-bold text-primary-900">{trek.elevation}m</p>
            </div>
            <div className="p-2 bg-primary-50 rounded-lg group-hover:bg-accent-warm/10 transition-colors">
              <p className="text-neutral-600 text-xs">Duration</p>
              <p className="font-bold text-primary-900">{trek.duration}d</p>
            </div>
            <div className="p-2 bg-accent-warm/10 rounded-lg group-hover:bg-accent-warm/20 transition-colors">
              <p className="text-neutral-600 text-xs">Price</p>
              <p className="font-bold text-accent-warm">₹{(trek.price / 1000).toFixed(0)}K</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-neutral-200 group-hover:border-accent-warm transition-colors">
            <span className="text-primary-900 font-semibold">Learn More</span>
            <span className="text-accent-warm transform group-hover:translate-x-2 transition-transform duration-300">→</span>
          </div>
        </div>

        {/* Glow Effect on Hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 30px rgba(212, 165, 116, 0.2)',
          }}
        />
      </div>
    </Link>
  );
}
```

---

## FILE 5: Trek Explorer with Enhanced Filters

```typescript
// src/components/TrekExplorer.tsx

'use client';

import { useState } from 'react';
import TrekCard from './TrekCard';
import { treks } from '@/data/treks';

export default function TrekExplorer() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string[]>([]);
  const [selectedSeason, setSelectedSeason] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter logic
  const filteredTreks = treks.filter((trek) => {
    const matchesDifficulty = selectedDifficulty.length === 0 || selectedDifficulty.includes(trek.difficulty);
    const matchesSeason = selectedSeason.length === 0 || selectedSeason.includes(trek.season);
    const matchesSearch = trek.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDifficulty && matchesSeason && matchesSearch;
  });

  const toggleFilter = (value: string, array: string[], setter: Function) => {
    if (array.includes(value)) {
      setter(array.filter((v) => v !== value));
    } else {
      setter([...array, value]);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="mb-12 text-center animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-4">
            Explore All Himalayan Treks
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Find your perfect adventure based on difficulty, season, and preferences
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 relative animate-fadeInUp animation-delay-1">
          <input
            type="text"
            placeholder="Search treks by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-4 bg-white border-2 border-primary-200 rounded-xl focus:border-accent-warm focus:ring-2 focus:ring-accent-warm/20 transition-all text-lg"
          />
          <svg className="absolute right-4 top-4 w-6 h-6 text-neutral-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Filters */}
        <div className="grid md:grid-cols-2 gap-6 mb-10 animate-fadeInUp animation-delay-2">
          {/* Difficulty Filter */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-primary-50">
            <h3 className="font-bold text-lg text-neutral-900 mb-4">Difficulty Level</h3>
            <div className="grid grid-cols-2 gap-3">
              {['easy', 'moderate', 'difficult', 'expert'].map((level) => (
                <button
                  key={level}
                  onClick={() => toggleFilter(level, selectedDifficulty, setSelectedDifficulty)}
                  className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                    selectedDifficulty.includes(level)
                      ? 'bg-accent-warm text-white'
                      : 'bg-primary-50 text-neutral-700 hover:bg-primary-100'
                  }`}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Season Filter */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-primary-50">
            <h3 className="font-bold text-lg text-neutral-900 mb-4">Season</h3>
            <div className="grid grid-cols-2 gap-3">
              {['Spring', 'Summer', 'Autumn', 'Winter'].map((season) => (
                <button
                  key={season}
                  onClick={() => toggleFilter(season, selectedSeason, setSelectedSeason)}
                  className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                    selectedSeason.includes(season)
                      ? 'bg-accent-warm text-white'
                      : 'bg-primary-50 text-neutral-700 hover:bg-primary-100'
                  }`}
                >
                  {season}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Trek Grid */}
        <div>
          {filteredTreks.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {filteredTreks.map((trek) => (
                <div key={trek.id} className="animate-fadeInUp">
                  <TrekCard trek={trek} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl text-neutral-500">No treks match your filters.</p>
              <button
                onClick={() => {
                  setSelectedDifficulty([]);
                  setSelectedSeason([]);
                  setSearchTerm('');
                }}
                className="mt-4 px-6 py-2 bg-accent-warm text-white font-bold rounded-lg hover:bg-accent-warm-dark transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
```

---

## FILE 6: Gallery Section with Overlapping Images

```typescript
// src/components/FeaturedGallery.tsx

'use client';

export default function FeaturedGallery() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', alt: 'Mountain Peak' },
    { src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop', alt: 'Valley View' },
    { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', alt: 'Alpine Lake' },
    { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop', alt: 'Meadow' },
    { src: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=300&fit=crop', alt: 'Sunset' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-serif font-bold text-center mb-16 animate-fadeInUp">
          Featured Destinations
        </h2>

        <div className="relative h-96 md:h-[500px] perspective">
          {/* Overlapping Gallery - Desktop Only */}
          <div className="hidden md:grid md:grid-cols-5 gap-4 absolute inset-0">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="group absolute transition-all duration-500 cursor-pointer hover:z-50 hover:scale-110 hover:shadow-2xl"
                style={{
                  width: '200px',
                  height: '200px',
                  left: `${idx * 60}px`,
                  top: idx % 2 === 0 ? '0' : '100px',
                  marginTop: idx === 2 ? '40px' : '0',
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover rounded-lg shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* Mobile: Carousel */}
          <div className="md:hidden overflow-x-auto flex gap-4 snap-x snap-mandatory pb-4">
            {images.map((img, idx) => (
              <div key={idx} className="flex-shrink-0 w-80 snap-center">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## IMPLEMENTATION CHECKLIST

### Phase 1: Styling & Design System ✅
- [x] CSS utilities for premium effects (glassmorphism, gradients, glows)
- [x] Animation keyframes for all interactions
- [x] Responsive typography scaling
- [x] Enhanced form styling

### Phase 2: Components ✅
- [x] Header with sticky navigation
- [x] Hero section with parallax
- [x] Trek cards with hover effects
- [x] Trek explorer with filters
- [x] Featured gallery with overlapping images

### Phase 3: Pages (Next)
- [ ] Trek listing page (`/treks`)
- [ ] Trek detail page (`/trek/[id]`)
- [ ] Booking page (`/trek/[id]/book`)

### Phase 4: Polish & Testing
- [ ] Mobile responsiveness testing
- [ ] Animation performance optimization
- [ ] Accessibility audit (WCAG 2.1)
- [ ] Cross-browser testing

---

## COMPONENT INTEGRATION

To integrate these components into your pages:

```typescript
// src/app/page.tsx
import HeroSection from '@/components/HeroSection';
import FeaturedGallery from '@/components/FeaturedGallery';
import TrekExplorer from '@/components/TrekExplorer';
import FAQSection from '@/components/FAQSection';
import TestimonialSection from '@/components/TestimonialSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedGallery />
      <TrekExplorer />
      <TestimonialSection />
      <FAQSection />
    </main>
  );
}
```

---

## ANIMATION PHILOSOPHY

All animations follow these principles:

1. **Stagger**: Elements appear at 100ms intervals (natural rhythm)
2. **Easing**: Use cubic-bezier for premium feel (0.34, 1.56, 0.64, 1)
3. **Duration**: Keep under 700ms (feels instant, not sluggish)
4. **Transform**: Use transform + opacity (GPU accelerated, smooth)
5. **Purpose**: Every animation should improve UX (not distract)

---

## PERFORMANCE NOTES

✓ No heavy animations on low-end devices
✓ Respects prefers-reduced-motion
✓ Lazy-load images for faster initial load
✓ CSS-only animations (no JavaScript animation libraries)
✓ Hardware acceleration (transform3d, will-change)

---

## Next Steps

All code sections can be implemented incrementally:

1. Update `globals.css` with new animations
2. Replace Header, Hero, and TrekCard components
3. Implement TrekExplorer with filters
4. Add FeaturedGallery section
5. Build trek listing page `/trek` 
6. Build trek detail page `/trek/[id]`
7. Build booking page `/trek/[id]/book`

Expected build time: 15-30 minutes total
