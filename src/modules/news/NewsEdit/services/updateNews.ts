import api from "@/lib/api";

export type UpdateNewsPayload = {
  id: string;
  title: string;
  resume: string;
  description: string;
  imageFile?: File;
  isActive?: boolean;
};

export async function updateNews({
  id,
  title,
  resume,
  description,
  imageFile,
  isActive,
}: UpdateNewsPayload) {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("resume", resume);
  formData.append("description", description);
  if (typeof isActive === "boolean") {
    formData.append("isActive", String(isActive));
  }
  if (imageFile) {
    formData.append("imageFile", imageFile);
  }

  const response = await api.put(`/news/${id}`, formData);
  return response.data;
}
