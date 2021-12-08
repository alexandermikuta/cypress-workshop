# cypress-workshop
## Roadmap des Workshops

- [ ] Beschreibung der Requirements
- [ ] Beschreibung der IDE-Einrichtung
- [ ] Beschreibung des Frontend-Projektes
- [ ] Beschreibung Cypress
  - [ ] Setup
  - [ ] Dashboard
- [ ] Beschreibung der CI/CD-Pipeline
  - [ ] Github
  - [ ] Netlify

## Allgemeines

:bulb: Im Ordner "workshop" befinden sich die Slides dises Workshops

## Requirements

- Node.js

## Einrichtung der IDE

:bulb: Die zugehörige .vscode-Datei befindet sich im Beispielprojekte

- verwendete Plugins:
  - ...

## Einrichtung des Frontend-Projektes

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

Die Specs liegen üblicherweise im Ordner `cypress/integration`

Starten der Cypress-Tests:
```console
npm run build
npm run starter

npm run cypress (in separatem Terminal-Fenster)
```

### Setup

### Einrichtung des Cypress-Dashboards

## Konfiguration der CI/CD-Pipeline
.yml-Datei mit Github-Action (`https://github.com/marketplace/actions/cypress-io`) im Ordner `.github/workflows` hinzufügen.

### GitHub

### Netlify