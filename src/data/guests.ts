/**
 * Base de données des invités.
 * Pour ajouter un invité, ajoutez simplement un objet { nom, prenom, statut } dans le tableau.
 * Aucune modification du reste du code n'est nécessaire.
 */

export interface Guest {
  nom: string;
  prenom: string;
  statut: string;
}

export const guests: Guest[] = [
  // ─── VIP 1 ───
  { nom: "PRUD'HOMME", prenom: "Couple", statut: "VIP 1" },
  { nom: "Ntsala", prenom: "Couple", statut: "VIP 1" },
  { nom: "Fernand", prenom: "Pa", statut: "VIP 1" },
  { nom: "Carole", prenom: "Ma", statut: "VIP 1" },
  { nom: "Mbangoye", prenom: "Couple", statut: "VIP 1" },
  { nom: "Ikogou", prenom: "Couple", statut: "VIP 1" },

  // ─── VIP 3 ───
  { nom: "Nyoundou", prenom: "Couple", statut: "VIP 3" },
  { nom: "Bibang", prenom: "Couple", statut: "VIP 3" },
  { nom: "Maleghi", prenom: "Maxime", statut: "VIP 3" },
  { nom: "Fils", prenom: "", statut: "VIP 3" },
  { nom: "Clarence", prenom: "", statut: "VIP 3" },
  { nom: "Sabrina", prenom: "", statut: "VIP 3" },
  { nom: "AYINDO", prenom: "Couple", statut: "VIP 3" },

  // ─── Table 4 ───
  { nom: "Nze", prenom: "Couple", statut: "Table 4" },
  { nom: "Moussavou", prenom: "Couple", statut: "Table 4" },
  { nom: "Marlene", prenom: "", statut: "Table 4" },
  { nom: "Mabika", prenom: "Line", statut: "Table 4" },
  { nom: "Morgane", prenom: "", statut: "Table 4" },
  { nom: "Linda", prenom: "", statut: "Table 4" },
  { nom: "Renalte", prenom: "", statut: "Table 4" },

  // ─── Table 6 ───
  { nom: "Anvingui", prenom: "Couple", statut: "Table 6" },
  { nom: "Abessolo", prenom: "Couple", statut: "Table 6" },
  { nom: "Kassa", prenom: "Ginaire", statut: "Table 6" },
  { nom: "Kassa", prenom: "Junior", statut: "Table 6" },
  { nom: "Koumoussa", prenom: "Couple", statut: "Table 6" },
  { nom: "Maxime", prenom: "Pa", statut: "Table 6" },
  { nom: "Maxime", prenom: "Épouse", statut: "Table 6" },
  { nom: "Apanga", prenom: "Lionel", statut: "Table 6" },

  // ─── Table 8 ───
  { nom: "Koume", prenom: "Couple", statut: "Table 8" },
  { nom: "NGuema", prenom: "Couple", statut: "Table 8" },
  { nom: "Boumi", prenom: "Couple", statut: "Table 8" },
  { nom: "Pamba", prenom: "Rod", statut: "Table 8" },
  { nom: "Soso", prenom: "Maman", statut: "Table 8" },
  { nom: "Mariane", prenom: "Ma", statut: "Table 8" },
  { nom: "Lee Marvin", prenom: "", statut: "Table 8" },
  { nom: "Jolie", prenom: "", statut: "Table 8" },

  // ─── Table 10 ───
  { nom: "Dicka", prenom: "Paterne", statut: "Table 10" },
  { nom: "Ntsiga", prenom: "Love", statut: "Table 10" },
  { nom: "Keysia", prenom: "", statut: "Table 10" },
  { nom: "Luce N", prenom: "", statut: "Table 10" },
  { nom: "Nancy", prenom: "", statut: "Table 10" },
  { nom: "Daniel M", prenom: "", statut: "Table 10" },
  { nom: "Grace", prenom: "M.", statut: "Table 10" },
  { nom: "Choula", prenom: "Ya", statut: "Table 10" },
  { nom: "Arneau", prenom: "Ya", statut: "Table 10" },

  // ─── Table 12 ───
  { nom: "Pambou", prenom: "James", statut: "Table 12" },
  { nom: "Awa", prenom: "Oumar", statut: "Table 12" },
  { nom: "Moukambi", prenom: "Martial", statut: "Table 12" },
];
