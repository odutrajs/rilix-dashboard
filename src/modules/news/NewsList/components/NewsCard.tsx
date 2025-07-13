import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { News } from "../types/news.type";
type NewsCardProps = {
  news: News;
  onClick: () => void;
};

export function NewsCard({ news, onClick }: NewsCardProps) {
  return (
    <Card
      onClick={onClick}
      className="hover:shadow-md transition-shadow p-0 overflow-hidden cursor-pointer"
    >
      <CardHeader className="p-0">
        <img
          src={"./avatar.jpg"}
          alt={news.title}
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg">{news.title}</CardTitle>
        <CardDescription>{news.resume}</CardDescription>
      </CardContent>
    </Card>
  );
}
