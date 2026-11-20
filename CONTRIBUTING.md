# Contributing

## Add a component

Read [the component and preview contract](references/component-preview-contract.md) before adding a catalogue entry.

Each entry is self-contained: the component, a working preview, a reference, declared dependencies, and tests. Previews must fit their container, use semantic theme tokens, and leave the page theme alone.

## Tests

```bash
npm test
```

`npm test` runs the installer checks and the static preview checks. The static checks are a first gate. Also run the responsive and theme matrix in the contract through the showcase source-sync path.

Before publishing a change:

```bash
python scripts/verify_skill.py      # package integrity and catalogue coverage
python scripts/test_release.py      # installer and release regressions
python evals/catalog_eval.py        # catalogue evaluation
```
