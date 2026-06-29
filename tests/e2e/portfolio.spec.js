import { expect, test } from "@playwright/test";

test("home page loads without console errors", async ({ page }) => {
  const errors = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.goto("/#/");
  await expect(page.getByRole("heading", { name: /Je développe des applications web/ })).toBeVisible();
  await expect(page.getByAltText("Portrait de TETE NGITUKA JOEMI")).toBeVisible();
  expect(errors).toEqual([]);
});

test("project routes load", async ({ page }) => {
  await page.goto("/#/projects");
  await expect(page.getByRole("heading", { name: "Mes projets" })).toBeVisible();
  await page.goto("/#/projects/gold-sniper");
  await expect(page.getByRole("heading", { name: "Gold Sniper" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Voir le code" })).toHaveAttribute("href", "https://github.com/Joemi930/gold-sniper");
  await page.goto("/#/projects/clipwave");
  await expect(page.getByRole("heading", { name: "ClipWave" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Dépôt non public" })).toBeDisabled();
});

test("contact links exist", async ({ page }) => {
  await page.goto("/#/contact");
  await expect(page.getByRole("link", { name: /M'écrire par email/ })).toHaveAttribute("href", "mailto:joemitete12@gmail.com");
  await expect(page.getByRole("link", { name: /Voir GitHub/ })).toHaveAttribute("href", "https://github.com/Joemi930");
  await expect(page.getByRole("link", { name: /Voir LinkedIn/ })).toHaveAttribute("href", "https://cd.linkedin.com/in/joemi-tete-0a7221416");
  await expect(page.getByRole("link", { name: /Écrire sur WhatsApp/ })).toHaveAttribute("href", "https://wa.me/243844497360");
});

test("mobile menu opens and closes", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/#/");
  await page.getByRole("button", { name: "Ouvrir le menu" }).click();
  await expect(page.getByRole("dialog", { name: "Navigation mobile" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog", { name: "Navigation mobile" })).toBeHidden();
});
