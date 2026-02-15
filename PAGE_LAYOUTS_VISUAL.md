# 🎬 PAGE LAYOUT & VISUAL DESIGN
## Premium Travel UI - Page-by-Page Visual Layouts

---

## PAGE 1: HOME PAGE (HERO + DISCOVERY)

### Purpose
Create emotional connection to destinations and drive users toward trek discovery/booking.

### Visual Layout Sketch

```
╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║                    [FULL-SCREEN HERO IMAGE: Mountains]                ║
║                   (Parallax background on scroll)                      ║
║                                                                        ║
║        ╔─────────────────────────────────────────────────────╗        ║
║        ║                                                     ║        ║
║        ║   "Conquer Sacred"                                 ║        ║
║        ║   "HIMALAYAN"                                      ║        ║
║        ║   "PEAKS"                                          ║        ║
║        ║   ⭐⭐⭐⭐⭐ 4.9 Stars (1000+ Trekkers)             ║        ║
║        ║                                                     ║        ║
║        ║   [Primary CTA: Book Your Trek] [WhatsApp: Chat]   ║        ║
║        ║                                                     ║        ║
║        ║                        ⬇️ SCROLL                    ║        ║
║        ║                     (bouncing animation)            ║        ║
║        ║                                                     ║        ║
║        ╚─────────────────────────────────────────────────────╝        ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝

                            ══════════════════════

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║   SECTION 2: FEATURED TREKS GALLERY (Overlapping Images)              ║
║                                                                        ║
║          [IMG1: Peak]    [IMG2: Valley]                               ║
║             ↙ overlaps ↘                                              ║
║                  [IMG3: Lake]                                         ║
║              ↙ overlaps ↘                                             ║
║      [IMG4: Meadow]           [IMG5: Sunset]                          ║
║                                                                        ║
║      All images: 300x220px with -40px negative margins                ║
║      Each on hover: translateY(-10px) with box-shadow lift            ║
║      Parallax effect: Images move at 0.3-0.5x scroll speed            ║
║                                                                        ║
║      ✨ Creates rich visual story of available destinations           ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝

                            ══════════════════════

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║   SECTION 3: VALUE PROPOSITION (Split Screen)                         ║
║                                                                        ║
║  ┌──────────────────────────┬─────────────────────────┐               ║
║  │                          │                         │               ║
║  │ Why Choose Us:           │    [Hero Image: Group   │               ║
║  │                          │     of happy trekkers]  │               ║
║  │ ✓ 1000+ Happy Trekkers   │                         │               ║
║  │ ✓ 99% Satisfaction Rate  │                         │               ║
║  │ ✓ Expert Local Guides    │                         │               ║
║  │ ✓ Small Groups (Max 12)  │                         │               ║
║  │ ✓ All Equipment Included │                         │               ║
║  │                          │                         │               ║
║  │ [Learn More CTA]         │                         │               ║
║  │                          │                         │               ║
║  └──────────────────────────┴─────────────────────────┘               ║
║                                                                        ║
║      Text slides in from left (0.6s)                                  ║
║      Image slides in from right (0.6s) - synchronized                 ║
║      Staggered bullet animations (100ms apart)                        ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝

                            ══════════════════════

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║   SECTION 4: BROWSE TREKS (4-Column Grid on Desktop)                  ║
║                                                                        ║
║   ┌─────────────┬─────────────┬─────────────┬─────────────┐           ║
║   │ [CARD 1]    │ [CARD 2]    │ [CARD 3]    │ [CARD 4]    │           ║
║   │ Chopta      │ Valley Trek │ Peak Climb  │ Snow Trek   │           ║
║   │ 4500m ⛰️    │ 3200m 🏔️    │ 5400m 🗻    │ 6000m ❄️    │           ║
║   │ ₹12,000     │ ₹9,000      │ ₹15,000     │ ₹18,000     │           ║
║   │ [Book]      │ [Book]      │ [Book]      │ [Book]      │           ║
║   └─────────────┴─────────────┴─────────────┴─────────────┘           ║
║                                                                        ║
║   ┌─────────────┬─────────────┬─────────────┬─────────────┐           ║
║   │ [CARD 5]    │ [CARD 6]    │ [CARD 7]    │ [CARD 8]    │           ║
║   │ Lake Trek   │ Forest Walk │ Ridge Hike  │ Summit Trek │           ║
║   └─────────────┴─────────────┴─────────────┴─────────────┘           ║
║                                                                        ║
║   [View All Treks Button - centered]                                  ║
║                                                                        ║
║   Each card:                                                          ║
║   - Image on top (400x300px, 4:3 ratio)                              ║
║   - Image zooms 1.1x on hover                                        ║
║   - Glassmorphic overlay slides up with details                      ║
║   - Border glows gold on hover                                       ║
║   - Staggered animations (each card 100ms apart)                     ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝

                            ══════════════════════

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║   SECTION 5: TESTIMONIALS (Carousel)                                  ║
║                                                                        ║
║          "This was the best adventure..."                             ║
║          ⭐⭐⭐⭐⭐ Raj Kumar, Mumbai                               ║
║          [Avatar: 48x48px circular]                                   ║
║                                                                        ║
║              [← CAROUSEL CONTROLS →]                                  ║
║                       • • • •                                         ║
║                                                                        ║
║   Auto-rotates every 5 seconds                                        ║
║   Smooth fade transition between testimonials                         ║
║   Glassmorphic background card                                        ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝

                            ══════════════════════

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║   SECTION 6: FAQ (Accordion, Expandable)                              ║
║                                                                        ║
║   ❓ What's the best time to trek?                                     ║
║   ├─> [Expand/Collapse with smooth animation]                        ║
║   │   "The best season is September to October (autumn)               ║
║   │    when weather is clear and temperatures are mild."              ║
║   │   [Learn more link]                                               ║
║   │                                                                    ║
║   ❓ What's the difficulty level?                                      ║
║   │ [Collapsed - hidden until clicked]                                ║
║   │                                                                    ║
║   ❓ Do I need experience?                                             ║
║   │ [Collapsed]                                                       ║
║   │                                                                    ║
║   ❓ What's included in the price?                                     ║
║   │ [Collapsed]                                                       ║
║                                                                        ║
║   On expand: Accordion slides down (300ms ease-out)                   ║
║   Border color changes to gold                                        ║
║   Smooth text fade-in                                                 ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝

                            ══════════════════════

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║   SECTION 7: CTA FOOTER                                               ║
║                                                                        ║
║   "Ready to Conquer the Peaks?"                                       ║
║   [Primary CTA: Book Your Trek Today]                                 ║
║   [Secondary CTA: Chat with Expert]                                   ║
║                                                                        ║
║   Background: Gradient overlay of mountains + parallax effect         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝
```

### Interaction Flow
1. Hero image parallax on scroll (background moves slower)
2. Scroll indicator bounces continuously
3. Featured gallery images stagger into view
4. Each gallery image hovers: lifts up, shadow appears
5. Value prop section: text & image slide in from opposite sides
6. Trek cards: images scale on hover, details slide up
7. Testimonials: auto-rotate with fade transitions
8. FAQ: smooth accordion expand/collapse
9. All animations follow stagger pattern (100ms increments)

---

## PAGE 2: TREK LISTING PAGE (EXPLORE WITH FILTERS)

### Purpose
Allow users to browse treks, filter by preferences, and discover new adventures.

### Visual Layout Sketch

```
╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║    [STICKY HEADER with Logo + Navigation + Search Bar]                ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝

                            ══════════════════════

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║   SECTION 1: HERO BANNER (Smaller than Home, but Still Cinematic)     ║
║                                                                        ║
║                    [Image: Multiple treks collage]                    ║
║                                                                        ║
║                   "ALL HIMALAYAN TREKS"                               ║
║                   "Find Your Perfect Adventure"                       ║
║                                                                        ║
║                  [Search by name / destination]                       ║
║                  [Difficulty Filter] [Season Filter]                  ║
║                  [Duration Filter]   [Budget Filter]                  ║
║                                                                        ║
║   Hero height: 40vh (smaller than home, fits with filters)            ║
║   Parallax background with 0.3x scroll speed                          ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝

                            ══════════════════════

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║   SECTION 2: FILTER SIDEBAR (DESKTOP) / FILTERS (MOBILE)              ║
║                                                                        ║
║   ┌──────────────────┬─────────────────────────────────────────────┐  ║
║   │ FILTERS          │ TREK RESULTS                                │  ║
║   │                  │                                             │  ║
║   │ Difficulty       │ ┌──────────────────────────────────────┐    │  ║
║   │ ☐ Easy (🌱)      │ │ [Trek Card 1 - Chopta]               │    │  ║
║   │ ☐ Moderate (🏔️)  │ │ [Image: Meadow]                      │    │  ║
║   │ ☐ Difficult (⛰️) │ │ Title, Elevation, Duration, Price     │    │  ║
║   │ ☐ Expert (🗻)    │ │ Difficulty Badge: 🏔️ Moderate         │    │  ║
║   │                  │ │ ⭐ 4.8 (120 reviews)                  │    │  ║
║   │ Season           │ │ [Book Trek →]                         │    │  ║
║   │ ☐ Spring         │ └──────────────────────────────────────┘    │  ║
║   │ ☐ Summer         │ ┌──────────────────────────────────────┐    │  ║
║   │ ☐ Autumn         │ │ [Trek Card 2 - Valley Trek]           │    │  ║
║   │ ☐ Winter         │ └──────────────────────────────────────┘    │  ║
║   │                  │ ┌──────────────────────────────────────┐    │  ║
║   │ Duration         │ │ [Trek Card 3 - Peak Climb]           │    │  ║
║   │ ☐ 2-3 days       │ └──────────────────────────────────────┘    │  ║
║   │ ☐ 4-5 days       │ ┌──────────────────────────────────────┐    │  ║
║   │ ☐ 6-7 days       │ │ [Trek Card 4 - Snow Trek]            │    │  ║
║   │ ☐ 8+ days        │ └──────────────────────────────────────┘    │  ║
║   │                  │                                             │  ║
║   │ Budget (₹)       │ [Load More Trek Cards]                      │  ║
║   │ ○ <5K            │                                             │  ║
║   │ ○ 5-10K          │                                             │  ║
║   │ ○ 10-15K         │                                             │  ║
║   │ ○ 15K+           │                                             │  ║
║   │                  │                                             │  ║
║   │ [Clear Filters]  │                                             │  ║
║   │                  │                                             │  ║
║   └──────────────────┴─────────────────────────────────────────────┘  ║
║                                                                        ║
║   Desktop: Sidebar left (25%), Cards right (75%)                      ║
║   Tablet:  Filters in horizontal bar, Full-width cards below          ║
║   Mobile:  Hidden filters (slide-out menu), Full-width cards          ║
║                                                                        ║
║   Card Grid Changes:                                                  ║
║   - Desktop:  3 columns (33% each)                                    ║
║   - Tablet:   2 columns (50% each)                                    ║
║   - Mobile:   1 column (100%)                                         ║
║                                                                        ║
║   Trek Cards Enhanced:                                                ║
║   - Larger images (500x375px)                                         ║
║   - More stats visible                                                ║
║   - Quick filters appear on hover                                     ║
║   - Difficulty emoji badges clearly visible                           ║
║   - Review count + star rating visible                                ║
║   - "Book Trek →" CTA always visible (hover for glow)                 ║
║                                                                        ║
║   Card animations:                                                    ║
║   - Stagger into view (100ms apart) on page load                      ║
║   - Zoom + glow on hover (700ms ease-out)                             ║
║   - Smooth load-more animation (fade in)                              ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝

                            ══════════════════════

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║   SECTION 3: PAGINATION                                               ║
║                                                                        ║
║   « 1 2 [3] 4 5 ... »  or   [Load More →]                            ║
║                                                                        ║
║   Current page: Highlighted in gold                                   ║
║   Hover: Underline appears                                            ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝
```

### Interactions
1. Filters update results in real-time (or on "Apply" click for performance)
2. Selected filters highlighted in gold
3. Trek cards lazy-load as user scrolls
4. Hover card: Image zooms, border glows, details visible
5. Clicking card: Navigate to trek detail page
6. Responsive: Filters collapse into mobile menu on small screens
7. Staggered card animations create flow

---

## PAGE 3: TREK DETAIL PAGE (IMMERSIVE, CONVERSION-FOCUSED)

### Purpose
Convert browser into booker with rich media, clear benefits, and friction-less booking path.

### Visual Layout Sketch

```
╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║    [STICKY HEADER + Quick Book CTA]                                   ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝

                            ══════════════════════

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║   SECTION 1: HERO IMAGE + BREADCRUMB                                  ║
║                                                                        ║
║   @ Home > Treks > Chopta Trek                                        ║
║                                                                        ║
║           [FULL-WIDTH HERO IMAGE with Parallax]                       ║
║           Height: 50vh (larger hero for detail)                       ║
║                                                                        ║
║   Overlay with trek info:                                             ║
║   - Title: "Chopta Trek"                                              ║
║   - Elevation: 4,500m ⛰️ + other key stats                           ║
║   - ⭐ Rating + Review count in corner                               ║
║                                                                        ║
║   Parallax elements:                                                  ║
║   - Background image moves at 0.3x scroll speed                       ║
║   - Text content moves at 1.0x                                        ║
║   - Creates immersive depth as user scrolls                           ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝

                            ══════════════════════

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║   SECTION 2: QUICK STATS BAR (Sticky on Scroll)                       ║
║                                                                        ║
║   [Duration: 4 Days] [Difficulty: ⛰️] [Price: ₹12,000] [⭐ 4.8]      ║
║   [Quick Book Button - Sticky to top on scroll]                       ║
║                                                                        ║
║   On desktop: Appears as thin sticky bar below header                 ║
║   On mobile: Sticky bottom bar with single large CTA button           ║
║   Animation: Fade in smoothly when scrolling past hero                ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝

                            ══════════════════════

╔════════════════════════════════════════════════════════════════════════╗
║                  ┌─────────────────────────────────┐                  ║
║                  │ MAIN CONTENT (75% width)        │ [STICKY SIDEBAR] ║
║                  │                                 │ (25% width)      ║
║                  │ SECTION 3: TREK OVERVIEW        │                  ║
║                  │                                 │ Summary Box:     ║
║                  │ "Epic alpine meadows with...    │ ┌──────────────┐ ║
║                  │  pristine nature..." (read more) │ │ Trek Summary  │ ║
║                  │                                 │ │              │ ║
║                  │ SECTION 4: ITINERARY            │ │ Duration:    │ ║
║                  │ (Expandable Accordions)         │ │ 4 Days       │ ║
║                  │                                 │ │              │ ║
║                  │ ▼ Day 1: Base Camp Setup        │ │ Max Elev:    │ ║
║                  │  "Reach at 10 AM. Settle in..." │ │ 4,500m       │ ║
║                  │  [Map preview, 300px]           │ │              │ ║
║                  │                                 │ │ Difficulty:  │ ║
║                  │ → Day 2: Peak Summit            │ │ ⛰️ Moderate  │ ║
║                  │ → Day 3: Descent                │ │              │ ║
║                  │ → Day 4: Return                 │ │ Group Size:  │ ║
║                  │                                 │ │ Max 12       │ ║
║                  │ Each day on hover:              │ │              │ ║
║                  │ - Expands to show details       │ │ Price:       │ ║
║                  │ - Smooth slide-down animation  │ │ ₹12,000/pp   │ ║
║                  │ - Text + map appear             │ │              │ ║
║                  │                                 │ │ Available    │ ║
║                  │ SECTION 5: INCLUDED BENEFITS  │ │ Dates:       │ ║
║                  │                                 │ │ Mar 15-18    │ ║
║                  │ ✓ All meals included            │ │ Apr 5-8      │ ║
║                  │ ✓ Equipment provided            │ │              │ ║
║                  │ ✓ Expert guides                 │ │ ⭐ 4.8/5     │ ║
║                  │ ✓ Insurance covered             │ │ (125 reviews)│ ║
║                  │ ✓ Transport included            │ │              │ ║
║                  │                                 │ │ [Book Now!]  │ ║
║                  │ SECTION 6: GALLERY              │ │ [Chat Expert]│ ║
║                  │ (Masonry Grid)                  │ │              │ ║
║                  │                                 │ │ WhatsApp: +91│ ║
║                  │ [IMG 1] [IMG 2] [IMG 3]         │ │ 9876543210   │ ║
║                  │ [IMG 4] [IMG 5]                 │ └──────────────┘ ║
║                  │                                 │                  ║
║                  │ Click any image → Full gallery  │ Desktop: Sticky  ║
║                  │ with lightbox viewer            │ sidebar stays    ║
║                  │                                 │ visible on       ║
║                  │ SECTION 7: WHAT TO BRING        │ scroll           ║
║                  │                                 │                  ║
║                  │ • Warm layers                   │ Mobile: Moves    ║
║                  │ • Hiking boots                  │ to bottom of     ║
║                  │ • Backpack 45-50L               │ page OR inline   ║
║                  │ • Torch/headlamp                │ between sections ║
║                  │                                 │                  ║
║                  │ SECTION 8: FAQ                  │                  ║
║                  │ (Expandable Accordions)         │                  ║
║                  │                                 │                  ║
║                  │ ❓ Do I need experience?         │                  ║
║                  │ ❓ What's the weather like?      │                  ║
║                  │ ❓ Is it suitable for kids?      │                  ║
║                  │                                 │                  ║
║                  │ SECTION 9: REVIEWS/TESTIMONIALS │                  ║
║                  │                                 │                  ║
║                  │ ⭐⭐⭐⭐⭐ Raj Kumar              │                  ║
║                  │ "Best experience ever! Guides   │                  ║
║                  │  were knowledgeable and kind."  │                  ║
║                  │                                 │                  ║
║                  │ ⭐⭐⭐⭐ Priya Singh              │                  ║
║                  │ "Amazing trek, would do again!" │                  ║
║                  │                                 │                  ║
║                  │ [Load More Reviews]             │                  ║
║                  │                                 │                  ║
║                  └─────────────────────────────────┘                  ║
║                                                                        ║
║   Main Content animations:                                            ║
║   - Sections fade inUp on scroll into view                            ║
║   - Itinerary accordions smooth slide-down (300ms)                    ║
║   - Gallery images stagger into view                                  ║
║   - On hover: slight scale + shadow lift                              ║
║                                                                        ║
║   Sidebar (Desktop) animations:                                       ║
║   - Remains sticky as user scrolls                                    ║
║   - CTA button hovers: glow effect, scale slightly                    ║
║   - Available dates dropdown smooth slide                             ║
║   - Price updates smoothly if selecting different dates               ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝

                            ══════════════════════

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║   SECTION 10: RELATED TREKS (Carousel)                                ║
║                                                                        ║
║   "Explore Similar Treks"                                             ║
║   [Trek Card 1] [Trek Card 2] [Trek Card 3] [Trek Card 4]             ║
║                                                                        ║
║   Auto-scroll or manual carousel controls                             ║
║   Smooth slide transitions (500ms)                                    ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝
```

### Key Interactions
1. **Sticky Header**: Logo, nav, "Quick Book" button visible always
2. **Sticky Stats Bar**: Appears on scroll (after hero), shows key info
3. **Sticky Sidebar**: Desktop only, follows scroll, doesn't overlap footer
4. **Parallax Hero**: Image moves slower than content on scroll
5. **Expandable Itinerary**: Day cards expand on click with smooth animation
6. **Date Picker**: Click to select date, price updates
7. **Gallery**: Click image → lightbox full-screen viewer
8. **Smooth Scrolling**: All transitions ease-out for premium feel
9. **Mobile**: Sidebar moves to bottom as full-width section

---

## PAGE 4: BOOKING PAGE (FRICTION-FREE, MOBILE-OPTIMIZED)

### Purpose
Convert intent into confirmed booking with minimal form friction.

### Visual Layout Sketch

```
╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║   MINIMAL HERO: Trek name + date + price                              ║
║                                                                        ║
║   "Book Your Chopta Trek Adventure"                                   ║
║   March 15-18, 2026 | ₹12,000 per person                              ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝

                            ══════════════════════

╔════════════════════════════────────────────────────────────────────────╗
║                                                                        ║
║   MAIN LAYOUT: 60% Form | 40% Summary (Desktop)                       ║
║               100% Form stacked with Summary (Mobile)                 ║
║                                                                        ║
║   ┌────────────────────────────┬──────────────────────────┐           ║
║   │ FORM SECTION (60%)         │ ORDER SUMMARY (40%)      │           ║
║   │                            │ (Sticky on Desktop)      │           ║
║   │ STEP 1: TRAVELER INFO      │                          │           ║
║   │                            │ ┌────────────────────┐   │           ║
║   │ Full Name *                │ │ BOOKING SUMMARY    │   │           ║
║   │ [________________________]  │ │                    │   │           ║
║   │                            │ │ Trek: Chopta       │   │           ║
║   │ Email *                    │ │ Dates: Mar 15-18   │   │           ║
║   │ [________________________]  │ │ Duration: 4 Days   │   │           ║
║   │                            │ │ Elevation: 4500m   │   │           ║
║   │ Phone (WhatsApp) *         │ │ Difficulty: ⛰️     │   │           ║
║   │ [________________________]  │ │                    │   │           ║
║   │                            │ │ Travelers: [1 ▼]   │   │           ║
║   │ (We'll send pre-trek       │ │ Price/person: ₹12K │   │           ║
║   │  updates via WhatsApp)     │ │ Total: ₹12,000     │   │           ║
║   │                            │ │                    │   │           ║
║   │ STEP 2: TREK PREFERENCES   │ │ ✓ Meal Included    │   │           ║
║   │                            │ │ ✓ Equipment        │   │           ║
║   │ [☐] I have trekking exp.   │ │ ✓ Guide            │   │           ║
║   │ [☐] I need equipment       │ │                    │   │           ║
║   │ [☐] Dietary preference     │ │ ┌────────────────┐ │   │           ║
║   │                            │ │ │ BOOK NOW FOR   │ │   │           ║
║   │ (Optional) Special Needs:  │ │ │ ₹12,000        │ │   │           ║
║   │ [________________________________________________]│ │ │           ║
║   │                            │ │ [Chat Expert for  │ │   │           ║
║   │ STEP 3: PAYMENT METHOD     │ │  payment options] │ │   │           ║
║   │                            │ │                   │ │   │           ║
║   │ UPI / Card / Bank Transfer │ │ [Reviews: ⭐⭐⭐⭐⭐]│   │           ║
║   │                            │ │ Trusted by 1000+   │   │           ║
║   │ [More info about payment]  │ │ adventurers        │   │           ║
║   │                            │ └────────────────────┘   │           ║
║   │ By submitting, you agree   │                          │           ║
║   │ to our Terms & Conditions  │                          │           ║
║   │ and Privacy Policy.        │                          │           ║
║   │                            │                          │           ║
║   │                            │                          │           ║
║   │           [← Back]         │                          │           ║
║   │           [Next →]         │                          │           ║
║   │                            │                          │           ║
║   └────────────────────────────┴──────────────────────────┘           ║
║                                                                        ║
║   Form interactions:                                                  ║
║   - Progress indicator at top (Step 1→2→3)                            ║
║   - Form fields focus: gold underline + subtle glow                   ║
║   - Validation errors: red inline, helpful messages                   ║
║   - Success checkmarks animate in (green, 200ms)                      ║
║   - Summary updates in real-time (travelers, total price)             ║
║   - Summary sticky stays visible on scroll down                       ║
║                                                                        ║
║   Mobile layout:                                                      ║
║   - Single column, full-width                                         ║
║   - Summary appears before CTA button (sticky bottom)                 ║
║   - Form steps collapse/expand for clarity                            ║
║   - Plenty of whitespace between fields                               ║
║   - Phone input optimized for mobile keyboard                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝

                            ══════════════════════

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║   SUCCESS PAGE (After confirming booking)                             ║
║                                                                        ║
║   ✓ Booking Confirmed!                                                ║
║                                                                        ║
║   "Thank you! Your Chopta Trek is booked for Mar 15-18."              ║
║   Confirmation sent to your email and WhatsApp.                       ║
║                                                                        ║
║   Booking Reference: #CHO-2601-15345                                  ║
║                                                                        ║
║   Next Steps:                                                         ║
║   1. Download pre-trek guide                                          ║
║   2. Join WhatsApp group for updates                                  ║
║   3. Check weather forecast                                           ║
║                                                                        ║
║   [Download Guide] [Share Success] [View My Bookings]                 ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝
```

### Key Interactions
1. **Minimal Fields**: Only 3 core fields to reduce friction (name, email, phone)
2. **Real-time Summary**: Updates as user fills form
3. **Sticky Sidebar**: Desktop shows summary always visible
4. **Smart Validation**: Inline errors with helpful messages
5. **Progress Indicator**: Shows step progress (1/3, 2/3, 3/3)
6. **Auto-scroll**: Errors scroll into view automatically
7. **WhatsApp CTA**: Always available as alternative booking path
8. **Mobile Optimized**: Large touch targets, clear focus states
9. **Success Page**: Confirmation + next steps clear

---

## CROSS-PAGE DESIGN PATTERNS

### Headers - Consistent Branding
```
┌──────────────────────────────────────────────────────────────────────┐
│ [Logo: "PK"]  [Nav: Home | Treks | About | Contact]  [WhatsApp CTA] │
│ (Sticky on scroll with glassmorphic blur effect)                     │
└──────────────────────────────────────────────────────────────────────┘
```

### Footers - Premium Legal
```
┌──────────────────────────────────────────────────────────────────────┐
│ [Company Info] [Quick Links] [Social Media] [Contact]                │
│ [Legal Links:  Terms | Privacy | Disclaimer]                         │
│ © 2026 Panch Kedar. All rights reserved.                             │
└──────────────────────────────────────────────────────────────────────┘
```

### CTA Buttons - Conversion Focus
```
Primary (Booking):   Golden background, white text, glow on hover
Secondary (Learn):   White background, blue border, blue text
Tertiary (Help):     Transparent, blue text, underline on hover
```

### Card Patterns - Consistent UX
```
All cards:
- Image: 1.1x zoom on hover, 700ms ease-out
- Border: Glows gold on hover
- Shadow: Lifts from subtle to pronounced
- Content: Details slide up (glassmorphic background)
- CTA: Arrow animates right on hover
```

---

## NEXT: PART 4 - FRONTEND CODE IMPLEMENTATION

(HTML/CSS/TypeScript React components matching all visual designs above)
