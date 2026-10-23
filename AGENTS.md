# Component authoring

Preserve existing components' public APIs and accessibility when fixing presentation.
Read [the component and preview contract](references/component-preview-contract.md) before adding or changing a component, its demo, or its styles.

- Components and previews must adapt to their containing width, not just `window.innerWidth`.
- Use semantic theme tokens; never change the page theme from a demo.
- Keep each catalogue entry self-contained: component, working preview, reference, dependencies and tests. Do not require a slug-specific patch in the showcase host.
- Run `npm test` before delivery. The static preview checks are a first gate, not proof of browser layout; run the responsive and theme matrix in the contract through the showcase's source-sync path too.
- Keep fixes focused, preserve unrelated work, and document any browser or hardware behavior that remains unverified.
