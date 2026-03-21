import { test, expect } from '@playwright/test'

const routes = [
  { name: 'home', path: '/research.html#/' },
  { name: 'step-2.1', path: '/research.html#/step/2.1' },
  { name: 'step-2.2', path: '/research.html#/step/2.2' },
  { name: 'step-2.3', path: '/research.html#/step/2.3' },
  { name: 'step-2.8', path: '/research.html#/step/2.8' },
]

for (const route of routes) {
  test(`${route.name} matches screenshot`, async ({ page }) => {
    await page.goto(route.path)
    await page.waitForLoadState('networkidle')
    await expect(page).toHaveScreenshot(`${route.name}.png`, {
      maxDiffPixelRatio: 0.01,
    })
  })
}
