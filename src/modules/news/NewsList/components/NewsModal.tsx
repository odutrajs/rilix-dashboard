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
      <DialogContent className="max-w-lg">
        {news && (
          <>
            <DialogHeader>
              <DialogTitle>{news.title}</DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                {new Date(news.createdAt).toLocaleDateString("pt-BR")}
              </DialogDescription>
            </DialogHeader>
            <img
              src={"./avatar.jpg"}
              alt={news.title}
              className="w-full h-64 object-cover rounded-md"
            />
            <p className="mt-4 text-sm text-muted-foreground whitespace-pre-line">
              {news.description}
            </p>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
