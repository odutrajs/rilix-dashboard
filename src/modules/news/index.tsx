import { columns } from "./components/Table/columns";
import { DataTable } from "./components/Table/table";
import type { News } from "./types/news.type";

export default function NewsPage() {
  const data: News[] = [
    {
      id: "xc90-recharge",
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
      <h1 className="text-2xl font-bold mb-4">Notícias</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
