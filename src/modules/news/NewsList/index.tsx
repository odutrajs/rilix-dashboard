import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { NewsCard } from "./components/NewsCard";
import { NewsModal } from "./components/NewsModal";
import { getColumns } from "./components/Table/columns";
import { DataTable } from "./components/Table/table";
import type { News } from "./types/news.type";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getNews } from "./services/getNews";
import { NewsSkeleton } from "./components/NewsSkeleton";
import { deleteNews } from "./services/deleteNew";
import { toast } from "sonner";

export default function NewsPage() {
  const navigate = useNavigate();
  const [selectedNews, setSelectedNews] = useState<News | null>(null);

  const { data = [], isLoading } = useQuery({
    queryKey: ["news"],
    queryFn: getNews,
  });

  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteNews,
    onSuccess: () => {
      toast.success("Notícia excluída com sucesso!");
      queryClient.invalidateQueries({ queryKey: ["news"] });
    },
    onError: () => {
      toast.error("Erro ao excluir notícia.");
    },
  });

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Notícias</h1>
        <Button onClick={() => navigate("/news/create")}>
          Criar nova notícia
        </Button>
      </div>

      {isLoading ? (
        <NewsSkeleton />
      ) : (
        <>
          <DataTable
            columns={getColumns(navigate, (id) => deleteMutation.mutate(id))}
            data={data}
          />

          <h2 className="text-xl font-semibold mt-10 mb-4">Notícias Ativas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data
              .filter((news) => news.isActive)
              .map((news) => (
                <NewsCard
                  key={news.id}
                  news={news}
                  onClick={() => setSelectedNews(news)}
                  onEdit={() => navigate(`/news/${news.id}/edit`)}
                  onDelete={() => deleteMutation.mutate(news.id)}
                />
              ))}
          </div>
        </>
      )}

      <NewsModal news={selectedNews} onClose={() => setSelectedNews(null)} />
    </div>
  );
}
