import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const rutas = [
  "/",
  "/experiencia/",
  "/proyectos/",
  "/docencia/",
  "/cursos/",
  "/habilidades/",
  "/contacto/",
  "/privacidad/",
];

for (const ruta of rutas) {
  test(`${ruta} carga, tiene h1 y no tiene violaciones graves de accesibilidad`, async ({ page }) => {
    await page.goto(ruta);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page).toHaveTitle(/David Romero/);
    const r = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag22aa"]).analyze();
    expect(r.violations.filter(v => ["serious", "critical"].includes(v.impact ?? ""))).toEqual([]);
  });
}

test("el contenido existe sin JavaScript", async ({ browser }) => {
  const ctx = await browser.newContext({ javaScriptEnabled: false });
  const page = await ctx.newPage();
  await page.goto("/proyectos/");
  await expect(page.getByRole("heading", { name: "Proyectos" })).toBeVisible();
  await expect(page.locator("article, .card").first()).toBeVisible();
});
