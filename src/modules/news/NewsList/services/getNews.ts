import api from "@/lib/api";
import { News } from "../types/news.type";

export async function getNews(): Promise<News[]> {
  const response = await api.get("/news");
  return response.data;
}
