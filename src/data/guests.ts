/**
 * Base de données des invités.
 * Pour ajouter un invité, ajoutez simplement un objet { nom, prenom, statut } dans le tableau.
 * Aucune modification du reste du code n'est nécessaire.
 *
 * Anti-doublon : la fonction getGuests() filtre les doublons sur (nom + prenom + statut).
 */

export interface Guest {
  nom: string;
  prenom: string;
  statut: string;
}

const rawGuests: Guest[] = [
  // ─── TABLE 1 ───
  { nom: "PRUD'HOMME", prenom: "Couple", statut: "Table 1" },
  { nom: "Ntsala", prenom: "Couple", statut: "Table 1" },
  { nom: "Paterne", prenom: "Ya", statut: "Table 1" },
  { nom: "Orateur", prenom: "", statut: "Table 1" },
  { nom: "Mbangoye", prenom: "Couple", statut: "Table 1" },
  { nom: "KOUSSALOUMBA", prenom: "Couple", statut: "Table 1" },

  // ─── TABLE 2 ───
  { nom: "Fernand", prenom: "Pa", statut: "Table 2" },
  { nom: "Carole", prenom: "Ma", statut: "Table 2" },
  { nom: "Koumba Serge", prenom: "Couple", statut: "Table 2" },
  { nom: "Mboumba L.M", prenom: "Couple", statut: "Table 2" },
  { nom: "Mod", prenom: "", statut: "Table 2" },
  { nom: "Patrice", prenom: "", statut: "Table 2" },
  { nom: "Dang-minang Rick", prenom: "", statut: "Table 2" },
  { nom: "Dianne", prenom: "", statut: "Table 2" },

  // ─── TABLE 3 ───
  { nom: "Nyoundou", prenom: "Couple", statut: "Table 3" },
  { nom: "Bibang", prenom: "Couple", statut: "Table 3" },
  { nom: "Ikogou", prenom: "Couple", statut: "Table 3" },
  { nom: "MOUNDJIKA", prenom: "Couple", statut: "Table 3" },
  { nom: "AYINDO", prenom: "Couple", statut: "Table 3" },

  // ─── TABLE 4 ───
  { nom: "Oroula Gonket", prenom: "", statut: "Table 4" },
  { nom: "Nganga Sammuel", prenom: "Couple", statut: "Table 4" },
  { nom: "Brigihe", prenom: "", statut: "Table 4" },
  { nom: "Jevy", prenom: "", statut: "Table 4" },
  { nom: "Mbourou Edaire", prenom: "Couple", statut: "Table 4" },
  { nom: "Kombé Egeune", prenom: "", statut: "Table 4" },
  { nom: "Mayéré Francis", prenom: "", statut: "Table 4" },

  // ─── TABLE 5 ───
  { nom: "Nze", prenom: "Couple", statut: "Table 5" },
  { nom: "Moussavou", prenom: "Couple", statut: "Table 5" },
  { nom: "Moupila", prenom: "Couple", statut: "Table 5" },
  { nom: "Ginaire", prenom: "", statut: "Table 5" },
  { nom: "Mombo Girl", prenom: "", statut: "Table 5" },
  { nom: "Linda", prenom: "", statut: "Table 5" },
  { nom: "Morgane", prenom: "", statut: "Table 5" },

  // ─── TABLE 6 ───
  { nom: "Ngouangui", prenom: "Couple", statut: "Table 6" },
  { nom: "Obiang", prenom: "Couple", statut: "Table 6" },
  { nom: "Otando", prenom: "Couple", statut: "Table 6" },
  { nom: "Ranoké", prenom: "Couple", statut: "Table 6" },
  { nom: "Mourendé", prenom: "Couple", statut: "Table 6" },

  // ─── TABLE 7 ───
  { nom: "Anvingui", prenom: "Couple", statut: "Table 7" },
  { nom: "Abessolo", prenom: "Couple", statut: "Table 7" },
  { nom: "Renalte", prenom: "", statut: "Table 7" },
  { nom: "Marlene", prenom: "", statut: "Table 7" },
  { nom: "Koumoussa", prenom: "Couple", statut: "Table 7" },
  { nom: "Maxime", prenom: "Pa", statut: "Table 7" },
  { nom: "Maxime", prenom: "Épouse", statut: "Table 7" },

  // ─── TABLE 8 ───
  { nom: "Thérèse", prenom: "", statut: "Table 8" },
  { nom: "Emmanuel", prenom: "", statut: "Table 8" },
  { nom: "Nathan", prenom: "", statut: "Table 8" },
  { nom: "Ezechiel", prenom: "", statut: "Table 8" },
  { nom: "Leandre", prenom: "", statut: "Table 8" },
  { nom: "Janisse", prenom: "", statut: "Table 8" },
  { nom: "Blandine", prenom: "", statut: "Table 8" },
  { nom: "Joel", prenom: "", statut: "Table 8" },
  { nom: "Franck", prenom: "", statut: "Table 8" },
  { nom: "Naomie", prenom: "", statut: "Table 8" },

  // ─── TABLE 9 ───
  { nom: "Koume", prenom: "Couple", statut: "Table 9" },
  { nom: "NGuema", prenom: "Couple", statut: "Table 9" },
  { nom: "Boumi", prenom: "Couple", statut: "Table 9" },
  { nom: "Pamba", prenom: "Couple", statut: "Table 9" },
  { nom: "Soso", prenom: "Maman", statut: "Table 9" },
  { nom: "Ben Bayoka", prenom: "", statut: "Table 9" },

  // ─── TABLE 10 ───
  { nom: "Mbouba Siméon", prenom: "Couple", statut: "Table 10" },
  { nom: "Darius", prenom: "", statut: "Table 10" },
  { nom: "Ulda", prenom: "", statut: "Table 10" },
  { nom: "Van", prenom: "", statut: "Table 10" },
  { nom: "Kelipha", prenom: "", statut: "Table 10" },
  { nom: "Dariana", prenom: "", statut: "Table 10" },
  { nom: "Prisca", prenom: "", statut: "Table 10" },
  { nom: "Priscilia", prenom: "", statut: "Table 10" },
  { nom: "Tatiana", prenom: "", statut: "Table 10" },

  // ─── TABLE 11 ───
  { nom: "Kassa", prenom: "Junior", statut: "Table 11" },
  { nom: "Olam Glen", prenom: "", statut: "Table 11" },
  { nom: "Ntsiga", prenom: "Love", statut: "Table 11" },
  { nom: "Keysia", prenom: "", statut: "Table 11" },
  { nom: "Luce N", prenom: "", statut: "Table 11" },
  { nom: "Nancy", prenom: "", statut: "Table 11" },
  { nom: "Daniel M", prenom: "", statut: "Table 11" },
  { nom: "IBA", prenom: "", statut: "Table 11" },
  { nom: "Grace", prenom: "M.", statut: "Table 11" },
  { nom: "Choula", prenom: "Ya", statut: "Table 11" },

  // ─── TABLE 12 ───
  { nom: "Kombila", prenom: "Couple", statut: "Table 12" },
  { nom: "Matamba", prenom: "Couple", statut: "Table 12" },
  { nom: "Akénégue", prenom: "Couple", statut: "Table 12" },
  { nom: "Nzogué", prenom: "Couple", statut: "Table 12" },
  { nom: "Bissawou", prenom: "Couple", statut: "Table 12" },

  // ─── TABLE 13 ───
  { nom: "Pambou", prenom: "James", statut: "Table 13" },
  { nom: "Awa", prenom: "Oumar", statut: "Table 13" },
  { nom: "Nzamba Ken", prenom: "Couple", statut: "Table 13" },
  { nom: "Charles", prenom: "", statut: "Table 13" },
  { nom: "Koumba Ismael", prenom: "", statut: "Table 13" },

  // ─── TABLE 14 ───
  { nom: "Choupette", prenom: "", statut: "Table 14" },
  { nom: "Nathali", prenom: "", statut: "Table 14" },
  { nom: "Catherine", prenom: "", statut: "Table 14" },
  { nom: "Benoitte", prenom: "", statut: "Table 14" },
  { nom: "Athanas L.", prenom: "", statut: "Table 14" },
  { nom: "Carole", prenom: "", statut: "Table 14" },
  { nom: "Sidonie", prenom: "", statut: "Table 14" },
  { nom: "Aude", prenom: "", statut: "Table 14" },
  { nom: "Sandrine", prenom: "", statut: "Table 14" },

  // ─── TABLE 15 ───
  { nom: "Meme Edwige", prenom: "", statut: "Table 15" },
  { nom: "Lee Marvin", prenom: "", statut: "Table 15" },
  { nom: "Jolie", prenom: "", statut: "Table 15" },
  { nom: "Apanga", prenom: "Lionel", statut: "Table 15" },
  { nom: "Lud", prenom: "Ya", statut: "Table 15" },
  { nom: "Mamita", prenom: "", statut: "Table 15" },
  { nom: "Cash Money", prenom: "", statut: "Table 15" },

  // ─── TABLE 16 ───
  { nom: "Mavougou", prenom: "Stive", statut: "Table 16" },
  { nom: "Tatiana", prenom: "", statut: "Table 16" },
  { nom: "Toutou", prenom: "", statut: "Table 16" },
  { nom: "Larissa", prenom: "", statut: "Table 16" },
  { nom: "Stephani", prenom: "", statut: "Table 16" },
  { nom: "Ritha", prenom: "", statut: "Table 16" },
  { nom: "Rosi", prenom: "", statut: "Table 16" },
  { nom: "Jeff", prenom: "", statut: "Table 16" },
  { nom: "Carene", prenom: "", statut: "Table 16" },
  { nom: "Davy", prenom: "", statut: "Table 16" },

  // ─── TABLE 17 ───
  { nom: "Mayeye", prenom: "Lise", statut: "Table 17" },
  { nom: "Loundou", prenom: "Mr et Mm", statut: "Table 17" },
  { nom: "YouYou", prenom: "Ya", statut: "Table 17" },
  { nom: "Raïvo", prenom: "Couple", statut: "Table 17" },

  // ─── TABLE 18 ───
  { nom: "Copine", prenom: "", statut: "Table 18" },
  { nom: "Mado", prenom: "", statut: "Table 18" },
  { nom: "Deborha", prenom: "", statut: "Table 18" },
  { nom: "Guilene", prenom: "", statut: "Table 18" },
  { nom: "Biijoux", prenom: "", statut: "Table 18" },
  { nom: "Sabrina", prenom: "", statut: "Table 18" },
  { nom: "Mesia", prenom: "", statut: "Table 18" },
  { nom: "Nkouendi Grace", prenom: "", statut: "Table 18" },
  { nom: "Merveille", prenom: "", statut: "Table 18" },
  { nom: "Esther", prenom: "", statut: "Table 18" },

  // ─── TABLE 19 ───
  { nom: "Mervine", prenom: "", statut: "Table 19" },
  { nom: "Chekina", prenom: "", statut: "Table 19" },
  { nom: "Annaelle", prenom: "", statut: "Table 19" },
  { nom: "Grasiella", prenom: "", statut: "Table 19" },
  { nom: "Copinette", prenom: "", statut: "Table 19" },
  { nom: "Toutounette", prenom: "", statut: "Table 19" },
  { nom: "Orely", prenom: "", statut: "Table 19" },
  { nom: "Siriana", prenom: "", statut: "Table 19" },
  { nom: "Tendresse", prenom: "", statut: "Table 19" },
  { nom: "Marth", prenom: "", statut: "Table 19" },
];

/**
 * Anti-doublon : filtre les entrées identiques sur (nom + prenom + statut).
 */
function deduplicateGuests(list: Guest[]): Guest[] {
  const seen = new Set<string>();
  return list.filter((g) => {
    const key = `${g.nom.toLowerCase()}|${g.prenom.toLowerCase()}|${g.statut.toLowerCase()}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export const guests: Guest[] = deduplicateGuests(rawGuests);
