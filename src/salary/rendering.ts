import fs from 'fs';
import path from 'path';

import Handlebars from 'handlebars';
import { Declaration } from '../models/declaration';
import { CalculationResult } from './calculation';

export const renderPaySlip = (
  declaration: Declaration,
  result: CalculationResult
) => {
  const templatePath = path.resolve(__dirname, 'payslip.hbs');
  const htmlTemplate = fs.readFileSync(templatePath, {
    encoding: 'utf8'
  });
  const hbsTemplate = Handlebars.compile(htmlTemplate);
  const calculation = {
    ...result,
    fmtNetSalary: result.netSalary.toFixed(2),
    fmtMaintenanceExpenses: result.maintenanceExpenses.toFixed(2),
    fmtTotalIncome: result.totalIncome.toFixed(2)
  };
  return hbsTemplate({ declaration, calculation });
};
