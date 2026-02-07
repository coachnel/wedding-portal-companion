import FairpartSlider from "@/components/FairpartSlider";
import GuestSearch from "@/components/GuestSearch";
import { Heart } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen flex flex-col items-center bg-background">
      {/* Header */}
      <header className="w-full text-center pt-8 pb-2 px-4">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-1">
          Faire-Part de Mariage
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
          Anne <span className="text-primary">&</span> Alain-Gray
        </h1>
        <p className="mt-2 text-muted-foreground flex items-center justify-center gap-2 text-sm">
          <Heart className="w-4 h-4 text-primary fill-primary" />
          14 février 2026 — Port-Gentil
        </p>
      </header>

      {/* Faire-part images */}
      <FairpartSlider />

      {/* Guest search */}
      <GuestSearch />

      {/* Footer */}
      <footer className="w-full text-center py-6 px-4 border-t border-border">
        <p className="text-xs text-muted-foreground italic max-w-md mx-auto">
          « C'est pourquoi l'homme quittera son père et sa mère, et s'attachera à sa femme,
          et ils deviendront une seule chair. » — Genèse 2:24
        </p>
      </footer>
    </main>
  );
};

export default Index;
