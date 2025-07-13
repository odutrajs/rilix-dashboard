import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NewsPage from "./index";

vi.mock("./services/getNews", () => ({
  getNews: () => Promise.resolve([]),
}));

describe("NewsPage", () => {
  it("deve renderizar o título e botão de criar notícia", async () => {
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <NewsPage />
        </BrowserRouter>
      </QueryClientProvider>
    );

    expect(
      await screen.findByRole("heading", { name: /notícias/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /criar nova notícia/i })
    ).toBeInTheDocument();
  });
});
