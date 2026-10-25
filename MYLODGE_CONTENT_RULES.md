# MyLodge — Homepage Content & Layout Rules

## Mandatory: Maximum Two Visual Lines

Every **homepage headline, subheading, card title, descriptive paragraph, and CTA label** must fit within **one or two visible lines** in its own layout at the target viewport. This applies equally to **English and Korean**. Never leave awkward three-or-more-line text blocks like the Chiang Mai heading in the reference screenshot.

This is a **visual line-count rule**, not a requirement to insert hard-coded line breaks in every string. Prefer rewriting copy to be shorter, then adjust its available width and responsive font sizing. Do not achieve compliance by making text tiny or overflowing its container. For intentionally long legal disclosures, accessibility text, and detailed documents, prioritize complete legible content; use an appropriately designed disclosure area rather than truncating essential information.

## Copywriting

- Use direct, clear language. Avoid awkward machine-translated phrases, abstract metaphors, or jargon.
- Keep headings concise and meaningful; use sentence case unless a design specifically calls for another style.
- Korean and English must convey the same meaning and have comparable visual hierarchy, but need not be literal word-for-word translations.
- Never insert manual `<br>` just to force desktop wrapping if it breaks mobile. Use responsive text containers and intentional breakpoint-specific line breaks only when needed.
- Do not use ellipsis or CSS line-clamp to hide essential copy. Rewrite it.
- Preserve verified MyLodge product facts, pricing, and disclaimers; do not invent benefits or services.

## Responsive QA — Required Every Time

Whenever Codex creates or edits homepage content or layout:

1. Check both `lang=en` and `lang=ko`.
2. Verify rendered line counts for each headline, subheading, card title, descriptive paragraph, and CTA label at desktop (1440px), tablet (768px), and mobile (390px); also inspect 320px for overflow.
3. Adjust copy first, then container widths, typography, and spacing. Keep typography readable.
4. Check there are no overlaps with sticky navigation, clipped text, or unexpected wrapping.
5. Take browser screenshots and review them, especially near the edited section.
6. Report any intentional exception and its reason. Do not claim success without checking the rendered page.

## Current Screenshot Fix

The homepage destination block includes a long Chiang Mai headline ("Chapter 1. Chiang Mai. Where the global tech community and digital nomads …") that wraps to multiple lines. Rewrite it into a clear headline that fits in at most two lines in English and Korean. Suggested starting point:

- EN: **Chiang Mai: Work, Stay & Connect**
- KO: **치앙마이에서 일하고, 머물고, 교류하세요**

Shorten the nearby Korea villa title and descriptions as needed. Ensure the two destination blocks have a consistent visual rhythm.

## Repository Enforcement

Place this file in the **repository root** as `MYLODGE_CONTENT_RULES.md` and add a reference to it in the repository-root `AGENTS.md` (create `AGENTS.md` if missing):

> For all MyLodge homepage edits, read and follow `MYLODGE_CONTENT_RULES.md`. Verify English and Korean line counts at desktop, tablet, and mobile before finishing.

Treat these rules as standing project instructions for every future Codex task. If a task conflicts with the rules, flag the conflict rather than silently ignoring it.
