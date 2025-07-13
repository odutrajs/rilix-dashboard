import api from "@/lib/api";

export async function deleteNews(id: string) {
  const response = await api.delete(`/news/${id}`);
  return response.data;
}
