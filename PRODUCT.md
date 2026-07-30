# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary — institutional scrutiny.** Funders, IPSS oversight bodies, partner organisations, press, and prospective institutional supporters who arrive to verify something specific: who governs the association, what its statutes say, what its accounts show. They are checking, not browsing. Success is that they find and download the right document and leave confident the association is legitimate, properly governed, and financially accountable — without having to contact anyone.

**Secondary — individual donors in Madeira.** People deciding whether to donate by bank transfer or consign 0,5% of their IRS. Welcome and supported, but explicitly subordinate: the contribution emphasis may recede in favour of governance and transparency. Confirmed as a deliberate ranking, not an oversight.

**Not served today.** Beneficiaries seeking assistance and prospective volunteers are not addressed anywhere on the site. Recorded as a known absence, not a current goal.

## Product Purpose

The public record of A.I.C. Madeira. It exists so that anyone assessing the association can verify its identity, history, governance and accounts from the site alone. Success is a scrutineer's question answered without an e-mail or a phone call.

## Positioning

What a neighbouring charity site could not truthfully copy:

- Continuous existence since **1617**, founded by São Vicente de Paulo and Santa Luiza de Marillac — the oldest lay women's association in the history of volunteering.
- Continuous presence in Madeira since **22 January 1876**, meeting monthly at the same seat (Hospício Princesa D. Maria Amélia) ever since.
- Consultative status at UNESCO, ECOSOC and the European Parliament.
- An unbroken published run of annual accounts, 2015–2025.

Verifiability is itself the position: every claim above is documented rather than asserted.

## Operating Context

- Monthly meeting at the Hospício Princesa D. Maria Amélia, Avenida do Infante 12, Funchal, with a *peditório* for those most in need — a tradition maintained since 1876.
- First statutes promulgated 26 April 1929; rectified statutes published for 2021.
- Annual *Relatório e Contas* published as PDF each year.
- Governance in three bodies — Assembleia Geral, Direção, Conselho Fiscal — with current officers named publicly on the instituição page.
- Registered as an IPSS. NIF **511072031**, used for IRS consignation via quadro 9 of anexo H, under "Instituições Particulares de Solidariedade Social". Legal name for that field: Associação Internacional de Caridade da Madeira.
- Contact: 291 220 358 · aic.funchal@gmail.com. The contact form posts to Formspree (form id `mjgqnbja`); there is no inbox integration beyond that.
- Donation receipts for IRS deduction are handled manually by e-mail, not by the site.

## Capabilities and Constraints

- Five static pages: início, instituição, documentos, contribuições, contactos.
- The documents page lists PDFs live from the public GitHub API (`ZYXPlay/aic-madeira-site`, `documentos/`), grouped by filename keyword. It reflects the GitHub main branch, not the local tree. Publishing a document means committing a PDF and pushing.
- Zero-dependency stack: plain HTML, one stylesheet, one JS file, and a python3-stdlib `build.py` that expands include markers into `dist/`. No npm, no framework, no tests, no linters.
- Deployed by GitHub Actions to GitHub Pages; custom domain `aicmadeira.pt`.
- **Relative URLs only** — the site must work both at the GitHub Pages URL and at the custom domain.
- No server-side code, database, authentication, or analytics. Any future capability must work as static files plus third-party endpoints.
- **Maintenance runs through the developer on request.** The association e-mails what it needs changed; a developer commits it. Content that needs frequent updating converts directly into developer workload — a cost to price in, never a capability to assume.
- Language: pt_PT only.

**Explicitly undecided:** whether a news or activities surface ever exists (there is neither content nor an updater for one today); whether beneficiary-facing or volunteer-recruitment content is ever wanted.

## Brand Commitments

- **Name:** A.I.C. Madeira — Associação Internacional da Caridade. The IRS-consignation field uses the legal variant *Associação Internacional de Caridade da Madeira*. Both forms appear on the site as published; do not reconcile one to the other without the Direção's word.
- **Logo:** `src/assets/logo.png` — three figures raising the world.
- **Mottos, as published:** «Contra as pobrezas, agir juntas.» (the AIC international theme; feminine plural, as the association is predominantly women) and the mission line «Dar assistência e promover a pessoa humana, sobretudo aos mais pobres, aos excluídos da sociedade, aos idosos que sofrem de solidão.»
- **Voice:** formal European Portuguese with formal address ("Gostaríamos de ouvi-lo", "o seu apoio"). Institutional, sober, restrained — never promotional, emotive, or urgent. Guillemets « » for quotation; decimal comma.
- An incumbent visual system exists in `src/styles.css` (named tokens, Lora + Karla, cream/terracotta/ink). Noted here as an existing asset only — this interview captured no visual mandate, and visual authority stays in the code until DESIGN.md records it.

## Evidence on Hand

**Real and usable:**

- Full institutional history with dates, founders, and the named first officers of 1876 (`src/pages/instituicao.html`).
- Current corpos sociais, with real names of all nine officers.
- Rectified statutes, 2021 — `documentos/AIC-Estatutos-retificados-ano-2021.pdf`.
- Eleven annual accounts, 2015 through 2025 — `documentos/Relatório e Contas <ano>.pdf`.
- One photograph: the Hospício — `src/assets/hospicio-1024x768.jpeg`.
- The logo, and real address, telephone, e-mail and NIF.

**Absent, and never to be fabricated:** no photographs of the association's activities or of any person; no description of current on-the-ground work beyond the monthly *peditório*; no count of families or people helped; no amounts distributed; no testimonials, beneficiary stories, case studies, press coverage, partner logos, or endorsements. This was confirmed as the complete inventory — the published material *is* the evidence base.

**Borrowed scale, clearly labelled:** the figures 200.000 volunteers, four continents, and fifty-two associations belong to the AIC international network, not to the Madeira association. Never present them as local numbers.

Any quantitative record of Madeira's own work exists only inside the *Relatório e Contas* PDFs and has never been extracted or verified for use as page content.

## Product Principles

1. **Verifiable over persuasive.** Every claim on this site is one a scrutineer can check against a published document. If it cannot be sourced, it does not go on the page.
2. **The documents are the product.** The path from arriving to holding the right PDF is the primary journey, and it is never subordinated to a donation appeal.
3. **Nothing invented, nothing borrowed.** Absence of content is a fact to respect, not a gap to fill — no placeholder achievements, no stock imagery of "the people we help", no invented figures. The network's global scale is context, never the Madeira association's own record.
4. **Low-maintenance by design.** Content that requires ongoing updating is a liability, because updating requires a developer. Prefer surfaces that stay true for years untouched.
5. **Dignity without pathos.** The mission concerns poverty, exclusion, and the loneliness of the elderly. The register stays sober and formal; no emotive imagery, no urgency devices.

## Accessibility & Inclusion

- **A formal accessibility standard is binding.** Working target: WCAG 2.1 AA — the level transposed by Portugal's Decreto-Lei n.º 83/2018. The obligation is confirmed; the exact instrument and conformance level should be verified with the association before publishing any formal accessibility declaration.
- **Language:** pt_PT only, with no translation planned. Foreign residents and visitors in Madeira are not an audience this site serves.
- No specific assistive-technology use or user-reported need has been established.
