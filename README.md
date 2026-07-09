# SauceDemo — Playwright BDD (TypeScript)

Automated end-to-end test suite for [https://www.saucedemo.com](https://www.saucedemo.com), built with **Playwright**, **playwright-bdd** (Gherkin/Cucumber syntax), **TypeScript**, and the **Page Object Model**.

## What's covered

- `features/login.feature` Valid login; 6 negative login cases (locked out user, invalid user/password, missing username, missing password)
- `features/sorting.feature` All 4 sort options (Name A–Z, Name Z–A, Price low–high, Price high–low), with assertions that the resulting order is actually correct
- `features/checkout.feature` Full happy-path journey: add all 6 products → validate cart badge/count → validate cart total → checkout info → item total vs. tax vs. displayed total → complete order → success title/message → cart badge cleared → burger menu → All Items → products page shown → cart empty → logout → login page shown
- `features/checkout-negative.feature` Checkout form blocked on missing first name / last name / postal code

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

### Why I chose this structure
- **Gherkin features** stay readable for non-technical stakeholders and map 1:1 to the required user journey.
- **Step definitions** are grouped by domain (login/sorting/cart/checkout) rather than by feature file, so shared steps (e.g. "I am logged in as a standard user") aren't duplicated.
- **Page Objects** isolate all selectors, so if SauceDemo's markup changes, only one file needs updating.
- **Fixtures** inject page objects via Playwright's native fixture system (no manual `new Page(...)` wiring in every step) and provide a small `testState` object so data captured in one step (e.g. cart total) can be asserted against in a later step.

## Setup

```bash
npm install
npx playwright install --with-deps   # downloads browser binaries (chromium/firefox/webkit)
```

## Running the tests

```bash
npx playwright test --project=chromium ./.features-gen/features/login.feature.spec.js --headed # Run a single test file on a specific browser (chromium, firefox, and webkit)
```

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

`npm run bdd:gen` (run automatically by the scripts above) compiles the `.feature` files + step definitions into runnable Playwright spec files under `.features-gen/`, which is what actually executes