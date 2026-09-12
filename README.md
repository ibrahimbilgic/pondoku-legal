# pondoku-legal

Pondoku's legal and support pages, served by GitHub Pages.

Static HTML, no build step and no dependencies. `lang.js` switches between the
Turkish and English sections, which both ship in the markup, so the pages stay
readable with JavaScript off. `.nojekyll` keeps Pages from processing them.

- `privacy.html` — the privacy policy the app links to from Settings and both
  store listings point at
- `kvkk.html` — the Turkish KVKK disclosure
- `terms.html` — terms of use
- `support.html` — the questions people actually ask

The policy describes the app as it is built: no accounts, no analytics, no
server of ours. If the app starts collecting something new, this repo changes in
the same commit as the code that collects it.
