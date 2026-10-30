# Habibur Rahaman Fahim — personal website

A clean, CV-style portfolio with equal emphasis on industry and research. The design uses a compact top navigation, a portrait-led introduction, aligned section headings, readable system typography, and direct links to project evidence. It has no build step or external JavaScript, font, or analytics dependencies.

## Preview

Open `index.html` in a browser, or serve the repository:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Visit http://127.0.0.1:4173. Press Ctrl+C to stop the server. Refresh an existing file-based browser tab after editing.

## Structure

- `index.html`: profile, about, four engineering projects, an IEEE publication and three research projects, professional experience, education and skills, and contact.
- `css/portfolio.css`: complete standalone stylesheet with desktop, tablet, mobile, print, and reduced-motion layouts.
- `js/portfolio.js`: current-section indication, immediate navigation feedback, footer year, and progressive copy-email support with live success/failure feedback. Navigation, expandable technical details, email, and downloads work without JavaScript. Mobile navigation stays visible and does not require a menu toggle. The copy-email control is hidden without JavaScript or secure Clipboard API support; normal email links always remain usable.
- `images/profile.jpeg`: the supplied new headshot, copied unchanged. Used for the profile and social metadata.
- `assets/Habibur-Rahaman-Fahim-Resume.pdf`: the supplied updated resume, unchanged. It contains the original contact and work-rights details.
- `assets/fahim-black-holes-fmlds-2024.bib`: downloadable publication citation with supplied bibliographic fields; no inferred DOI.
- `favicon_io/favicon-32x32.png`: favicon.
- `robots.txt` and `sitemap.xml`: indexing support for `https://hr-fahim.github.io/`.

The page loads only `portfolio.css` and `portfolio.js`. Original Bootstrap, Colorlib, Sass, JavaScript, certificate, and demo-image assets remain in the repository for historical reference; they are not loaded by the current design.

## UI conventions

Inline SVG symbols in `index.html` provide consistent outline action and section icons. GitHub and LinkedIn brand geometry comes from the existing bundled Icomoon font; no icon CDN or new font dependency is introduced. Icons are decorative and paired with visible text. External destinations are announced to screen readers, detail controls use consistent chevrons, and interactive actions have visible keyboard focus. Mobile touch targets, sticky-header anchor offsets, reduced motion, and print styles are handled in CSS.

## Content decisions

The user's goal is equal emphasis on industry and research. Four applied engineering projects and three experimental research projects are shown separately. The IEEE publication has links to Xplore, Scholar, and a BibTeX download. Degrees and core skills are visible immediately. Secondary Australian workplace experience and selected learning/community involvement remain in native expandable sections. Technical writing is linked in the footer.

School-level education, certificate image galleries, generic expertise tiles, unrelated older engineering projects, and article previews are omitted from the public page. No invented testimonials, skill percentages, visitor statistics, unsupported availability claims, or nonfunctional contact forms are included.

## Sources

Content was updated using the supplied **Habibur Rahaman Fahim Resume.pdf** and the publicly indexed [LinkedIn profile](https://au.linkedin.com/in/hr-fahim). Direct LinkedIn access was blocked; its public search index supplied the NYC TLC and NHANES project descriptions. The resume and original website supplied the other project destinations, publication, and profile links.

The resume takes precedence over stale website employment titles, dates, and email. EkkBaz is labelled as an internship. Deakin completion is marked expected. Advanced Learning Algorithms omits a year because the resume and indexed LinkedIn profile disagree (2025 vs 2023). The publication uses the 2024 conference proceedings year from the resume; LinkedIn lists a February 2025 publication/indexing date. Model performance and employer outcomes are resume-reported results, not independently reproduced benchmarks. SETI is an experimental research project, not an additional claimed publication. Uni Eats is a team hackathon project with no claim of live customer adoption.

NYC TLC and NHANES link explicitly to LinkedIn because their repository URLs were not supplied or verified. Replace those destinations when direct project sources become available.

## Publishing

Source remains in the existing GitHub Pages checkout. No commit, push, or deployment was performed. Publish through the repository's normal workflow when ready. If changing the domain, update canonical, social-image, structured-data, robots, and sitemap URLs together.

## Attribution

The original website used the [Colorlib](https://colorlib.com) template distributed by [ThemeWagon](https://themewagon.com), under CC BY 3.0. Historical attribution is retained in the footer. The current layout uses its own standalone CSS and JavaScript.
