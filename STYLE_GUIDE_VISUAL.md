# 📋 COMPREHENSIVE STYLE GUIDE
## Premium Travel UI - Visual Identity System

---

## SECTION 1: COLOR PALETTE

### Primary Colors
**Philosophy**: Himalayan mountains = deep, trustworthy, majestic blues with warm accents for action/warmth

```
🔵 Primary Blue - Deep Mountain
Hex: #0F1C3F (darkest)
Usage: Background, hero overlay, text on light backgrounds
Psychology: Trust, stability, nature connection

🔵 Primary Blue - Rich
Hex: #1E3A5F
Usage: Card backgrounds, section dividers
Psychology: Professional, premium

🔵 Primary Blue - Vibrant  
Hex: #2A5A99
Usage: Hover states, active elements, accents
Psychology: Trustworthy yet energetic

🔵 Primary Blue - Sky
Hex: #3B7FC4
Usage: Secondary buttons, subtle accents
Psychology: Open, accessible, adventurous

🔵 Primary Blue - Light
Hex: #E8F0F7 (lightest)
Usage: Backgrounds, card backgrounds on white
Psychology: Clean, premium whitespace
```

### Accent Colors
**Philosophy**: Golden hour warmth = premium, welcoming, action-oriented

```
🟠 Golden Accent - Primary
Hex: #D4A574 (medium gold)
Usage: CTAs, hover effects, highlights
Psychology: Premium, luxury, warmth, action

🟠 Golden Accent - Dark
Hex: #9B7653 (deep gold)
Usage: Hover states on golden buttons, shadows
Psychology: Rich, sophisticated

🟠 Golden Accent - Light  
Hex: #F4D9C7 (light warm)
Usage: Subtle highlights, backgrounds for callouts
Psychology: Inviting, warm welcome
```

### Status Colors
```
🟢 Success/Easy
Hex: #10B981 (emerald)
Usage: Difficulty badge (Easy treks), success messages

🟡 Warning/Moderate
Hex: #F59E0B (amber)
Usage: Difficulty badge (Moderate), caution messaging

🔴 Danger/Difficult
Hex: EF4444 (red)
Usage: Difficulty badge (Difficult/Expert), urgent messaging

⚫ Neutral Gray
Hex: #6B7280 (medium gray)
Usage: Secondary text, borders, dividers
```

### Neutral/Gray System
```
150 - #F9FAFB (almost white, backgrounds)
200 - #F3F4F6 (light gray, subtle backgrounds)
300 - #E5E7EB (lighter dividers)
400 - #D1D5DB (medium dividers)
500 - #9CA3AF (secondary text)
600 - #6B7280 (body text)
700 - #374151 (primary text)
800 - #1F2937 (dark text)
900 - #111827 (darkest text)
```

### Color Usage Rules
```
✓ DO: Use blue for main navigation, backgrounds, trust signals
✓ DO: Use gold for ALL CTAs (Book, Explore, Learn More, Contact)
✓ DO: Use status colors (green/amber/red) for difficulty badges
✓ DO: Use gray for secondary information, dividers

✗ DON'T: Use gold for body text (hard to read)
✗ DON'T: Use more than 2-3 accent colors per section
✗ DON'T: Apply blue overlay + gold text (low contrast)
✗ DON'T: Mix primary blue with primary green (muddy)
```

---

## SECTION 2: TYPOGRAPHY

### Font Families (Google Fonts)

**Headings: Playfair Display**
- Use Case: H1-H3 headlines
- Weight: 700 (Bold)
- Characteristics: Serif, elegant, luxury feel, cinematic
- Why: Immediately signals "premium travel brand"

**Body: Inter**
- Use Case: Body text, captions, UI labels
- Weight: 400 (Regular), 500 (Medium), 600 (Semibold)
- Characteristics: Sans-serif, modern, highly readable
- Why: Perfect readability at all sizes, modern aesthetic

**Accent: Playfair Display Medium**
- Use Case: Subheadings, callouts, section titles
- Weight: 500
- Characteristics: Elegant but slightly lighter than headlines
- Why: Hierarchy between H1 and body text

### Typography Scale

```css
/* H1: Page Hero Headline */
Font-size: 56px (desktop) / 36px (mobile)
Line-height: 1.1 (tight)
Letter-spacing: -1px
Font-weight: 700 (Playfair Display)
Color: #1F2937 on light / #F9FAFB on dark
Example: "Conquer Sacred Himalayan Peaks"

/* H2: Section Headline */
Font-size: 42px (desktop) / 28px (mobile)
Line-height: 1.2
Letter-spacing: -0.5px
Font-weight: 700 (Playfair Display)
Color: #1F2937
Example: "Explore Our Premium Treks"

/* H3: Card Title / Subheading */
Font-size: 28px (desktop) / 20px (mobile)
Line-height: 1.3
Letter-spacing: 0px
Font-weight: 600-700 (Playfair Display Medium)
Color: #1F2937
Example: "Chopta Trek - Meadows of Uttarakhand"

/* H4: Filter Labels, Small Titles */
Font-size: 18px
Line-height: 1.4
Letter-spacing: 0px
Font-weight: 600
Color: #374151
Example: "Difficulty Level"

/* Body: Paragraph Text */
Font-size: 16px (desktop) / 14px (mobile)
Line-height: 1.6 (generous for readability)
Letter-spacing: 0.3px
Font-weight: 400 (Inter)
Color: #374151
Example: "Immerse yourself in pristine Himalayan landscapes..."

/* Small: Captions, Metadata */
Font-size: 13px
Line-height: 1.5
Letter-spacing: 0.3px
Font-weight: 400
Color: #6B7280
Example: "Last updated: Feb 2026"
```

### Hierarchy Rules
```
✓ DO: Use Playfair Display ONLY for H1-H3 (headlines)
✓ DO: Use Inter for ALL body text and UI labels
✓ DO: Increase font-size AND weight for visual hierarchy
✓ DO: Use 1.6+ line-height for body text (readability)

✗ DON'T: Use serif fonts for body text (hard to read on screens)
✗ DON'T: Use more than 2 font families
✗ DON'T: Set line-height below 1.5 for body text
✗ DON'T: Use small font-size with low line-height (accessibility fail)
```

---

## SECTION 3: SPACING SYSTEM

### Base Unit: 8px Grid
All spacing derived from 8px base unit for consistency

```
4px   - Extra tight spacing (rarely used)
8px   - Tight spacing (button padding, small gaps)
12px  - Comfortable spacing (component padding)
16px  - Standard spacing (section padding)
24px  - Large spacing (between sections)
32px  - Extra large spacing (major section breaks)
48px  - XL spacing (page sections, vertical rhythm)
64px  - XXL spacing (hero bottom padding, major breaks)
80px  - XXXL spacing (between hero + next section)
96px  - Maximum spacing (major page sections)
```

### Padding Rules
```
Buttons:         12px vertical × 20px horizontal
Cards:           24px padding all sides
Section Padding: 48px top/bottom (desktop), 32px (tablet), 24px (mobile)
Hero Section:    80px top/bottom
Container Width: max-width: 1200px with 48px side padding
```

### Margin Rules
```
H1 (Hero):       24px margin-bottom
H2 (Section):    16px margin-bottom
H3 (Card Title): 12px margin-bottom
Paragraph:       16px margin-bottom
Between Sections: 64px vertical margin
```

### Grid System
```
Desktop:   12-column grid, 48px gutter
Tablet:    8-column grid, 32px gutter
Mobile:    4-column grid, 16px gutter

Examples:
- Full-width card:      12/12 (1 col)
- Half-width sections:  6/12 (2 cols)
- Thirds layout:        4/12 (3 cols)
- Quarters layout:      3/12 (4 cols)
```

---

## SECTION 4: BORDER & RADIUS

### Border Radius
```
Buttons:              8px (modern, approachable)
Cards:                12px (premium, not too rounded)
Input fields:         8px (consistent with buttons)
Images in cards:      12px (matches card)
Hero section:         0px (full bleed images)
Modals/Dialogs:       16px (larger, more prominent)
```

### Border Styles
```
Default border:       1px solid #E5E7EB (light gray)
Hover border:         1px solid #D4A574 (golden accent)
Focus border:         2px solid #D4A574 (golden on focus)
Error border:         2px solid #EF4444 (red)
Active border:        2px solid #2A5A99 (primary blue)
```

---

## SECTION 5: IMAGE TREATMENT RULES

### Image Aspect Ratios
```
Hero Image:           16:9 or 21:9 (cinematic, full width)
Trek Card Image:      4:3 (standard landscape)
Gallery Images:       Mixed (3:2, 4:3, 1:1 for visual interest)
Avatar/Profile:       1:1 (circular, 48px default)
Background Images:    16:9 (parallax backgrounds)
Testimonial Avatar:   1:1 (48px, borderRadius: 50%)
```

### Image Treatment
```
✓ Use high-quality photography (8MP+ resolution minimum)
✓ Apply subtle overlay (rgba(15, 28, 63, 0.3)) for text readability
✓ Add 4px border-radius to card images (softens edges)
✓ Use object-fit: cover for consistent scaling
✓ Apply lazy loading for performance
✓ Add subtle box-shadow: 0 10px 30px rgba(0,0,0,0.15)

✗ DON'T: Use low-quality placeholder images
✗ DON'T: Stretch images (maintain aspect ratio)
✗ DON'T: Apply heavy filters (keep natural colors)
✗ DON'T: Place text directly on image without contrast overlay
```

### Shadow Treatment
```
Subtle (cards, images):      0 4px 12px rgba(0,0,0,0.1)
Medium (hover states):       0 8px 24px rgba(0,0,0,0.15)
Deep (modals, dropdowns):    0 20px 40px rgba(0,0,0,0.2)
Golden glow (CTAs on hover): 0 10px 30px rgba(212, 165, 116, 0.4)
```

### Overlay Gradients
```
Text visibility overlay:
linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(15,28,63,0.4) 100%)

Dark theme overlay:
rgba(15, 28, 63, 0.5)

Light theme overlay:
rgba(255, 255, 255, 0.1) with backdrop blur

Glow effect on hover:
radial-gradient(circle, rgba(212,165,116,0.3) 0%, transparent 70%)
```

---

## SECTION 6: INTERACTIVE STATES & HOVER EFFECTS

### Button States

#### Primary Button (Golden, CTA)
```
Default:     bg: #D4A574, text: #FFF, shadow: subtle
Hover:       bg: #9B7653, shadow: 0 10px 30px rgba(212,165,116,0.4)
Active:      bg: #7A5940, scale: 0.98 (pressed feel)
Disabled:    bg: #D1D5DB, opacity: 0.6, cursor: not-allowed
Transition:  all 300ms ease-out
```

#### Secondary Button (White/Blue outline)
```
Default:     bg: white, border: 2px #2A5A99, text: #2A5A99
Hover:       bg: #E8F0F7, text: #0F1C3F
Active:      bg: #D0E1F5, scale: 0.98
Focus:       outline: 2px solid #D4A574
Transition:  all 300ms ease-out
```

### Card Hover Effects
```
Image Zoom:        transform: scale(1.08), transition: 700ms ease-out
Shadow Lift:       0 20px 40px rgba(0,0,0,0.2), transition: 400ms
Border Glow:       border-color: #D4A574 + subtle glow shadow
Content Slide:     translateY(-4px) on hover
Text Color:        #D4A574 on "Learn More" link on hover
```

### Link Hover Effects
```
Text Link:         underline appears, color shifts to #D4A574
Arrow Animation:   "→" shifts right: translateX(4px)
Wavy Underline:    Can use SVG animated underline (premium feel)
```

---

## SECTION 7: MOTION & ANIMATION RULES

### Animation Principles
```
✓ DO: Use easing functions (ease-out, cubic-bezier)
✓ DO: Keep animations under 700ms (feels instant)
✓ DO: Stagger animations 100ms apart for visual flow
✓ DO: Use transform/opacity (hardware accelerated, smooth)

✗ DON'T: Animate with jQuery/left/top (stutters)
✗ DON'T: Use linear easing (feels robotic)
✗ DON'T: Animate too fast (0.1s feels jarring)
✗ DON'T: Add motion to elements that don't need it (distraction)
```

### Animation Library

#### Page Load Animation - Fade In + Slide Up
```
Name: fadeInUp
Duration: 800ms
Easing: cubic-bezier(0.34, 1.56, 0.64, 1)
Starts at: opacity: 0, transform: translateY(20px)
Ends at: opacity: 1, transform: translateY(0)
Stagger: 100ms between elements
Usage: Headlines, paragraphs, cards on page load
```

#### Hover Animation - Image Zoom + Glow
```
Name: imageZoom
Duration: 700ms
Easing: ease-out
Transform: scale(1.08)
Shadow: increases to 0 20px 40px rgba(0,0,0,0.2)
Usage: Trek card images on hover
```

#### Scroll Animation - Parallax
```
Name: parallax
On Scroll: background-position shifts at 0.3-0.5x scroll speed
Creates: Depth illusion (background slower than foreground)
Usage: Hero section, full-width image sections
Examples:
  - Background: scrollY * 0.3
  - Mid-layer: scrollY * 0.6
  - Foreground: scrollY * 1.0 (normal)
```

#### CTA Animation - Glow + Float
```
Name: glowFloat
Duration: 3s infinite
Easing: ease-in-out
Moves: Up 8px, then down 8px continuously
Glow: Box-shadow pulses from subtle to pronounced
Usage: Primary CTAs, floating action buttons
Creates: Attention-grabbing without annoying
```

#### Scroll Indicator Animation - Bounce
```
Name: scrollDown
Duration: 1.5s
Repeats: infinite
Movement: Down 12px + opacity fade slightly
Usage: Hero scroll indicator
Creates: "Keep scrolling" call-to-action
```

#### Text Animation - Word Split
```
Name: wordGlow
Duration: 400ms
Effect: First word normal, second word glows with color change
Usage: Headlines with two parts (e.g., "Conquer Sacred")
```

### Motion Timing

```
Micro-interactions (hover): 200-400ms
Transitions (state changes): 300-500ms
Section animations (scroll): 600-900ms
Loading animations: 1-3s (repeating)
Page load: 0.6-1.2s total
```

### Accessibility Motion Rules
```
✓ Support prefers-reduced-motion: respect user preferences
✓ Use `@media (prefers-reduced-motion: reduce)` to disable animations
✓ Never animate text that user needs to read (distracting)
✓ Don't use flashing/strobing (seizure risk)
```

---

## SECTION 8: DESIGN SYSTEM TOKENS SUMMARY

### Quick Reference

```css
/* Colors */
--primary-dark: #0F1C3F
--primary-rich: #1E3A5F
--primary-vibrant: #2A5A99
--accent-gold: #D4A574
--accent-dark-gold: #9B7653
--status-success: #10B981
--status-warning: #F59E0B
--neutral-gray: #6B7280

/* Typography */
--font-heading: "Playfair Display", serif
--font-body: "Inter", sans-serif
--font-size-h1: 56px
--font-size-h2: 42px
--font-size-body: 16px
--line-height-body: 1.6

/* Spacing */
--spacing-base: 8px
--spacing-lg: 24px
--spacing-xl: 48px

/* Radius */
--radius-sm: 4px
--radius-md: 8px
--radius-lg: 12px
--radius-xl: 16px

/* Shadows */
--shadow-sm: 0 4px 12px rgba(0,0,0,0.1)
--shadow-md: 0 8px 24px rgba(0,0,0,0.15)
--shadow-lg: 0 20px 40px rgba(0,0,0,0.2)

/* Transitions */
--transition-fast: 300ms ease-out
--transition-slow: 700ms ease-out
```

---

## SECTION 9: RESPONSIVE DESIGN BREAKPOINTS

### Device-Based Breakpoints
```
Mobile (sm):   320px - 639px
Tablet (md):   640px - 1023px
Desktop (lg):  1024px - 1279px
Large (xl):    1280px+
```

### Responsive Typography
```
H1:
  Desktop: 56px
  Tablet:  42px
  Mobile:  32px

H2:
  Desktop: 42px
  Tablet:  28px
  Mobile:  24px

Body:
  Desktop: 16px
  Tablet:  15px
  Mobile:  14px
```

### Responsive Spacing
```
Section Padding:
  Desktop:  48px top/bottom, 48px left/right
  Tablet:   32px top/bottom, 32px left/right
  Mobile:   24px top/bottom, 16px left/right

Card Grid:
  Desktop:  4 columns (25% width each)
  Tablet:   2 columns (50% width each)
  Mobile:   1 column (100% width)
```

---

## SECTION 10: ACCESSIBILITY REQUIREMENTS

### Color Contrast
```
✓ Minimum WCAG AA: 4.5:1 for text
✓ WCAG AAA target: 7:1 for body text
✓ Never use color alone to convey info (add icons/text)
✓ Check contrast using WebAIM Contrast Checker
```

### Focus States
```
✓ All interactive elements have visible focus ring
✓ Focus ring: 2px solid #D4A574 (golden, distinctive)
✓ Don't remove outline (replace with gold outline)
✓ Focus visible on tab navigation
```

### ARIA Labels
```
✓ Images: alt text describing content
✓ Buttons: aria-label if text not clear
✓ Forms: associated labels for all inputs
✓ Links: descriptive text (not "Click Here")
✓ Icons: aria-hidden if decorative, labeled if functional
```

### Mobile Keyboard Design
```
✓ Touch targets: minimum 44x44px
✓ Input fields: proper type (email, tel, number)
✓ Forms: logical tab order
✓ Avoid hover-only interactions (mobile users can't hover)
```

---

## NEXT: PART 3 - PAGE LAYOUT DESCRIPTIONS

(Each page will be described visually with ASCII mockups and interaction details before code implementation)
