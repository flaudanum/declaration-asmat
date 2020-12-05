import { Declaration } from '../models/declaration';

const monthPerYear = 12;

export interface CalculationResult {
  // Heures normales
  baseHours: number;
  monthlyDaysOfActivity: number;
  netSalary: number;
  maintenanceExpenses: number;
  totalIncome: number;
}

export const calculateSalary = (data: Declaration) => {
  const hoursPerWeek: number = data.heures_par_semaine;
  const numberOfWeeks: number = data.semaines_par_an;
  const numberOfDaysPerWeek: number = data.jours_par_semaine;
  const hourlyRate: number = data.taux_horaire;
  const childCareDaysInMonth: number = data.jours_accueil_mois;
  const dailyMaintenanceExpenses: number = data.frais_entretien_journaliers;
  const extraHours: number = data.heures_supplementaires ?? 0;

  // Calculs
  const baseHours = (hoursPerWeek * numberOfWeeks) / monthPerYear;
  const netSalary = (baseHours + extraHours) * hourlyRate;
  const maintenanceExpenses = childCareDaysInMonth * dailyMaintenanceExpenses;

  const result: CalculationResult = {
    baseHours,
    monthlyDaysOfActivity: (numberOfDaysPerWeek * numberOfWeeks) / monthPerYear,
    netSalary,
    maintenanceExpenses,
    totalIncome: netSalary + maintenanceExpenses
  };

  return result;
};
