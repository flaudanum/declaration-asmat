import { Declaration } from '../src/models/declaration';
import { calculateSalary, CalculationResult } from '../src/salary/calculation';
import { renderPaySlip } from '../src/salary/rendering';

import { htmlDocumentCase0, htmlDocumentCase1 } from './render-payslip.fixture';

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
    expect(htmlDocument).toEqual(htmlDocumentCase0);
  });

  it('peut générée au format HTML en indiquant des heures supplémentaires', () => {
    const declaration: Declaration = {
      semaines_par_an: 36,
      heures_par_semaine: 34,
      heures_supplementaires: 4,
      jours_par_semaine: 4,
      jours_conges_payes_mois: 8,
      taux_horaire: 3.7,
      jours_accueil_mois: 17,
      frais_entretien_journaliers: 3.0
    };

    const result: CalculationResult = calculateSalary(declaration);

    const htmlDocument: string = renderPaySlip(declaration, result);
    expect(htmlDocument).toEqual(htmlDocumentCase1);
  });
});
