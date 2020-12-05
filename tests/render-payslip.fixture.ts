// Déclaration sans heures supplémentaires
export const htmlDocumentCase0 = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .section {
            background-color: #7e7e7f;
            color: white;
            font-weight: bold;
            margin-top: 2em;
        }
    </style>
</head>

<body>
    <p class="section">Heures normales:</p>
    <p>(nombre d'heures de garde par semaine x nombre de semaines de garde programmées dans l'année)
        / 12 mois = 34 x 36 / 12
        <br />= 102 heures/mois</p>


    <p class="section">Nombre de jours d'activité:</p>
    <p>(nombre de jours de garde par semaine x nombre de semaines de garde programmées dans l'année)
        / 12 mois
        <br />= 34 x 36 / 12 =
        12 jours/mois</p>

    <p class="section">Nombre de jours de congés payés pris au cours du mois:</p>
    <p>8 jours</p>

    <p class="section">Salaire net total (hors indemnités entretien):</p>
    <p>102 x 3.7 €/h =
        377.40 €</p>

    <p class="section">Frais d'entretien</p>
    <p> 6 jours d'accueil x
        3 €/jour =
        18.00 €</p>

    <p class="section">Salaire total</p>
    <p>377.40 + 18.00 =
        395.40 €</p>

</body>

</html>`;

export const htmlDocumentCase1 = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .section {
            background-color: #7e7e7f;
            color: white;
            font-weight: bold;
            margin-top: 2em;
        }
    </style>
</head>

<body>
    <p class="section">Heures normales:</p>
    <p>(nombre d'heures de garde par semaine x nombre de semaines de garde programmées dans l'année)
        / 12 mois = 34 x 36 / 12
        <br />= 102 heures/mois</p>

    <p class="section">Heures supplémentaires</p>
    <p>4 heures</p>

    <p class="section">Nombre de jours d'activité:</p>
    <p>(nombre de jours de garde par semaine x nombre de semaines de garde programmées dans l'année)
        / 12 mois
        <br />= 34 x 36 / 12 =
        12 jours/mois</p>

    <p class="section">Nombre de jours de congés payés pris au cours du mois:</p>
    <p>8 jours</p>

    <p class="section">Salaire net total (hors indemnités entretien):</p>
    <p>106 x 3.7 €/h =
        392.20 €</p>

    <p class="section">Frais d'entretien</p>
    <p> 17 jours d'accueil x
        3 €/jour =
        51.00 €</p>

    <p class="section">Salaire total</p>
    <p>392.20 + 51.00 =
        443.20 €</p>

</body>

</html>`;
