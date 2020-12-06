#!/usr/bin/env node
import fs from 'fs';
import process, { exit } from 'process';

import yaml from 'js-yaml';
import { calculateSalary, CalculationResult } from './salary/calculation';
import { renderPaySlip } from './salary/rendering';
import { Declaration } from './models/declaration';

const cliArgs: string[] = process.argv;

if (cliArgs.length == 2) {
  console.error(
    "Vous n'avez pas spécifié le chemin jusqu'au fichier de déclaration .yml"
  );
  exit(1);
}

// The first 'item' in the command is the Node.js CLI 'node', the second is 'app.js'
const filePath: string = cliArgs[2];

// Lecture du fichier YAML de déclaration
let declaration: Declaration;
try {
  const fileContent: string = fs.readFileSync(filePath, 'utf-8');
  // TODO: check incoming data before casting
  declaration = yaml.safeLoad(fileContent) as Declaration;
} catch (error) {
  console.error(error);
  throw error;
}
const result: CalculationResult = calculateSalary(declaration);

// Construit le rendu HTML de la fiche de paie
const htmlDocument: string = renderPaySlip(declaration, result);

// Crée le fichier HTML dans le répertoire courant
fs.writeFileSync('payslip.html', htmlDocument, { encoding: 'utf8' });
