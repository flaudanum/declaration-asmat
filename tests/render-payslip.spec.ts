import { Declaration } from '../src/models/declaration';
import { calculateSalary, CalculationResult } from '../src/salary/calculation';
import { renderPaySlip } from '../src/salary/rendering';

describe("La fiche de paie de l'assistante maternelle", () => {
  it('est générée au format HTML', () => {
    const declaration: Declaration = {
      semaines_par_an: 36,
      heures_par_semaine: 34,
      jours_par_semaine: 4,
      jours_conges_payes_mois: 8,
      taux_horaire: 3.7,
      jours_accueil_mois: 6,
      frais_entretien_journaliers: 3.0
    };
    const result: CalculationResult = calculateSalary(declaration);

    const htmlDocument: string = renderPaySlip(declaration, result);
    // console.log(htmlDocument);
  });
});
