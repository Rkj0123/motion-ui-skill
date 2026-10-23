# Component and preview contract

The source catalogue feeds the Motion UI showcase at deployment. A new component must render correctly after syncing its source, registry entry, preview and dependencies, without a component-specific host change.

## Layout

Design against the **available container width**, including a 264px inner preview width on a narrow phone. Validate the surrounding page at 360px and 390px, a 768px tablet, and a 1280px desktop. Desktop preview controls on a phone do not create extra physical screen space.

- Give demo roots `w-full min-w-0` where they own a layout. Use `w-full max-w-sm`, or a preferred fixed width with `max-w-full`, rather than an unconditional desktop width. Let flex/grid children shrink with `min-w-0` and use wrapping or a single-column layout where needed.
- Count padding and borders inside the width budget. A 280px card plus 48px of outer padding cannot fit a 264px preview. Use smaller base padding and responsive increases.
- Tables and terminal/code samples may own horizontal scrolling. Put `min-w-0 max-w-full overflow-x-auto` on their scrolling region; do not make the page or the whole demo scroll sideways. Never hide meaningful text to conceal overflow.
- A fixed-height visual canvas may clip its decorative effects. It must not clip menus, focus rings, labels, action buttons or expanded content. Do not use `overflow-hidden` as a layout repair.
- Keep labels readable and controls usable at their rendered size. Prefer reflow and content growth to scaling an interactive desktop demo down into miniature controls.

## Overlays and interaction

Menus and popovers must constrain their width to the available viewport, flip or reposition at boundaries, and allow internal vertical scrolling for long lists. Inline absolute overlays need a containing layout that allows their expanded bounds; portalled overlays need the same theme variables as their trigger. Keep existing portal/focus infrastructure rather than adding a second overlay system.

Check the **open state**, including the final menu item, not only the closed trigger. Check touch activation, keyboard activation/navigation, Escape, focus return, disabled states and reduced motion. Do not depend on hover for the only way to use a component. Do not intercept page scrolling unnecessarily. Remove listeners, observers and animation frames on unmount.

## Themes

Import `createPortal` from `@/lib/portal` when mounting an overlay into the body. The shared helper preserves a preview's optional theme scope without changing the portal container or standalone rendering. For Radix/Vaul portals, call `usePortalTheme` unconditionally at the owning component's top level and merge that class onto the actual portalled Content and Overlay. Preserve the primitive's refs, focus handling and Presence boundary. Declare `lib/portal.tsx` in every affected catalogue entry's `util_files` and `react-dom` in its dependencies, including composed components. Individual component installs are checked by the installer suite.


Use existing semantic foreground, background, surface, border, accent and muted tokens. Neutral page surfaces and text should follow light, dark and aesthetic themes. Intentional illustration/material colors may stay fixed, but surrounding labels and interactive states must remain readable in every theme.

`lib/foundation.css` includes complete CSS color values, such as `var(--surface)`; some legacy Tailwind tokens contain HSL channels used as `hsl(var(--background))`. Keep those formats separate. Do not put a complete color inside `hsl()`, set global theme attributes from a preview, import host site CSS, or hard-code a white background with black text for a normal control. Do not rely only on a root `.dark` class when the host can theme an individual preview. Reuse inherited semantic variables.

## Preview and catalogue API

- Use the existing registry schema and the correct preview file/export name. Export a real React component with locally bound imports, supply required props, and provide small, deterministic demo data. State belongs inside each preview instance.
- Put the maintained demo in `components/previews/<category>/<slug>.preview.tsx` and declare it in the entry's `preview_files`. Legacy `src/previews` wrappers can be local fallbacks in the showcase; editing an undeclared fallback does not promise it replaces a curated host demo. Update registry references when moving a preview, and keep one maintained copy.
- Keep framework adapters and dependencies declared using existing conventions. A preview must not assume a particular application router, viewport, hostname or another demo's state.
- Avoid global CSS selectors and duplicate fixed SVG/filter IDs. Use scoped styles and React `useId` for per-instance IDs. Do not mutate document/body styles or themes without restoring them.
- Add or update the component's reference and tests alongside code. Preserve semantic controls, accessible names and focus behavior.

## Required verification

Run `npm test` from the source repository. `npm run test:previews` checks typed preview contracts and literal fixed widths above 264px in both preview directories. The responsive check is deliberately static: it does not prove CSS-module, inline-style, portal or expanded-state geometry.

Then sync the source into the showcase using its documented source-sync command and run its build, runtime catalogue audit and responsive checks. Inspect the component at the page widths above in light, dark and aesthetic themes. Open overlays, expand content, resize after opening, and confirm every action remains reachable with no page overflow. Inspect representative screenshots; a successful build does not prove the layout. Record the source revision and any real-device behavior that was only simulated.
