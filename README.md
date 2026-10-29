# The Courtyard Edit

Premium cookware and homeware storefront with an ancient-India-inspired sandstone and emerald visual world. Published source for [anvik-anadya-raghuvar/d2csteel](https://github.com/anvik-anadya-raghuvar/d2csteel).

## Run locally

Requires Node.js 18 or newer. No dependencies or build step.

```sh
npm start
```

Open `http://127.0.0.1:4173`. Run `npm run check` to validate the catalog, image assets and JavaScript syntax.

## Website

- 72 product families and 145 source option groups, with both kettle families excluded.
- 72 generated courtyard hero scenes with natural aspect ratios and no white inset panels.
- Source photographs retained in the option galleries; generated imagery is a creative interpretation, with source photographs defining construction and geometry.
- Seven proposed naming ranges: Agni, Bhoj, Rasa, Jal, Yatra, Nidhi and Sutra. Supplier names remain mapped and searchable.
- Homepage chapters, collections, search and filters, product pages, option galleries, zoom, persistent review bag, guest checkout rehearsal, test-order lookup, support drafts and policy drafts.

Prices, stock, business contacts, shipping and returns, verified supplier data and payment credentials remain pending. The browser-local checkout is a demo and does not charge customers or send orders. The temporary wordmark remains ATELIER 00.

## GitHub Pages

`.github/workflows/pages.yml` checks the source and deploys `dist/` through GitHub Actions on every push to `main`. Routing uses URL hashes and assets use relative paths, so the website works under a GitHub Pages repository path. Deployment requires GitHub Pages to use GitHub Actions as its build source.

## Files

- `dist/`: complete deployable website, catalog, optimized images and fonts.
- `docs/`: proposed names, scene prompts and source references, catalog inventories and launch notes.
- `check.mjs`: meaningful catalog and image integrity checks.
- `serve.mjs`: local preview server.

The original product archives, private tool credentials, local order data and previous hosting repository history are not included.
