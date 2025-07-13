import { useState } from "react";
import { NewsCard } from "./components/NewsCard";
import { NewsModal } from "./components/NewsModal";
import { getColumns } from "./components/Table/columns";
import { DataTable } from "./components/Table/table";
import type { News } from "./types/news.type";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function NewsPage() {
  const navigate = useNavigate();
  const [selectedNews, setSelectedNews] = useState<News | null>(null);

  const data: News[] = [
    {
      id: "8",
      createdAt: "2025-06-09T17:53:10.137Z",
      isActive: true,
      imageKey: "b3496682",
      title: "Novo Rilix Coaster",
      resume: "Rilix Coaster versão 4.0 chega ao mercado em janeiro de 2026.",
      description:
        "Com novos cenários imersivos, tecnologia aprimorada e ainda mais emoção, a Rilix Coaster 4.0 será lançada oficialmente em janeiro de 2026.",
    },
    {
      id: "8",
      createdAt: "2025-06-09T17:53:10.137Z",
      isActive: true,
      imageKey: "b3496682",
      title: "Novo Rilix Coaster",
      resume: "Rilix Coaster versão 4.0 chega ao mercado em janeiro de 2026.",
      description: `Com novos cenários imersivos, tecnologia aprimorada e ainda mais emoção, a Rilix Coaster 4.0 será lançada oficialmente em janeiro de 2026.
        Com novos cenários imersivos, tecnologia aprimorada e ainda mais emoção, a Rilix Coaster 4.0 será lançada oficialmente em janeiro de 2026.
        Com novos cenários imersivos, tecnologia aprimorada e ainda mais emoção, a Rilix Coaster 4.0 será lançada oficialmente em janeiro de 2026.
        Com novos cenários imersivos, tecnologia aprimorada e ainda mais emoção, a Rilix Coaster 4.0 será lançada oficialmente em janeiro de 2026.`,
    },
    {
      id: "8",
      createdAt: "2025-06-09T17:53:10.137Z",
      isActive: true,
      imageKey: "b3496682",
      title: "Novo Rilix Coaster",
      resume: "Rilix Coaster versão 4.0 chega ao mercado em janeiro de 2026.",
      description:
        "Com novos cenários imersivos, tecnologia aprimorada e ainda mais emoção, a Rilix Coaster 4.0 será lançada oficialmente em janeiro de 2026.",
    },
    {
      id: "8",
      createdAt: "2025-06-09T17:53:10.137Z",
      isActive: true,
      imageKey: "b3496682",
      title: "Novo Rilix Coaster",
      resume: "Rilix Coaster versão 4.0 chega ao mercado em janeiro de 2026.",
      description:
        "Com novos cenários imersivos, tecnologia aprimorada e ainda mais emoção, a Rilix Coaster 4.0 será lançada oficialmente em janeiro de 2026.",
    },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Notícias</h1>
        <Button onClick={() => navigate("/news/create")}>
          Criar nova notícia
        </Button>
      </div>

      <DataTable columns={getColumns(navigate)} data={data} />

      <h2 className="text-xl font-semibold mt-10 mb-4">Notícias Ativas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data
          .filter((news) => news.isActive)
          .map((news) => (
            <NewsCard
              key={news.id}
              news={news}
              onClick={() => setSelectedNews(news)}
            />
          ))}
      </div>

      <NewsModal news={selectedNews} onClose={() => setSelectedNews(null)} />
    </div>
  );
}
