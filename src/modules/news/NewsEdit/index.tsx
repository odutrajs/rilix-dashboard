import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getNewsById } from "./services/getNewsById";
import NewsEditSkeleton from "./components/NewsEditSkeleton";
import { updateNews } from "./services/updateNews";
import { toast } from "sonner";
import { Switch } from "@/components/ui/switch";

const newsSchema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
  resume: z.string().min(1, "Resumo é obrigatório"),
  description: z.string().min(1, "Descrição é obrigatória"),
  isActive: z.boolean(),
});

type NewsFormData = z.infer<typeof newsSchema>;

export default function NewsEditPage() {
  const { id } = useParams<{ id: string }>();
  const [preview, setPreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const { data: news, isLoading } = useQuery({
    queryKey: ["news", id],
    queryFn: () => getNewsById(id!),
    enabled: !!id,
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<NewsFormData>({
    resolver: zodResolver(newsSchema),
    defaultValues: {
      isActive: true,
    },
  });

  useEffect(() => {
    if (news) {
      reset({
        title: news.title,
        resume: news.resume,
        description: news.description,
        isActive: news.isActive ?? true,
      });

      setPreview(`${import.meta.env.VITE_API_URL}uploads/${news.imageKey}`);
      setImageFile(null);
    }
  }, [news, reset]);

  const mutation = useMutation({
    mutationFn: updateNews,
    onSuccess: () => {
      toast.success("Notícia atualizada com sucesso!");
      navigate("/news");
    },
    onError: () => {
      toast.error("Erro ao atualizar notícia.");
    },
  });

  const onSubmit = async (data: NewsFormData) => {
    mutation.mutate({
      id: id!,
      title: data.title,
      resume: data.resume,
      description: data.description,
      imageFile: imageFile || undefined,
      isActive: data.isActive,
    });
  };

  if (isLoading) {
    return <NewsEditSkeleton />;
  }

  if (!news) {
    return <div className="p-6">Notícia não encontrada.</div>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Editar Notícia</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="title">Título</Label>
              <Input id="title" {...register("title")} />
              {errors.title && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="resume">Resumo</Label>
              <Textarea id="resume" {...register("resume")} />
              {errors.resume && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.resume.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="description">Descrição</Label>
              <Textarea
                id="description"
                rows={6}
                {...register("description")}
              />
              {errors.description && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div>
              <Label className="block mb-2">Imagem atual</Label>
              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="mb-4 w-full h-150 object-cover rounded-md border"
                />
              )}

              <Input
                id="imageFile"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setImageFile(file);
                    setPreview(URL.createObjectURL(file));
                  }
                }}
              />

              <Label
                htmlFor="imageFile"
                className="inline-flex items-center gap-2 px-4 py-2 border border-input bg-transparent text-foreground rounded-md cursor-pointer hover:bg-accent hover:text-accent-foreground text-sm transition"
              >
                Selecionar nova imagem
              </Label>
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="isActive">Ativar notícia</Label>
              <Switch
                id="isActive"
                checked={watch("isActive")}
                onCheckedChange={(value) => {
                  setValue("isActive", value);
                }}
              />
            </div>

            <Button type="submit" disabled={isSubmitting}>
              Salvar alterações
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
