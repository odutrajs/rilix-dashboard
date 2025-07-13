import { fixture, Selector } from "testcafe";

fixture("Teste noticias").page("http://localhost:5173/news/");

test("Verifica se a página de notícias exibe o botão de criar", async (t) => {
  const createButton = Selector("button").withText("Criar nova notícia");

  await t
    .expect(createButton.exists)
    .ok("Botão de criar nova notícia deve existir");
});
