import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { News } from "../types/news.type";
import { getImageUrl } from "../utils/getImageUrl";
import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";

type NewsCardProps = {
  news: News;
  onClick?: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

export function NewsCard({ news, onClick, onEdit, onDelete }: NewsCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow p-0 overflow-hidden group relative">
      <CardHeader className="p-0 relative">
        <img
          src={getImageUrl(news.imageKey)}
          alt={news.title}
          className="w-full h-48 object-cover"
          onClick={onClick}
        />

        <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition">
          <Button
            size="icon"
            variant="outline"
            className="h-8 w-8"
            onClick={(e) => {
              e.stopPropagation();
              onEdit();
            }}
          >
            <Pencil className="w-4 h-4" />
          </Button>
          <Button
            size="icon"
            variant="destructive"
            className="h-8 w-8"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
          >
            <Trash className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4" onClick={onClick}>
        <CardTitle className="text-lg">{news.title}</CardTitle>
        <CardDescription>{news.resume}</CardDescription>
      </CardContent>
    </Card>
  );
}
