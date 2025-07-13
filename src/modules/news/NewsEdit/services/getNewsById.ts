import api from "@/lib/api";

export async function getNewsById(id: string) {
  const response = await api.get(`/news/${id}`);
  return response.data;
}
