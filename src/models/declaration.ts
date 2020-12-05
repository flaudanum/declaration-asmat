import { Decipher } from 'crypto';
import { Interface } from 'readline';

export interface Declaration {
  semaines_par_an: number;
  jours_par_semaine: number;
  heures_par_semaine: number;
  heures_supplementaires?: number;
  // Nombre de jours de congés payés pris dans le mois
  jours_conges_payes_mois: number;
  // Euros / heure
  taux_horaire: number;
  jours_accueil_mois: number;
  // Euros / jour
  frais_entretien_journaliers: number;
}
