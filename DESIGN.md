---
name: "Idel Almaty"
description: "Design system for the Tatar-Bashkir cultural center Idel in Almaty."
colors:
  white-hall: "#ffffff"
  zinc-paper: "#fafafa"
  zinc-rail: "#d4d4d8"
  zinc-muted: "#52525b"
  zinc-ink: "#18181b"
  community-black: "#111111"
  amber-memory: "#fef3c7"
  rose-gathering: "#ffe4e6"
  sky-link: "#e0f2fe"
  violet-signal: "#f5f3ff"
  emerald-new: "#047857"
  pink-social: "#fdf2f8"
  green-map: "#f0fdf4"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "2.25rem / 3.75rem"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "normal"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.5rem / 2.25rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.25rem / 1.5rem"
    fontWeight: 700
    lineHeight: 1.25
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.6875rem / 0.875rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  pill: "9999px"
  card-soft: "24px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "20px"
  xl: "24px"
  section-sm: "56px"
  section-md: "80px"
components:
  button-dark:
    backgroundColor: "{colors.community-black}"
    textColor: "{colors.white-hall}"
    rounded: "{rounded.md}"
    padding: "6px 16px"
    typography: "{typography.label}"
  chip-neutral:
    backgroundColor: "{colors.zinc-paper}"
    textColor: "{colors.zinc-ink}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
    typography: "{typography.label}"
  card-editorial:
    backgroundColor: "{colors.zinc-paper}"
    textColor: "{colors.zinc-ink}"
    rounded: "{rounded.card-soft}"
    padding: "24px / 36px"
---

# Design System: Idel Almaty

## 1. Overview

**Creative North Star: "Живая доска центра"**

The system should feel like the living public board of a cultural center: current, practical, welcoming, and grounded in real people. It is a brand/community site, not an app shell and not a corporate campaign. White space, direct Russian copy, local photos, compact navigation, and simple action links carry the experience.

The visual language is local, human, cultural, and clear. It uses a white editorial base with zinc text, black practical calls to action, and small community color fields for sections and tags. It explicitly rejects a generic corporate landing page, stock-cultural festival templates, anonymous NGO polish, heavy folklore ornament, and replacing real center/event photos with generic imagery.

**Key Characteristics:**
- White, readable editorial surfaces with strong zinc ink.
- Compact cards and practical buttons rather than decorative marketing blocks.
- Real community content first: news, activists, events, gallery, contacts.
- Small color accents for meaning and section identity, never as generic decoration.
- Rounded surfaces are present, but the site should not drift into pillowy SaaS styling.

## 2. Colors

The palette is a restrained community editorial palette: white and zinc do the structural work, black handles decisive actions, and amber/rose/sky/violet/emerald accents mark activity, tags, and community states.

### Primary
- **Community Black**: Used for strong call-to-action buttons, the mobile menu button, and decisive interface anchors.
- **Zinc Ink**: Used for headings, body copy, navigation text, and most readable editorial surfaces.

### Secondary
- **Amber Memory**: Used for warm community context, "Основа" blocks, and cultural-memory surfaces.
- **Rose Gathering**: Used for gathering, activity, and event-adjacent surfaces.
- **Sky Link**: Used for support, representation, and outward-looking community links.
- **Violet Signal**: Used for contacts, gallery icons, and selected signal accents.

### Tertiary
- **Emerald New**: Used sparingly for "Новое" status and freshness.
- **Pink Social**: Used for Instagram/social action surfaces.
- **Green Map**: Used for 2GIS/map action surfaces.

### Neutral
- **White Hall**: The default page background and clean content surface.
- **Zinc Paper**: Secondary card and chip surface.
- **Zinc Rail**: Borders, separators, rings, and quiet structure.
- **Zinc Muted**: Secondary text and footer links.

### Named Rules
**The Community Accent Rule.** Color marks a job: social, map, new status, event block, or section identity. Do not spread accent color just to make the page feel designed.

**The White Hall Rule.** The site starts from a white public-room surface. Warmth comes from content, photos, and accents, not from beige body backgrounds.

## 3. Typography

**Display Font:** System sans stack (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif)  
**Body Font:** System sans stack (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif)  
**Label/Mono Font:** No separate mono or label family.

**Character:** The type is direct, native-feeling, and practical. Weight and spacing create hierarchy; the site does not rely on decorative typefaces or faux-folk typography.

### Hierarchy
- **Display** (800-900, 2.25rem mobile / 3.75rem desktop, tight line-height): Used for the homepage identity and major route headings.
- **Headline** (700, 1.5rem mobile / 2.25rem desktop, tight line-height): Used for section headings and sticky informational cards.
- **Title** (700, 1.25rem-1.5rem, tight line-height): Used for news cards, story cards, and repeated content titles.
- **Body** (400, 1rem-1.25rem, relaxed line-height): Used for explanatory Russian copy. Keep prose readable and cap long lines around 65-75ch.
- **Label** (600, 0.6875rem-0.875rem, 0.08em when uppercase): Used for compact chips like "О центре", status tags, and metadata.

### Named Rules
**The Plain Russian Rule.** Prioritize readable Russian text over decorative styling. Do not use ornate display fonts or artificial folk styling unless explicitly requested.

**The Balance Rule.** Headings should use balanced wrapping and avoid overflow on mobile; long Russian words must fit before any visual flourish is accepted.

## 4. Elevation

The system is flat/layered. Depth is conveyed through tonal surfaces, rings, borders, sticky positioning, and light shadows. Shadows are allowed, but only as soft separation for cards and tactile CTAs; heavy floating panels are off-brand.

### Shadow Vocabulary
- **Card Soft** (`shadow-sm` / `shadow-zinc-300/30`): For quiet section containers and zinc cards.
- **Card Medium** (`shadow-md` / `shadow-black/5`): For StyleBox shells and sticky community cards.
- **Card High Legacy** (`lg:shadow-2xl`): Present in StyleBox internals; use cautiously and avoid expanding it to new generic cards.
- **Heartbeat Ring** (`0 0 0 2px rgba(...)`): Used for animated CTA emphasis, especially the "Подробнее" button.

### Named Rules
**The Flat-First Rule.** Surfaces are readable at rest through color, border, and spacing. Shadow may support a state or card boundary, but it should not become the main visual idea.

## 5. Components

### Buttons
- **Shape:** Compact rounded rectangles (6-12px) and occasional pills for status/action chips.
- **Primary:** Black-to-near-black gradient button with white text, icon, medium weight, and tight padding (6px 16px).
- **Hover / Focus:** Simple opacity/color transition and visible focus ring; animation may pulse softly for important CTAs.
- **Secondary / Social:** Tinted action pills for Instagram and 2GIS use pink/green low-chroma surfaces with darker text.

### Chips
- **Style:** Small rounded pills with light tonal background, border/ring, 11-14px text, and medium/bold weight.
- **State:** Chips identify status, section, or source. They should not become repeated decorative eyebrows above every section.

### Cards / Containers
- **Corner Style:** Soft community cards use 24px-32px legacy radii; smaller editorial cards and buttons should stay closer to 8px-16px.
- **Background:** White, zinc-50, or meaningful low-tint section colors like amber-50, rose-50, sky-50, and violet-50.
- **Shadow Strategy:** Use the flat/layered elevation model; pair borders and shadows sparingly.
- **Border:** 1px zinc or hue-matched low-opacity borders are common.
- **Internal Padding:** 24px mobile, 36px desktop for important blocks; 12px-24px for compact cards and action rows.

### Inputs / Fields
- **Style:** No mature input system is present. Future inputs should use white or zinc-50 backgrounds, 1px zinc border, 8-12px radius, and clear focus rings.
- **Focus:** Use a visible ring that matches the action context; never remove outlines without replacement.
- **Error / Disabled:** Not currently defined; add explicit states before shipping forms.

### Navigation
- **Style:** Header navigation is compact, desktop-first, and icon-assisted. Text uses zinc-700/800 with hover softening; violet icons mark contact/gallery actions.
- **Mobile:** A black rounded square menu button opens a fixed translucent dark overlay with large white links and subtle blur. Keep the overlay practical and readable, not decorative glassmorphism.

### StyleBox
StyleBox is the signature framed content shell: nested tonal surfaces, rings, generous padding, and optional hue variants. Use it for important editorial cards; avoid nesting additional cards inside it unless the content genuinely needs a framed tool.

## 6. Do's and Don'ts

### Do:
- **Do** keep `White Hall`, `Zinc Ink`, and compact navigation as the baseline for public pages.
- **Do** use real center/event/activist photos whenever the content calls for imagery.
- **Do** use community color accents only when they communicate role: social, map, new status, section identity, or event grouping.
- **Do** preserve readable Russian hierarchy with balanced headings, strong titles, and body lines around 65-75ch.
- **Do** keep action paths practical: Instagram, 2GIS, contacts, events, and stories should be obvious.

### Don't:
- **Don't** make the site feel like a generic corporate landing page.
- **Don't** use a stock cultural festival template, anonymous NGO brochure styling, or decorative folklore motifs as a substitute for real content.
- **Don't** replace real center and event photos with generic imagery.
- **Don't** overuse ornamental ethnic motifs or redesign away from the existing editorial/community character without an explicit request.
- **Don't** repeat tiny uppercase tracked labels above every section as generic scaffolding.
- **Don't** pair decorative 1px borders with large soft shadows on every card; choose structural border or light elevation deliberately.
