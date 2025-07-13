import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full items-center justify-center p-4">
      <Card className="max-w-md w-full text-center">
        <CardHeader>
          <CardTitle className="text-3xl">Página não encontrada</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">
            A página que você tentou acessar não existe.
          </p>
          <Button onClick={() => navigate("/news")}>
            Voltar para Notícias
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
