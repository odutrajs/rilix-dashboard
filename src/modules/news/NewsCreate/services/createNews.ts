import api from "@/lib/api";

export type CreateNewsPayload = {
  title: string;
  resume: string;
  description: string;
  imageFile: FileList;
  isActive: boolean;
};

export async function postCreateNews(payload: CreateNewsPayload) {
  const formData = new FormData();

  formData.append("title", payload.title);
  formData.append("resume", payload.resume);
  formData.append("description", payload.description);
  formData.append("isActive", String(payload.isActive));
  formData.append("imageFile", payload.imageFile[0]);

  return api.post("/news", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
