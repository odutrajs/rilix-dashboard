import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const newsSchema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
  resume: z.string().min(1, "Resumo é obrigatório"),
  description: z.string().min(1, "Descrição é obrigatória"),
  imageKey: z.string().min(1, "Chave da imagem é obrigatória"),
});

type NewsFormData = z.infer<typeof newsSchema>;

const MOCK_NEWS = [
  {
    id: "8",
    createdAt: "2025-06-09T17:53:10.137Z",
    isActive: true,
    imageKey: "b3496682",
    title: "Novo Rilix Coaster",
    resume: "Rilix Coaster versão 4.0 chega ao mercado em janeiro de 2026.",
    description:
      "Com novos cenários imersivos, tecnologia aprimorada e ainda mais emoção, a Rilix Coaster 4.0 será lançada oficialmente em janeiro de 2026.",
  },
];

export default function NewsEditPage() {
  const { id } = useParams<{ id: string }>();
  const news = MOCK_NEWS.find((n) => n.id === id);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NewsFormData>({
    resolver: zodResolver(newsSchema),
    defaultValues: {
      title: news?.title || "",
      resume: news?.resume || "",
      description: news?.description || "",
      imageKey: news?.imageKey || "",
    },
  });

  const onSubmit = (data: NewsFormData) => {
    console.log("Notícia atualizada:", data);
  };

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
              <Label htmlFor="imageKey">Chave da Imagem</Label>
              <Input id="imageKey" {...register("imageKey")} />
              {errors.imageKey && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.imageKey.message}
                </p>
              )}
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
