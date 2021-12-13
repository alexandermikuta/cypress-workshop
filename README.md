# cypress-workshop
## Roadmap des Workshops

- [x] Beschreibung der Requirements
- [x] Beschreibung der IDE-Einrichtung
- [x] Beschreibung des Frontend-Projektes
- [x] Beschreibung Cypress-Installation
- [x] Beschreibung der CI/CD-Pipeline
  - [x] Github
  - [x] Cypress-Dashboard mit Projekt/Github verknüpfen

## Allgemeines

:bulb: Im Ordner "workshop" befinden sich die Slides dises Workshops

## Requirements

- Node.js

## Einrichtung der IDE

:bulb: Die zugehörige .vscode-Datei befindet sich im Beispielprojekte

Beim öffnen des Projektes in VS-Code sollten einige nützliche Plugins zur Installation vorgeschlagen werden.
Bei Bedarf findet man weitere IDE-Plugins unter: https://docs.cypress.io/guides/tooling/IDE-integration

## Einrichtung des Frontend-Projekts

```console
npx create-next-app nextjs-frontend --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
cd nextjs-frontend
```

## Einrichtung von Cypress

```console
cd nextjs-frontend
npm install --save-dev cypress
```

In package.json folgende Zeile zu "scripts"-Objekt hinzufügen:
```json
"cypress": "cypress open"
```

Folgende File-Struktur wird automatisch bei erstem öffnen von Cypress angelegt:
```
.
├── downloads
├── fixtures
│   └── example.json
├── integration
│   └── app.spec.js
├── plugins
│   └── index.js
└── support
    ├── commands.js
    └── index.js
```

Die Specs werden dabei im  Ordner `cypress/integration` abgelegt.
Sobald eine erste Spec geschrieben wurde, kann diese in Cypress ausgeführt werden:

Starten der Cypress-Tests:
```console
npm run build
npm run starter

npm run cypress (in separatem Terminal-Fenster)
```

## Konfiguration der CI/CD-Pipeline

### GitHub
.yml-Datei mit Github-Action (`https://github.com/marketplace/actions/cypress-io`) im Ordner `.github/workflows` hinzufügen.

### Einrichtung des Cypress-Dashboards
- neues Projekt im Cypress-Dashboard anlegen
- projectId in cypress.json eintragen
- Secret für `CYPRESS_RECORD_KEY` in Github eintragen