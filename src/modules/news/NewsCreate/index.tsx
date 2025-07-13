"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ImagePlus } from "lucide-react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const newsSchema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
  resume: z.string().min(1, "Resumo é obrigatório"),
  description: z.string().min(1, "Descrição é obrigatória"),
  imageFile: z
    .any()
    .refine((files) => files?.length === 1, "A imagem é obrigatória"),
  isActive: z.boolean(),
});

type FormData = z.infer<typeof newsSchema>;

export default function NewsCreatePage() {
  const [preview, setPreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(newsSchema),
    defaultValues: {
      isActive: true,
    },
  });

  const onSubmit = (data: FormData) => {
    const file = data.imageFile?.[0];
    console.log("Formulário enviado:", {
      ...data,
      imageFile: file,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("imageFile", e.target.files as FileList);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Criar Nova Notícia</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
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
              <Label htmlFor="description">Descrição completa</Label>
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
              <Label className="block mb-2">Imagem da notícia</Label>

              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="mb-4 w-full h-52 object-cover rounded-md border"
                />
              ) : (
                <div className="mb-4 w-full h-52 flex items-center justify-center border border-dashed rounded-md text-muted-foreground text-sm">
                  Nenhuma imagem selecionada
                </div>
              )}

              <Input
                id="imageFile"
                type="file"
                accept="image/*"
                className="hidden"
                {...register("imageFile")}
                onChange={handleImageChange}
              />

              <Label
                htmlFor="imageFile"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md cursor-pointer hover:bg-primary/90 text-sm"
              >
                <ImagePlus className="w-4 h-4" />
                Selecionar imagem
              </Label>

              {errors.imageFile && (
                <p className="text-sm text-red-500 mt-2">
                  {errors.imageFile.message as string}
                </p>
              )}
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
          </CardContent>

          <CardFooter className="flex justify-end gap-4">
            <Button type="submit">Salvar</Button>
            <Button variant="ghost" type="button">
              Cancelar
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
