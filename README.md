# SauceDemo — Playwright BDD (TypeScript)

Automated end-to-end test suite for [https://www.saucedemo.com](https://www.saucedemo.com), built with **Playwright**, **playwright-bdd** (Gherkin/Cucumber syntax), **TypeScript**, and the **Page Object Model**.

## What's covered

| Feature file | Scenarios |
|---|---|
| `features/login.feature` | Valid login; 6 negative login cases (locked out user, invalid user/password, missing username, missing password) |
| `features/sorting.feature` | All 4 sort options (Name A–Z, Name Z–A, Price low–high, Price high–low), with assertions that the resulting order is actually correct |
| `features/checkout.feature` | Full happy-path journey: add all 6 products → validate cart badge/count → validate cart total → checkout info → item total vs. tax vs. displayed total → complete order → success title/message → cart badge cleared → burger menu → All Items → products page shown → cart empty → logout → login page shown |
| `features/checkout-negative.feature` | Checkout form blocked on missing first name / last name / postal code |

## Project structure

```
saucedemo-playwright-bdd/
├── features/                  # Gherkin .feature files (business-readable scenarios)
│   ├── login.feature
│   ├── sorting.feature
│   ├── checkout.feature
│   └── checkout-negative.feature
├── steps/                     # Step definitions (glue code) - one file per feature area
│   ├── login.steps.ts
│   ├── sorting.steps.ts
│   ├── cart.steps.ts
│   └── checkout.steps.ts
├── pages/                     # Page Object Model - one class per app page
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   ├── CartPage.ts
│   ├── CheckoutStepOnePage.ts
│   ├── CheckoutStepTwoPage.ts
│   └── CheckoutCompletePage.ts
├── fixtures/
│   ├── pages.ts                # Wires page objects + shared scenario state into every test
│   └── testData.ts             # Reusable constants (valid user, expected success text)
├── playwright.config.ts        # Playwright + playwright-bdd config (projects, baseURL, reporters)
├── tsconfig.json
└── package.json
```

### Why this structure
- **Gherkin features** stay readable for non-technical stakeholders and map 1:1 to the required user journey.
- **Step definitions** are grouped by domain (login/sorting/cart/checkout) rather than by feature file, so shared steps (e.g. "I am logged in as a standard user") aren't duplicated.
- **Page Objects** isolate all selectors, so if SauceDemo's markup changes, only one file needs updating.
- **Fixtures** inject page objects via Playwright's native fixture system (no manual `new Page(...)` wiring in every step) and provide a small `testState` object so data captured in one step (e.g. cart total) can be asserted against in a later step.

## Setup

```bash
npm install
npx playwright install --with-deps   # downloads browser binaries (chromium/firefox/webkit)
```

> Note: this was built and validated in a sandboxed environment where browser-binary downloads were network-blocked. The suite was verified via `npx bddgen` (all 16 scenarios × 3 browsers = 48 tests resolve with zero ambiguous/undefined steps) and `tsc --noEmit` (clean compile). Run `npx playwright install` in your own environment before executing tests.

## Running the tests

```bash
npm test                    # bddgen + run everything (chromium, firefox, webkit)
npm run test:chromium       # chromium only - fastest for local iteration
npm run test:headed         # watch the browser while it runs
npm run test:ui             # Playwright's interactive UI mode
npm run test:login          # only @login tagged scenarios
npm run test:sorting        # only @sorting tagged scenarios
npm run test:cart           # only @cart tagged scenarios
npm run test:checkout       # only @checkout tagged scenarios (incl. negative)
npm run report              # open the last HTML report
```

`npm run bdd:gen` (run automatically by the scripts above) compiles the `.feature` files + step definitions into runnable Playwright spec files under `.features-gen/`, which is what actually executes.

## Design notes / assumptions

- **Valid user**: `standard_user` / `secret_sauce` is used throughout, per SauceDemo's documented test accounts.
- **Negative login** covers `locked_out_user`, a wrong password, an unknown username, and both required-field-empty cases.
- **Sorting validation** re-sorts the scraped product names/prices in JS and asserts the DOM order matches — this catches both a broken dropdown *and* a dropdown that changes visual order without actually re-sorting correctly.
- **Cart total math**: the sum of individual item prices is captured once on the Cart page (`testState.cartItemsTotal`) and re-asserted against the "Item total" line shown on the Checkout Overview page, satisfying "validate cart total before checkout" *and* "item total displayed matches calculated total" with one consistent value.
- **Tax validation** only asserts that a tax line is visible and non-negative (SauceDemo computes tax dynamically; asserting an exact percentage would make the test brittle without documented tax rules).
- **Post-purchase checks** verify: success header text, success body text, cart badge fully hidden (not just "0"), burger menu → All Items returns to a real Products page, cart is empty after purchase, and logout returns to the login form.
- Tests run across **chromium, firefox, and webkit** by default (configurable in `playwright.config.ts`).

## Possible extensions

- Add API-level or storage-state-based login to speed up scenarios that don't need to test login itself.
- Parameterize the checkout happy path to run once per browser/user type (e.g. `problem_user`, `performance_glitch_user`) to catch SauceDemo's intentionally-buggy accounts.
- Add visual regression checks for `problem_user` (known to have broken product images).
