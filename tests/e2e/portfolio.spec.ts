import { expect, test } from "@playwright/test";

test("apresenta a proposta, os contatos e os projetos sem erros de execução", async ({
  page,
}, testInfo) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("./");
  await expect(page).toHaveTitle(/Sites e landing pages/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "presença",
  );
  const contact = page.getByRole("link", {
    name: "Vamos falar sobre seu projeto",
  });
  await expect(contact).toHaveAttribute(
    "href",
    /^https:\/\/wa.me\/5541984559193/,
  );
  await page.getByRole("link", { name: "Conhecer meu trabalho" }).click();
  await expect(page).toHaveURL(/#projetos$/);
  await page
    .locator("summary")
    .filter({ hasText: "Entenda o projeto" })
    .first()
    .click();
  await expect(
    page.getByRole("heading", { name: "O desafio", exact: true }).first(),
  ).toBeVisible();
  await expect(page.locator("#projetos")).toContainText("95 mil");
  const featured = page.locator("#projetos article").first();
  await expect(
    featured.getByRole("link", { name: "Visitar landing page" }),
  ).toHaveAttribute(
    "href",
    "https://metanoia-21-ketlyn.gaby-sendeski.chatgpt.site/",
  );
  await expect(featured.locator("img")).toHaveJSProperty("naturalWidth", 1440);
  await page
    .locator("summary")
    .filter({ hasText: "O que preciso ter para começar?" })
    .click();
  await expect(
    page.getByText("Uma ideia do objetivo da página", { exact: false }),
  ).toBeVisible();
  await page.screenshot({
    path: testInfo.outputPath("desktop.png"),
    fullPage: true,
  });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({ path: testInfo.outputPath("desktop-hero.png") });
  expect(errors).toEqual([]);
});

test("tema persiste após recarregar e continua acessível", async ({
  page,
}, testInfo) => {
  await page.goto("./");
  await page.getByRole("button", { name: "Ativar tema claro" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.screenshot({ path: testInfo.outputPath("light-theme.png") });
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.getByRole("button", { name: "Ativar tema escuro" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});

test("menu mobile abre, fecha com Escape e navega até contato", async ({
  page,
}, testInfo) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("./");
  await page.getByRole("button", { name: "Abrir navegação" }).click();
  const nav = page.getByRole("navigation", { name: "Navegação no celular" });
  await expect(nav).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(nav).toBeHidden();
  await expect(
    page.getByRole("button", { name: "Abrir navegação" }),
  ).toBeFocused();
  await page.getByRole("button", { name: "Abrir navegação" }).click();
  await nav.getByRole("link", { name: "Contato", exact: true }).click();
  await expect(nav).toBeHidden();
  await expect(page).toHaveURL(/#contato$/);
  await page.screenshot({
    path: testInfo.outputPath("mobile.png"),
    fullPage: true,
  });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({ path: testInfo.outputPath("mobile-hero.png") });
});

test("layout não transborda em telas pequenas ou desktop", async ({ page }) => {
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("./");
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(overflow, `Transbordamento em ${width}px`).toBe(false);
  }
});

test("conteúdo e perguntas continuam disponíveis sem JavaScript", async ({
  browser,
  baseURL,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    baseURL,
  });
  const page = await context.newPage();
  await page.goto("./");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await page
    .locator("summary")
    .filter({ hasText: "Podemos conversar sobre uma landing page?" })
    .click();
  await expect(
    page.getByText("Sim. Me conte sobre seu negócio", { exact: false }),
  ).toBeVisible();
  await context.close();
});
