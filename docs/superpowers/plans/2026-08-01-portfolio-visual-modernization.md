# Portfolio Visual Modernization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refresh the portfolio's visual design (colors, typography, cards, buttons, motion) to feel modern, while keeping the same sections, content, and functionality (EmailJS, CV download, scroll animations, section anchors) untouched.

**Architecture:** Add a `surface` color scale + `Inter` font to the existing Tailwind config, introduce four small shared UI components (`Card`, `Badge`, `Button`, `SectionHeading`) under `src/components/ui/`, then refactor each existing section component in place to use Tailwind utility classes and the shared components instead of duplicated inline `style={{...}}` objects. Wire up the currently-unused `Footer.jsx` and remove the duplicate footer markup from `Contact.jsx`.

**Tech Stack:** React 19, Vite, Tailwind CSS 3, `@fontsource/inter` (new dependency). No test framework exists for this project — verification is manual (run `npm run dev`, check each section in the browser at mobile/tablet/desktop widths).

## Global Constraints

- No structural/content changes: same sections, same order, same `id`s (`home`, `about`, `skills`, `projects`, `contact`), same anchor links.
- No changes to EmailJS logic, CV download link, or the scroll-reveal system (`src/utils/scrollAnimations.js`, the `scroll-animate*` classes, `initScrollAnimations`) — these keep working exactly as they do today.
- Keep the dark blue theme family (`primary` Tailwind color scale already defined in `tailwind.config.js`) — do not introduce a new palette or a light/dark toggle.
- Existing `.animated-border` CSS class (defined in `src/App.css:1784-1838`) already implements the rotating-gradient card border effect used throughout the site — reuse it via the new `Card` component rather than reinventing card styling.
- After each task, run `npm run dev` and manually verify the affected section renders correctly and no horizontal scrollbar appears, before committing.

---

### Task 1: Design tokens, font, and shared UI components

**Files:**
- Modify: `tailwind.config.js`
- Modify: `package.json` (add `@fontsource/inter` dependency)
- Modify: `src/main.jsx` (import font CSS)
- Modify: `src/App.css:13-16` (body `font-family`)
- Create: `src/components/ui/Card.jsx`
- Create: `src/components/ui/Badge.jsx`
- Create: `src/components/ui/Button.jsx`
- Create: `src/components/ui/SectionHeading.jsx`

**Interfaces:**
- Produces: `<Card className? hoverLift?>{children}</Card>` — glass/gradient-border wrapper (uses existing `.animated-border` class + Tailwind padding).
- Produces: `<Badge>{children}</Badge>` — small tech-tag pill.
- Produces: `<Button variant="primary"|"secondary" as="a"|"button" ...restProps>{children}</Button>` — styled call-to-action.
- Produces: `<SectionHeading title subtitle? />` — centered title + accent underline + optional subtitle paragraph.
- Later tasks (2-8) consume all four of the above from `../ui/Card`, `../ui/Badge`, `../ui/Button`, `../ui/SectionHeading` (relative to each section's folder, e.g. `src/components/Home/Home.jsx` imports `../ui/Button`).

- [ ] **Step 1: Install the font package**

Run: `npm install @fontsource/inter`

- [ ] **Step 2: Update Tailwind config with surface colors and Inter font**

Edit `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef7ff',
          100: '#d9eeff',
          200: '#bce2ff',
          300: '#8ed1ff',
          400: '#4a9eff',
          500: '#185adb',
          600: '#2c5aa0',
          700: '#1e4a80',
          800: '#1a3d6a',
          900: '#0a1931',
        },
        surface: {
          900: '#0b0f19',
          800: '#111827',
          700: '#1a2332',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

- [ ] **Step 3: Import the font in `main.jsx`**

Edit `src/main.jsx`:

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import './index.css'
import './main.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

- [ ] **Step 4: Replace the hardcoded Arial body font**

Edit `src/App.css` line 14, inside the `body` rule:

```css
body {
  font-family: 'Inter', system-ui, sans-serif;
  line-height: 1.6;
  color: #fff;
  background: transparent;
  scroll-behavior: smooth;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  position: relative;
  margin: 0;
  padding: 0;
}
```

- [ ] **Step 5: Create `Card`**

Create `src/components/ui/Card.jsx`:

```jsx
import React from 'react';

const Card = ({ children, className = '', hoverLift = false }) => (
  <div
    className={`animated-border p-8 md:p-9 ${
      hoverLift ? 'transition-transform duration-300 ease-out hover:-translate-y-1' : ''
    } ${className}`}
  >
    {children}
  </div>
);

export default Card;
```

- [ ] **Step 6: Create `Badge`**

Create `src/components/ui/Badge.jsx`:

```jsx
import React from 'react';

const Badge = ({ children }) => (
  <span className="inline-block bg-primary-500 text-white text-xs font-medium px-2 py-1 rounded mr-2 mb-2">
    {children}
  </span>
);

export default Badge;
```

- [ ] **Step 7: Create `Button`**

Create `src/components/ui/Button.jsx`:

```jsx
import React from 'react';

const BASE = 'inline-block px-8 py-3 rounded-lg font-semibold text-base transition-all duration-300 ease-out text-center';
const VARIANTS = {
  primary: 'bg-gradient-to-br from-primary-500 to-primary-400 text-white shadow-lg shadow-primary-900/40 hover:-translate-y-0.5 hover:shadow-xl',
  secondary: 'bg-transparent text-primary-400 border-2 border-primary-400 hover:bg-primary-400 hover:text-white hover:-translate-y-0.5',
};

const Button = ({ variant = 'primary', as: Component = 'a', className = '', children, ...props }) => (
  <Component className={`${BASE} ${VARIANTS[variant]} ${className}`} {...props}>
    {children}
  </Component>
);

export default Button;
```

- [ ] **Step 8: Create `SectionHeading`**

Create `src/components/ui/SectionHeading.jsx`:

```jsx
import React from 'react';

const SectionHeading = ({ title, subtitle }) => (
  <div className="text-center mb-12 scroll-animate">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">{title}</h2>
    <div className="w-16 h-1 bg-primary-500 mx-auto mb-6" />
    {subtitle && (
      <p className="text-blue-100 text-lg max-w-xl mx-auto">{subtitle}</p>
    )}
  </div>
);

export default SectionHeading;
```

- [ ] **Step 9: Verify**

Run: `npm run dev`

Expected: site loads with no console errors, body text now renders in Inter (check via browser dev tools computed font-family), visual appearance otherwise unchanged (new components aren't used yet).

- [ ] **Step 10: Commit**

```bash
git add tailwind.config.js package.json package-lock.json src/main.jsx src/App.css src/components/ui
git commit -m "feat: add design tokens, Inter font, and shared UI components"
```

---

### Task 2: Navbar — scroll shadow + active-section highlight

**Files:**
- Modify: `src/components/Navbar/Navbar.jsx` (full rewrite of the existing file)

**Interfaces:**
- Consumes: nothing from Task 1 (no shared UI components needed here — Navbar's needs are all Tailwind + local state).
- Produces: no new exports consumed elsewhere; `Navbar` default export signature unchanged (no props).

- [ ] **Step 1: Replace `Navbar.jsx`**

```jsx
import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS
        .map(({ id }) => document.getElementById(id))
        .filter(Boolean);
      const current = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current.id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = (id) =>
    `text-lg transition-colors duration-300 ${
      activeSection === id ? 'text-primary-400' : 'text-gray-200 hover:text-primary-400'
    }`;

  return (
    <nav
      className={`bg-primary-900/95 backdrop-blur-md fixed top-0 w-full z-50 px-4 py-2 transition-shadow duration-300 ${
        isScrolled ? 'shadow-lg shadow-black/30 border-b border-white/10' : ''
      }`}
    >
      <div className="w-full max-w-none md:max-w-7xl mx-auto flex justify-between items-center h-12">
        <a href="#home" className="text-primary-500 text-2xl font-bold hover:text-primary-400 transition-colors">
          Thinura
        </a>

        <div className="hidden md:flex space-x-8">
          {NAV_LINKS.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={linkClass(id)}>
              {label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-4 pb-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col space-y-4">
          {NAV_LINKS.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={linkClass(id)} onClick={() => setIsMenuOpen(false)}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
```

- [ ] **Step 2: Verify**

Run: `npm run dev`. Scroll the page — confirm a subtle shadow/border appears on the navbar after ~20px of scroll, and the current section's nav link turns blue (`primary-400`) as it comes into view. Confirm the mobile menu (resize browser < 768px) still opens/closes and now animates open with a slide instead of appearing instantly.

- [ ] **Step 3: Commit**

```bash
git add src/components/Navbar/Navbar.jsx
git commit -m "feat: add navbar scroll shadow and active-section highlighting"
```

---

### Task 3: Home — shared Button, refined hero styling

**Files:**
- Modify: `src/components/Home/Home.jsx`

**Interfaces:**
- Consumes: `Button` from `../ui/Button` (Task 1: `<Button variant="primary"|"secondary" as="a" href download className>`).

- [ ] **Step 1: Replace the CTA buttons block**

In `src/components/Home/Home.jsx`, add the import at the top:

```jsx
import Button from '../ui/Button';
```

Replace the `<div className={`mb-6 lg:mb-8 ...`}>` block (lines 59-121 of the current file, the two `<a>` CTAs) with:

```jsx
          <div className={`mb-6 lg:mb-8 flex flex-wrap gap-4 justify-center lg:justify-start ${isLoaded ? 'animate-fade-in-up animate-delay-3' : 'animate-on-load'}`}>
            <Button as="a" variant="primary" href={cvFile} download="Thinura_Kahaduwa_CV.pdf">
              📄 Download CV
            </Button>
            <Button as="a" variant="secondary" href="#projects">
              🚀 View My Work
            </Button>
          </div>
```

- [ ] **Step 2: Update the profile image ring styling**

Replace the desktop profile image (around line 126-130):

```jsx
          <img
            src={profileImg}
            alt="Thinura Kahaduwa"
            className={`w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-full ring-4 ring-primary-400/60 shadow-2xl shadow-primary-900/50 ${isLoaded ? 'animate-drop-from-top animate-delay-2 floating' : 'animate-on-load'}`}
          />
```

And the mobile profile image (around line 39-44), same ring treatment:

```jsx
              <img
                src={profileImg}
                alt="Thinura Kahaduwa"
                className={`w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-full ring-4 ring-primary-400/60 shadow-2xl ${isLoaded ? 'animate-drop-from-top animate-delay-2 floating' : 'animate-on-load'}`}
                style={{ aspectRatio: '1/1', minWidth: '12rem', minHeight: '12rem' }}
              />
```

- [ ] **Step 3: Verify**

Run: `npm run dev`. Confirm both CTA buttons render with the gradient/outline styles and hover-lift, CV download still works, "View My Work" still scrolls to Projects, and the profile photo has a soft blue ring instead of a plain white border.

- [ ] **Step 4: Commit**

```bash
git add src/components/Home/Home.jsx
git commit -m "feat: modernize Home hero buttons and profile image styling"
```

---

### Task 4: About — shared Card for "What I Do"

**Files:**
- Modify: `src/components/About/About.jsx`

**Interfaces:**
- Consumes: `Card` from `../ui/Card` (Task 1: `<Card>{children}</Card>`).

- [ ] **Step 1: Replace the "What I Do" panel**

In `src/components/About/About.jsx`, add the import:

```jsx
import Card from '../ui/Card';
```

Replace the `<div className="animated-border" style={{...}}>...</div>` block (lines 52-81 of the current file) with:

```jsx
          <Card>
            <h4 className="text-white text-xl md:text-2xl mb-6">What I Do</h4>
            <div className="space-y-6">
              <div>
                <h5 className="text-primary-400 text-lg md:text-xl mb-3">🌐 Web Development</h5>
                <p className="text-blue-100 text-sm md:text-base">
                  Full-stack web development using React, Node.js, and modern frameworks.
                </p>
              </div>
              <div>
                <h5 className="text-primary-400 text-lg md:text-xl mb-3">📱 Mobile Development</h5>
                <p className="text-blue-100 text-sm md:text-base">
                  Cross-platform mobile apps using React Native and Flutter.
                </p>
              </div>
              <div>
                <h5 className="text-primary-400 text-lg md:text-xl mb-3">☁️ Cloud Solutions</h5>
                <p className="text-blue-100 text-sm md:text-base">
                  Designing and implementing scalable cloud architecture on Microsoft Azure using modern deployment practices.
                </p>
              </div>
            </div>
          </Card>
```

- [ ] **Step 2: Verify**

Run: `npm run dev`. Confirm the "What I Do" card still shows the rotating gradient border (from `.animated-border`) and the three service items render identically in content, just via the shared component.

- [ ] **Step 3: Commit**

```bash
git add src/components/About/About.jsx
git commit -m "refactor: use shared Card component in About section"
```

---

### Task 5: Skills — Tailwind grid + Card, drop Bootstrap grid classes

**Files:**
- Modify: `src/components/Skills/Skills.jsx`

**Interfaces:**
- Consumes: `Card` from `../ui/Card`, `SectionHeading` from `../ui/SectionHeading`.

- [ ] **Step 1: Replace the full file**

```jsx
import React from 'react';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';

const CATEGORIES = [
  {
    title: 'Frontend & Frameworks',
    skills: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      { name: 'DotNet', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
    ],
  },
  {
    title: 'Backend & Databases',
    skills: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'ClickUp', icon: 'https://juliety.com/wp-content/uploads/2023/08/desktop-app@2x-edited.png' },
      { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', invert: true },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="py-16 md:py-24 px-4 md:px-8">
    <SectionHeading
      title="My Skills"
      subtitle="Here are the technologies and tools I work with to bring ideas to life."
    />

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {CATEGORIES.map(({ title, skills }, i) => (
        <Card key={title} className={`scroll-animate scroll-animate-delay-${i + 1}`}>
          <h4 className="text-primary-400 text-center text-lg md:text-xl mb-8">{title}</h4>
          <div className="grid grid-cols-3 gap-6">
            {skills.map(({ name, icon, invert }) => (
              <div
                key={name}
                className="flex flex-col items-center gap-2 transition-transform duration-300 ease-out hover:-translate-y-1"
              >
                <img
                  src={icon}
                  alt={name}
                  className={`w-10 h-10 md:w-12 md:h-12 ${invert ? 'invert' : ''}`}
                />
                <span className="text-white text-xs md:text-sm text-center">{name}</span>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  </section>
);

export default Skills;
```

- [ ] **Step 2: Verify**

Run: `npm run dev`. Confirm the three skill category cards render in a 1-column (mobile) → 3-column (desktop) grid, each icon lifts slightly on hover, and no Bootstrap `row`/`col-*` classes remain in this file.

- [ ] **Step 3: Commit**

```bash
git add src/components/Skills/Skills.jsx
git commit -m "refactor: rebuild Skills section with Tailwind grid and shared Card"
```

---

### Task 6: Projects — shared Card + Badge, drop Bootstrap grid classes

**Files:**
- Modify: `src/components/Projects/Projects.jsx`

**Interfaces:**
- Consumes: `Card` from `../ui/Card`, `Badge` from `../ui/Badge`, `SectionHeading` from `../ui/SectionHeading`.

- [ ] **Step 1: Update imports and section/grid wrapper**

At the top of `src/components/Projects/Projects.jsx`, add:

```jsx
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import SectionHeading from '../ui/SectionHeading';
```

Replace the `<section id="projects" style={{...}}>` opening and the `text-center mb-5 scroll-animate` heading block (lines 69-79) with:

```jsx
  <section id="projects" className="py-16 md:py-24 px-4 md:px-8">
    <SectionHeading
      title="My Projects"
      subtitle="Here are some of the projects I've worked on. Each project showcases different technologies and skills."
    />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
```

And replace the closing `</div>\n  </section>` at the end of the file (lines 377-380) with:

```jsx
    </div>
  </section>
```

- [ ] **Step 2: Replace each project's outer wrapper**

For all three projects, replace the pattern:

```jsx
        <div className="col-lg-4 col-md-6 mb-4 scroll-animate scroll-animate-delay-N">
          <div className="animated-border" style={{ ... }}>
```

with:

```jsx
        <Card className="scroll-animate scroll-animate-delay-N overflow-hidden !p-0">
```

(keep the same `scroll-animate-delay-N` number already present for each project), and change every matching closing `</div>\n        </div>` at the end of each project block to `</Card>`.

Inside each card, keep the existing image/slideshow `<div style={{ height: '200px', backgroundImage: ... }}>` block exactly as-is (slideshow logic and indicator dots are unchanged), but wrap the text content that currently sits in `<div style={{ padding: '25px' }}>` with `<div className="p-6">` instead.

- [ ] **Step 3: Replace tech tag `<span>` blocks with `Badge`**

For Project 1 (POS System), replace:

```jsx
              <div style={{ marginBottom: '20px' }}>
                <span style={{ background: '#185adb', color: '#fff', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', marginRight: '8px' }}>React </span>
                <span style={{ background: '#185adb', color: '#fff', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', marginRight: '8px' }}>Springboot</span>
                <span style={{ background: '#185adb', color: '#fff', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>MySQL</span>
              </div>
```

with:

```jsx
              <div className="mb-5">
                <Badge>React</Badge>
                <Badge>Springboot</Badge>
                <Badge>MySQL</Badge>
              </div>
```

For Project 2 (Solo-Runner), replace the two nested tag `<div>`s with:

```jsx
              <div className="mb-5">
                <Badge>ESP32-CAM</Badge>
                <Badge>HTML</Badge>
                <Badge>CSS</Badge>
                <Badge>JavaScript</Badge>
                <Badge>Firebase</Badge>
                <Badge>IoT Sensors</Badge>
                <Badge>Arduino IDE</Badge>
              </div>
```

For Project 4 (Personal Portfolio), replace the tag block with:

```jsx
              <div className="mb-5">
                <Badge>React</Badge>
                <Badge>Tailwind CSS</Badge>
                <Badge>Vite</Badge>
                <Badge>EmailJS</Badge>
              </div>
```

- [ ] **Step 4: Restyle the GitHub link(s) in each card**

Replace each inline-styled `<a>` (e.g. `style={{ color: '#4a9eff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500', transition: 'all 0.3s ease' }}`) with a Tailwind class version:

```jsx
<a href="..." className="text-primary-400 font-medium text-sm hover:text-primary-300 transition-colors">GitHub Frontend</a>
```

(apply the same class string to every GitHub/Frontend/Backend link in the file, keeping each link's existing `href` and label text unchanged).

- [ ] **Step 5: Verify**

Run: `npm run dev`. Confirm all three project cards render in a responsive 1→2→3 column grid, tech tags show as blue pills, image slideshows for Project 1 and 2 still auto-advance with working indicator dots, and all GitHub links still point to the correct repos.

- [ ] **Step 6: Commit**

```bash
git add src/components/Projects/Projects.jsx
git commit -m "refactor: rebuild Projects section with Tailwind grid, shared Card and Badge"
```

---

### Task 7: Contact — shared Card + Button, token colors

**Files:**
- Modify: `src/components/Contact/Contact.jsx`

**Interfaces:**
- Consumes: `Card` from `../ui/Card`, `Button` from `../ui/Button`, `SectionHeading` from `../ui/SectionHeading`.
- Note: the footer block currently embedded at the end of this file (lines 489-514) is removed here and replaced by the real `Footer` component in Task 8 — do not duplicate it.

- [ ] **Step 1: Update imports and section wrapper**

Add at the top of `src/components/Contact/Contact.jsx`:

```jsx
import Card from '../ui/Card';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
```

Replace the `<section id="contact" style={{...}}>` opening through the heading block (lines 117-134) with:

```jsx
    <section id="contact" className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-surface-900 via-surface-800 to-primary-900">
      <SectionHeading
        title="Get In Touch"
        subtitle="Have a project in mind? Let's discuss how we can work together to bring your ideas to life."
      />
```

- [ ] **Step 2: Replace the Contact Information card**

Replace the `<div className="animated-border" style={{...}}>` wrapping "Contact Information" (lines 139-146, closing at line 323) with `<Card>` / `</Card>`, keeping all inner content (email/phone/location rows and social icons) unchanged except the icon-circle backgrounds, which should use the token color: replace `background: '#4a9eff'` with `className="bg-primary-400"` on those three icon-circle `<div>`s (converting them from inline `style` to Tailwind where the rest of the div's layout properties — `width`, `height`, `borderRadius`, `display`, `alignItems`, `justifyContent`, `marginRight` — become `className="w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-primary-400"`).

- [ ] **Step 3: Replace the Contact Form card**

Replace the `<div className="animated-border" style={{...}}>` wrapping "Send Me A Message" (lines 327-334) with `<Card>`, and replace the submit `<button>` (lines 463-482) with:

```jsx
                <Button as="button" type="submit" variant="primary" disabled={isLoading} className="border-none cursor-pointer">
                  {isLoading ? 'Sending...' : 'Send Message'}
                </Button>
```

Keep the form inputs, `handleInputChange`, `handleSubmit`, and the success/error popup logic completely unchanged.

- [ ] **Step 4: Remove the embedded footer block**

Delete the entire block from `{/* Footer integrated within Contact section */}` through its closing `</div>` (lines 489-514 of the current file) — this content moves to `Footer.jsx` in Task 8.

- [ ] **Step 5: Verify**

Run: `npm run dev`. Confirm the Contact section still shows both cards with the rotating border, icon circles are blue, submit button uses the shared gradient `Button`, the form still submits successfully via EmailJS (send a real test message), and no footer content appears twice (there will be a temporary gap where the footer was — Task 8 restores it).

- [ ] **Step 6: Commit**

```bash
git add src/components/Contact/Contact.jsx
git commit -m "refactor: rebuild Contact section with shared Card/Button, remove embedded footer"
```

---

### Task 8: Wire up Footer, drop Bootstrap dependency, fix overflow hack

**Files:**
- Modify: `src/components/Footer/Footer.jsx` (full rewrite)
- Modify: `src/App.jsx` (render `Footer` after `Contact`)
- Modify: `src/main.jsx` (remove Bootstrap CSS import)
- Modify: `package.json` (remove `bootstrap` dependency)
- Modify: `src/components/Skills/Skills.jsx` (Bootstrap icon reference is fine to keep — it's just an `<img>` of the Bootstrap logo, not a dependency usage; no change needed here)
- Modify: `src/main.css` (remove the heavy blue footer background override so the new minimal footer's own classes apply)

**Interfaces:**
- Produces: `<Footer />` (no props) rendered once, in `App.jsx`, after `<Contact />`.

- [ ] **Step 1: Rewrite `Footer.jsx`**

```jsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-900 border-t border-white/10 py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-white text-sm">
          &copy; {currentYear} Thinura Kahaduwa. All rights reserved.
        </p>
        <span className="text-primary-300 text-xs">
          Built with React &amp; Vite
        </span>
      </div>
    </footer>
  );
};

export default Footer;
```

- [ ] **Step 2: Render `Footer` in `App.jsx`**

Edit `src/App.jsx`:

```jsx

import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { AnimatedBackground } from './components/AnimatedBackground/AnimatedBackground';
import { setupScrollAnimations } from './utils/scrollAnimations';

const App = () => {
  useEffect(() => {
    setupScrollAnimations();
  }, []);

  return (
    <div className="relative">
      {/* Animated Canvas Background */}
      <AnimatedBackground />

      {/* Global floating particles */}
      <div className="global-particles">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="global-particle"></div>
        ))}
      </div>
      
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
```

- [ ] **Step 3: Remove the Bootstrap CSS import**

Edit `src/main.jsx`, delete the line `import 'bootstrap/dist/css/bootstrap.min.css'`.

- [ ] **Step 4: Remove the `bootstrap` dependency**

Run: `npm uninstall bootstrap`

- [ ] **Step 5: Remove the old heavy footer CSS override**

In `src/main.css`, delete the `/* Footer Styles */` block and its `footer::before` rule (around lines 1338-1357), since the new `Footer.jsx` now controls its own background/border via Tailwind classes directly on the `<footer>` element.

- [ ] **Step 6: Investigate and fix the horizontal-scroll hack**

With all sections now using Tailwind classes instead of inline `width: '100vw'` / `overflowX: 'hidden'`, check the browser at 320px–1920px widths for horizontal scrollbars. `body` in `src/App.css:13-25` already sets `overflow-x: hidden`, which is sufficient as a single global guard — if no horizontal scroll appears during testing, no further change is needed. If a horizontal scroll is found, identify the overflowing element via browser dev tools (`document.querySelectorAll('*').forEach(el => { if (el.scrollWidth > document.documentElement.clientWidth) console.log(el) })` in the console) and add `max-w-full` / `overflow-hidden` to that specific element rather than reintroducing per-section `100vw` hacks.

- [ ] **Step 7: Verify**

Run: `npm run dev`. Confirm the footer now renders once (not duplicated), shows the copyright line and "Built with React & Vite", matches the dark theme, `npm run build` completes without errors after removing Bootstrap, and no horizontal scrollbar appears at any viewport width tested.

- [ ] **Step 8: Commit**

```bash
git add src/components/Footer/Footer.jsx src/App.jsx src/main.jsx package.json package-lock.json src/main.css
git commit -m "feat: wire up Footer component, remove Bootstrap dependency and dead footer code"
```

---

## Self-Review Notes

- **Spec coverage:** Foundations (tokens/font/components) → Task 1. Navbar → Task 2. Home → Task 3. About → Task 4. Skills → Task 5. Projects → Task 6. Contact → Task 7. Footer wiring + Bootstrap removal + overflow investigation → Task 8. All spec sections A/B/C are covered.
- **Placeholder scan:** no TODO/TBD; overflow-hack step (Task 8, Step 6) gives an actual console command to run and an actual fallback fix rather than "handle it if needed" — this is investigation-with-fallback, not a placeholder, since the spec itself treats this as conditional ("if the issue persists").
- **Type/name consistency:** `Card`, `Badge`, `Button`, `SectionHeading` prop names are identical across their Task 1 definitions and every later task's usage (`variant`, `as`, `hoverLift`, `className`, `title`, `subtitle`).
- **Scope:** each task is independently runnable/verifiable via `npm run dev` and touches one section (or the shared foundation) — no task depends on a later task's code to compile, since Contact's footer removal (Task 7) only deletes markup and Task 8 adds the replacement immediately after.
