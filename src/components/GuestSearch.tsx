import { useState } from "react";
import { guests, type Guest } from "@/data/guests";
import { Search } from "lucide-react";

const normalize = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, " ").trim();

const GuestSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Guest[] | null>(null);

  const handleSearch = (value: string) => {
    setQuery(value);
    const q = normalize(value);
    if (!q) {
      setResults(null);
      return;
    }
    const found = guests.filter((g) => {
      const full = normalize(`${g.nom} ${g.prenom}`);
      const reverse = normalize(`${g.prenom} ${g.nom}`);
      return full.includes(q) || reverse.includes(q);
    });
    setResults(found);
  };

  return (
    <section className="w-full max-w-lg mx-auto px-4 pb-10">
      <div className="gold-divider w-3/4 mx-auto mb-8" />
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 text-foreground">
        Retrouvez votre place
      </h2>

      {/* Search input */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Entrez votre nom ou prénom…"
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-card text-foreground
                     placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50
                     text-base font-body"
          autoComplete="off"
        />
      </div>

      {/* Results */}
      {results !== null && (
        <div className="space-y-3">
          {results.length === 0 ? (
            <p className="text-center text-muted-foreground italic">
              Aucun résultat trouvé. Vérifiez l'orthographe.
            </p>
          ) : (
            results.map((g, i) => (
              <div
                key={`${g.nom}-${g.prenom}-${i}`}
                className="result-card flex items-center justify-between p-4 rounded-lg bg-card border border-border shadow-sm"
              >
                <div>
                  <p className="font-semibold text-foreground">
                    {g.prenom} {g.nom}
                  </p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-primary text-primary-foreground whitespace-nowrap">
                  {g.statut}
                </span>
              </div>
            ))
          )}
        </div>
      )}
    </section>
  );
};

export default GuestSearch;
