<h1>Calcul du salaire et déclaration</h1>

Si vous utilisez ce projet c'est que vous avez des gamins et que le calcul du salaire mensualisé de l’assistante maternelle de vos enfants et sa déclaration sur Pajemploi est un moment pénible.

**Attention**: cette application n'a rien d'officiel et n'est aucunement supportée par Pajemploi.

## Installation

Télécharger l'application via `git clone` ou par téléchargement direct comme une archive (`.zip`, ...).

Installer **Node.js** ([page officielle](https://nodejs.org)).

Ouvrir un terminal dans le dossier (décompressé) et installer les dépendances de l'application avec la commande `npm`:

```
npm install
```

Construire l'application avec la commande `npm`:

```
npm run build
```

Finalement, depuis le répertoire d'installation de l'application installer l'application de manière globale:

```
npm install -g ./
```

Tester l'installation de l'interface en ligne de commande en exécutant la commande `pajemploi`:

```
$ pajemploi
Vous n'avez pas spécifié le chemin jusqu'au fichier de déclaration .yml
```

## Utilisation

L'application `pajemploi` prend en argument d'entrée un fichier YAML contenant les informations de déclaration. Deux exemples sont fournis dans le dossier docs:

- [example.yml](./docs/example.yml)
- [example-extra-hours.yml](docs/example-extra-hours.yml) (déclaration avec heures complémentaires)
