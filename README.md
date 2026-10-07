# TN Youth Stage 2026

A bright, mobile-first landing page and three-step registration experience for a sample statewide singing and dancing championship. Built with React, Vite, React Router, and plain CSS.

## Run it locally

```sh
npm install
npm run dev
```

## Design choices

- **Warm coral calls to action** sit against soft cream, mint, sky, and violet. The palette feels energetic and friendly while keeping the main action clear.
- **Three short steps** collect age group, contact and performance details, then confirm the entry. The fee appears in the review, and registration does not ask for payment information.
- **Age-based support** makes the right category easy to find. For participants aged 6–12, a guardian section and a plain-language reminder appear in the form.
- **Registration cues** repeat across the page, along with the closing date, category availability, prize pool, reassurance, and a progress indicator.
- The hero illustration and map are built with CSS, so this project does not need decorative image downloads.

## Edit event content

Update `src/data/event.js` to change the event details, age categories, fees, competitions, Tamil Nadu districts, FAQ copy, and testimonials. The age ranges and category accents also drive the registration flow.

The language control is a visual placeholder. English content is in the page components; add translations to `src/data` and connect them to a language state to enable Tamil throughout the experience.

## Next steps for a production event

- Connect the registration submit handler in `src/pages/Register.jsx` to an API and generate durable registration IDs.
- Add a payment provider after registration confirmation and show a secure hosted checkout.
- Add audition audio or video uploads with clear file limits and consent.
- Complete the Tamil translation and language switch across landing, form, and confirmation.
- Replace sample participant availability and testimonials with verified event data.

The form keeps its current data in React state while the visitor moves between steps. The confirmation details are passed through `sessionStorage` for the separate success route; no login or backend is required for this portfolio demo.
