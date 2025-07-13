"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { News } from "../types/news.type";

type NewsModalProps = {
  news: News | null;
  onClose: () => void;
};

export function NewsModal({ news, onClose }: NewsModalProps) {
  return (
    <Dialog open={!!news} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-[95vw] sm:max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto">
        {news && (
          <>
            <DialogHeader>
              <DialogTitle className="text-lg md:text-xl lg:text-2xl">
                {news.title}
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                {new Date(news.createdAt).toLocaleDateString("pt-BR")}
              </DialogDescription>
            </DialogHeader>

            <img
              src={`${import.meta.env.VITE_API_URL}/uploads/${news.imageKey}`}
              alt={news.title}
              className="w-full h-64 md:h-150 lg:h-200 object-cover rounded-md"
            />

            <p className="mt-4 text-sm md:text-base text-muted-foreground whitespace-pre-line leading-relaxed">
              {news.description}
            </p>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
