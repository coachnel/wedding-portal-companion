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
  { nom: "NTSALA", prenom: "Couple", statut: "Table 1" },
  { nom: "Ya Paterne & PAPA MAXIME", prenom: "", statut: "Table 1" },
  { nom: "Mbangoye", prenom: "Couple", statut: "Table 1" },
  { nom: "KOUSSALOUMBA", prenom: "Couple", statut: "Table 1" },

  // ─── TABLE 2 ───
  { nom: "Pa Fernand & Ma Carole", prenom: "", statut: "Table 2" },
  { nom: "Koumba Serge", prenom: "Couple", statut: "Table 2" },
  { nom: "Mboumba L.M.", prenom: "Couple", statut: "Table 2" },
  { nom: "Mbourou Edaire", prenom: "Couple", statut: "Table 2" },
  { nom: "Dang-minang Rick & Dianne", prenom: "", statut: "Table 2" },

  // ─── TABLE 3 ───
  { nom: "Nyoundou", prenom: "Couple", statut: "Table 3" },
  { nom: "Bibang", prenom: "Couple", statut: "Table 3" },
  { nom: "Boumi", prenom: "Couple", statut: "Table 3" },
  { nom: "MOUNDJIKA", prenom: "Couple", statut: "Table 3" },
  { nom: "LOUNDOU", prenom: "Couple", statut: "Table 3" },

  // ─── TABLE 4 ───
  { nom: "Oroula Gonket", prenom: "Couple", statut: "Table 4" },
  { nom: "Nganga Sammuel", prenom: "Couple", statut: "Table 4" },
  { nom: "Catherine & Benoitte", prenom: "", statut: "Table 4" },
  { nom: "Athanas & Marina", prenom: "", statut: "Table 4" },
  { nom: "Kombé Eugene & Mayéré Francis", prenom: "", statut: "Table 4" },

  // ─── TABLE 5 ───
  { nom: "ABEKE", prenom: "Couple", statut: "Table 5" },
  { nom: "NDJIAMI", prenom: "Couple", statut: "Table 5" },
  { nom: "Lionel Apanga", prenom: "Couple", statut: "Table 5" },
  { nom: "Grace & Mamita", prenom: "", statut: "Table 5" },
  { nom: "Lude & Lise Mayeye", prenom: "", statut: "Table 5" },

  // ─── TABLE 6 ───
  { nom: "Ngouangui", prenom: "Couple", statut: "Table 6" },
  { nom: "Obiang", prenom: "Couple", statut: "Table 6" },
  { nom: "Otando", prenom: "Couple", statut: "Table 6" },
  { nom: "Ranoké", prenom: "Couple", statut: "Table 6" },
  { nom: "Mourendé", prenom: "Couple", statut: "Table 6" },

  // ─── TABLE 7 ───
  { nom: "Nze", prenom: "Couple", statut: "Table 7" },
  { nom: "Line Mabika", prenom: "", statut: "Table 7" },
  { nom: "Moupila (Asaf)", prenom: "Couple", statut: "Table 7" },
  { nom: "Ginaire & Mombo girl", prenom: "", statut: "Table 7" },
  { nom: "Linda & Morgane", prenom: "", statut: "Table 7" },

  // ─── TABLE 8 ───
  { nom: "Therèse & Emmanuel", prenom: "", statut: "Table 8" },
  { nom: "Nathan & Ezechiel", prenom: "", statut: "Table 8" },
  { nom: "Leandre & Janisse", prenom: "", statut: "Table 8" },
  { nom: "Blandine & Joel", prenom: "", statut: "Table 8" },
  { nom: "Franck & Naomie", prenom: "", statut: "Table 8" },

  // ─── TABLE 9 ───
  { nom: "Ma Soso & Ben Bayoka", prenom: "", statut: "Table 9" },
  { nom: "Patricia", prenom: "", statut: "Table 9" },
  { nom: "Albin", prenom: "", statut: "Table 9" },
  { nom: "Pamba", prenom: "Couple", statut: "Table 9" },
  { nom: "Choula", prenom: "Couple", statut: "Table 9" },

  // ─── TABLE 10 ───
  { nom: "Mboumba Siméon", prenom: "Couple", statut: "Table 10" },
  { nom: "Darius & Ulda", prenom: "", statut: "Table 10" },
  { nom: "Van & Kelipha", prenom: "", statut: "Table 10" },
  { nom: "Dariana & Prisca", prenom: "", statut: "Table 10" },
  { nom: "Priscilia & Tatiana", prenom: "", statut: "Table 10" },

  // ─── TABLE 11 ───
  { nom: "Junior Kassa & Olam Glen", prenom: "", statut: "Table 11" },
  { nom: "Love Ntsiga & Keysia", prenom: "", statut: "Table 11" },
  { nom: "Luce Ntsiga & Nancy", prenom: "", statut: "Table 11" },
  { nom: "Edwige & IBA", prenom: "", statut: "Table 11" },

  // ─── TABLE 12 ───
  { nom: "Kombila", prenom: "Couple", statut: "Table 12" },
  { nom: "Matamba", prenom: "Couple", statut: "Table 12" },
  { nom: "Akénéqué", prenom: "Couple", statut: "Table 12" },
  { nom: "Nzogué", prenom: "Couple", statut: "Table 12" },
  { nom: "Bissawou", prenom: "Couple", statut: "Table 12" },

  // ─── TABLE 13 ───
  { nom: "Pambou", prenom: "James", statut: "Table 13" },
  { nom: "Oumar Awe", prenom: "", statut: "Table 13" },
  { nom: "Nzamba Ken", prenom: "Couple", statut: "Table 13" },
  { nom: "Charles", prenom: "", statut: "Table 13" },
  { nom: "Koumba Ismael", prenom: "", statut: "Table 13" },

  // ─── TABLE 14 ───
  { nom: "Aronda Christelle & Nathalie", prenom: "", statut: "Table 14" },
  { nom: "Brigithe & Jevy", prenom: "", statut: "Table 14" },
  { nom: "Mod & Patrice", prenom: "", statut: "Table 14" },
  { nom: "Somboua Carole & Yena Sidon", prenom: "", statut: "Table 14" },
  { nom: "Aude & Sandrine", prenom: "", statut: "Table 14" },

  // ─── TABLE 15 ───
  { nom: "Anvingui", prenom: "Couple", statut: "Table 15" },
  { nom: "Abessolo", prenom: "Couple", statut: "Table 15" },
  { nom: "Renalte & Marlene Bi", prenom: "", statut: "Table 15" },
  { nom: "Koume", prenom: "Couple", statut: "Table 15" },
  { nom: "NGuema", prenom: "Couple", statut: "Table 15" },

  // ─── TABLE 16 ───
  { nom: "Stive Mavougou & Tatiana", prenom: "", statut: "Table 16" },
  { nom: "Toutou & Larisse", prenom: "", statut: "Table 16" },
  { nom: "Stephani & Ritha", prenom: "", statut: "Table 16" },
  { nom: "Rosi & Jeff", prenom: "", statut: "Table 16" },
  { nom: "Oroula Sostene", prenom: "Couple", statut: "Table 16" },

  // ─── TABLE 17 ───
  { nom: "Moussavou", prenom: "Couple", statut: "Table 17" },
  { nom: "SAKA", prenom: "Couple", statut: "Table 17" },
  { nom: "Raivo", prenom: "Couple", statut: "Table 17" },
  { nom: "Koumoussa", prenom: "Couple", statut: "Table 17" },

  // ─── TABLE 18 ───
  { nom: "Veronique & Ketza", prenom: "", statut: "Table 18" },
  { nom: "Marthe & Olivia", prenom: "", statut: "Table 18" },
  { nom: "IGAMBAS", prenom: "Couple", statut: "Table 18" },
  { nom: "IKOGOU", prenom: "Couple", statut: "Table 18" },
  { nom: "Rose & Davila", prenom: "", statut: "Table 18" },

  // ─── TABLE 19 ───
  { nom: "Mervine & Chekina", prenom: "", statut: "Table 19" },
  { nom: "Annaelle & Grasiella", prenom: "", statut: "Table 19" },
  { nom: "Copinette & toutounette", prenom: "", statut: "Table 19" },
  { nom: "Orely & Siriana", prenom: "", statut: "Table 19" },
  { nom: "Tendresse & Marth", prenom: "", statut: "Table 19" },

  // ─── TABLE 20 ───
  { nom: "Copine & Mado", prenom: "", statut: "Table 20" },
  { nom: "Deborha & Guilene", prenom: "", statut: "Table 20" },
  { nom: "Kethia & Sabrina", prenom: "", statut: "Table 20" },
  { nom: "Mesia & Nkouendi Grace", prenom: "", statut: "Table 20" },
  { nom: "Merveille & Esther", prenom: "", statut: "Table 20" },
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
