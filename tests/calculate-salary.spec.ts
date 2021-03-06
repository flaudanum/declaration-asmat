import { Declaration } from '../src/models/declaration';
import { calculateSalary, CalculationResult } from '../src/salary/calculation';

describe('Un salaire', () => {
  it("est créé à partir d'une déclaration", () => {
    const data: Declaration = {
      semaines_par_an: 36,
      heures_par_semaine: 34,
      jours_par_semaine: 4,
      jours_conges_payes_mois: 8,
      taux_horaire: 3.7,
      jours_accueil_mois: 6,
      frais_entretien_journaliers: 3.0
    };

    const result: CalculationResult = calculateSalary(data);
    expect(result).toEqual({
      // Heures normales
      baseHours: (34 * 36) / 12,
      monthlyDaysOfActivity: (4 * 36) / 12,
      netSalary: ((34 * 36) / 12) * 3.7,
      maintenanceExpenses: 6 * 3.0,
      totalIncome: ((34 * 36) / 12) * 3.7 + 6 * 3.0
    });
  });

  it("peut être créé à partir d'une déclaration indiquant des heures supplémentaires", () => {
    const data: Declaration = {
      semaines_par_an: 36,
      heures_par_semaine: 34,
      heures_supplementaires: 4,
      jours_par_semaine: 4,
      jours_conges_payes_mois: 8,
      taux_horaire: 3.7,
      jours_accueil_mois: 17,
      frais_entretien_journaliers: 3.0
    };

    const result: CalculationResult = calculateSalary(data);
    expect(result).toEqual({
      // Heures normales
      baseHours: (34 * 36) / 12,
      monthlyDaysOfActivity: (4 * 36) / 12,
      netSalary: ((34 * 36) / 12 + 4) * 3.7,
      maintenanceExpenses: 17 * 3.0,
      totalIncome: ((34 * 36) / 12 + 4) * 3.7 + 17 * 3.0
    });
  });
});
