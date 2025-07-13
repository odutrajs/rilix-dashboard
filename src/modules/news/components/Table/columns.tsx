import { MoreHorizontal } from "lucide-react";
import type { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import type { News } from "../../types/news.type";

export const columns: ColumnDef<News>[] = [
  {
    accessorKey: "title",
    header: "Título",
  },
  {
    accessorKey: "resume",
    header: "Resumo",
  },
  {
    accessorKey: "createdAt",
    header: "Criado em",
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));
      return date.toLocaleDateString("pt-BR");
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const news = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(news.id)}
            >
              Copiar ID da notícia
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => alert(`Ver notícia: ${news.title}`)}
            >
              Ver detalhes
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert(`Editar: ${news.id}`)}>
              Editar
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-red-600"
              onClick={() => alert(`Excluir: ${news.id}`)}
            >
              Excluir
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
