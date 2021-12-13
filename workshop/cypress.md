---
theme : "league"
---

<style>
th { font-size: 22px; }
td { font-size: 16px; }
li { font-size: 22px; }
blockquote { font-size: 22px; }
</style>

# Cypress

---

## Praxis-Demo

Zum starten der Demo muss folgendes ausgeführt werden:

In Terminal 1:
```bash
cd nextjs-frontend
npm install
npm run build
npm run start
```
In Terminal 2:
```bash
cd nextjs-frontend
npm run cypress
```

---

# Warum Cypress?

https://docs.cypress.io/guides/overview/why-cypress

![concepts](images/cypress-capabilities.png)

---

## Trade-Offs

https://docs.cypress.io/guides/references/trade-offs

---

**Dauerhafte Trade-Offs**

- läuft im Browser: gut für direkten (Shadow-)DOM-Zugriff. Schlecht um Dinge außerhalb eines Browsers zu testen.
- Kein Support für mehrere Browser-Tabs
- Keine Automatisierung mehrerer Browser zur gleichen Zeit. Nur indirekt, z.B. weiteren Backend-Prozess mit Selenium, Puppeteer, ...
- Jeder Test ist an einen single-origin (gleicher Port, gleiche Hauptdomain) gebunden
- nicht gedacht für: Web-Indexing, Spidering, Performance-Testing
- Kein natives Testen mobiler Apps möglich. Nur einfache Funktionstests, falls Mobile-App im Browser entwickelt wird (z.B. mit Ionic)
  - Mögliche Alternativen: z.B. Appium, Detox oder Ranorex

---

**Temporäre Trade-Offs**

- Limitierter iframe-Support
- kein cy.hover()
- kein cy.tab()

---

## Disabled Barriers

> Cypress deaktiviert störende Funktionen im Auto-Test: https://docs.cypress.io/guides/guides/launching-browsers#Disabled-Barriers

- Ignoriert Zertifikats-Fehler
- Erlaubt blockiert Pop-Ups
- Deaktiviert 'Passwort speichern'
- Deaktiviert 'Autofill für Formulare und Passwörter'
- Deaktiviert Nachfrage nach Standbrowser
- Deaktiviert Benachrichtigung über neu gefundene Geräte
- Deaktiviert Browser-Übersetzungen
- Deaktiviert Wiederherstellen von Sessions
- Deaktiviert Hintergrund Netwerk-Verkehr
- Deaktiviert Hintergrund und Renderer Drosselung
- Deaktiviert Dialoge mit Berechtigungsnachfragen, z.B. für Mikrofon, Webcam, ...
- Deaktiviert Benutzergesten für Autoplay von Videos

> kann bei Bedarf über Kommandozeilen-Parameter angepasst werden!

---

# Vergleich mit anderen Tools

https://docs.cypress.io/guides/overview/key-differences

---

> Protractor mittlerweile deprecated: https://blog.angular.io/angular-v12-is-now-available-32ed51fbfd49

> Für Migrations-Projekte: https://docs.cypress.io/guides/migrating-to-cypress/protractor#Introduction

---

```mermaid
flowchart TB
		subgraph Selenium
			direction TB
			a1(Test Code)-->a2(Selenium WebDriver)-->a3(Browser)-->a4(Application)
		end

		subgraph Cypress
			direction TB
			b1(Test Code)-->b2(Cypress Framework)
			subgraph Browser
			b2-->b3(Universal)-->b4(Application)
			end
		end
```
---

| Cypress                           | Selenium                                     |
|-----------------------------------|----------------------------------------------|
| läuft im run-loop der Applikation | Schickt commands über Treiber an den Browser |

> Gilt analog für W3C WebDriverAPI-basierte Tools wie WebdriverIO und NightwatchJS

> Details siehe: https://www.browserstack.com/guide/cypress-vs-webdriverio

---

|                       | Cypress                             | Puppeteer                    | Playwright             | TestCafe                               |
|-----------------------|-------------------------------------|------------------------------|------------------------|----------------------------------------|
| Webseite              | https://cypress.io                  | https://pptr.dev             | https://playwright.dev | https://testcafe.io                    |
| Anforderungen         | Node.js 12+                         | Node 10.18.1+                |                        |                                        |
| Browser               | Chrome/ium, Edge, Electron, Firefox | (Headless) Chrome/ium        |                        |                                        |
| Cross-Browser Testing | nein                                | nur für unterstütze Browser  | ja                     |                                        |
| Multi-Tab Testing     | nur indirekt                        | ja                           | ja                     | ja                                     |
| direkter DOM-Zugriff  | ja                                  | ja                           | ja                     | ja                                     |
| Docker-Images         | ja                                  | siehe Troubleshooting/Docker |                        | ja                                     |
| Test Recorder         | Cypress Studio in alpha             | ab Chrome 92: in DevTools    | Playwright codegen     | kostenpflichtiger Visual Test Recorder |
| Component Testing     | ja                                  | nein                         | nein                   | nein                                   |
| Parallele Tests       | unterstützt je Browser              | ja                           | ja                     | ja                                     |
| Test Retries          | ja                                  |                              |                        | ja                                     |
| Automatic Wait        | ja                                  |                              |                        | ja                                     |
| Time Travel Debugger  | ja                                  |                              |                        | nein                                   |
| Dashboard             | ja                                  | nein                         | nein                   | in Alpha Test                          |
| Sprache               | JavaScript/TypeScript               | JavaScript                   | JavaScript             | JavaScript                             |

> Lösungen mit Puppeteer, Playwright, TestCafe, WebDriver oder Appium lassen sich gut mit Codecept kombinieren: https://codecept.io

---

### Dashboard

Real-World Beispiel:

- Dashboard: https://dashboard.cypress.io/projects/7s5okt
- Github-Repo: https://github.com/cypress-io/cypress-realworld-app
- Youtube Einführung: https://www.youtube.com/watch?v=ezp60FUnjGg

---

Der Cypress-Dashboard-Service bietet einem u.a.:

der Free-Tier ist auf 3 User und 500 Test-Ergebnisse/Monat limitiert!

- Load Balancing
- Zugriff auf aufgezeichnete Testergebnisse (typischerweise aus einer CI-Pipeline)
- Stack-Trace fehlgeschlagener Tests
- Screenshots fehlgeschlagener (oder per cy.screenshot() getriggert) Tests
- Video des Test-Runs
- Übersicht über die langsamsten Tests
- Integration der Cypress Tests in den GitHub-Workflow mittels commit status checks: https://docs.cypress.io/guides/dashboard/github-integration#Status-checks -> verhindert das Mergen eines Commits oder Pull-Requests, falls nicht alle Cypress Tests passed sind.
- Integration von Cypress in GitHub mittels Pull Requests: https://docs.cypress.io/guides/dashboard/github-integration#Pull-request-comments
- Integrationen für Slack, GitHub, GitLab, Bitbucket
- Analytics (u.a. Übersicht über häufigste Fehler)

---

Die Premium-Features enthalten zusätzlich je nach gewähltem Plan: https://cypress.io/pricing/

- Flake Detection
- Smart Orchestration
- Flake Mangement (coming soon)
- Jira Integration
- Mail-Support
- Github-Enterprise (coming soon)
- Gitlab for Enterprise (coming soon)
- Single Sign-On

---

### Component Testing (noch in Alpha-Status)

https://docs.cypress.io/guides/component-testing/introduction

![concepts](images/component-testing.png)

---

```javascript
import * as React from 'react'
import { mount } from '@cypress/react'
import Button from './Button'

it('Button', () => {
  mount(<Button>Test button</Button>)
  cy.get('button').contains('Test button').click()
})
```

***

- Komponenten können isoliert getestet werden
- Vergleichbar mit Jest-Komponententests in Storybook
- Aktuell verfügbar für React/Next und Vue über Webpack (Vite ist noch experimentell)

---

### Visual Testing

https://docs.cypress.io/guides/tooling/visual-testing

![concepts](images/visual-testing.png)

- Lokal möglich, z.B. mittels https://github.com/meinaart/cypress-plugin-snapshots
- Cloud-Anbieter:
  - https://applitools.com/
  - https://percy.io/
  - https://happo.io/

---

```javascript
// Beispiel: https://github.com/meinaart/cypress-plugin-snapshots

it('completes todo', () => {
  cy.visit('/')
  cy.get('.new-todo').type('write tests{enter}')
  cy.contains('.todo-list li', 'write tests').find('.toggle').check()

  cy.contains('.todo-list li', 'write tests').should('have.class', 'completed')

  // run 'npm i cypress-plugin-snapshots -S'
  // capture the element screenshot and
  // compare to the baseline image
  cy.get('.todoapp').toMatchImageSnapshot({
    imageConfig: {
      threshold: 0.001,
    },
  })
})
```

---

### CI/CD

- Github-Action verfügbar: https://github.com/marketplace/actions/cypress-io
- Gitlab: https://docs.cypress.io/guides/continuous-integration/gitlab-ci#Basic-Setup
- Jenkins: Bei Testbench CS wurde das Docker-Image in der Pipeline verwendet und die Reports im junit-Format gepublished

---

### Code Coverage

https://docs.cypress.io/guides/tooling/code-coverage#Introduction

![Istanbul Report](images/istanbul.png)

Code Coverage kann mit Istanbul (https://istanbul.js.org/) angezeigt werden.
Dies ist über einen zusatzlichen Build-Schritt in zwei Varianten möglich:

- Über das nyc-Modul (https://github.com/istanbuljs/nyc) dem Kommandzeilen-Interface von Istanbul
- Über Code-Transiplierung mittels dem Babel-Plugin-Istanbul (https://github.com/istanbuljs/babel-plugin-istanbul)

Für .lcov coverage-Files gibt es auch Plugins für IDEs (z.B. Coverage-Gutters für VS-Code):

![Coverage-Gutters](images//coverage-gutters-features-1.gif)

Coverage kann auch in CI integriert werden, z.B. auf GitHub: https://www.cypress.io/blog/2019/10/22/show-code-coverage-on-gitlab-ci/

---

### Reporter

https://docs.cypress.io/guides/tooling/reporters

---

#### Standard Reporter

- Default-Reporter ist der spec-Reporter der Informationen auf STDOUT ausgibt
- jeder Mocha-Reporter (https://mochajs.org/#reporters) kann verwendet werden, da Cypress auf Mocha basiert
- der TeamCity und jUnit-Reporter (wird bei TestbenchCS im Jenkins verwendet) sind bereits in Cypress integriert und müssen nicht extra installiert werden

---

#### Custom Reporter

Weiter Reporter können über NPM installiert werden, z.B. HTML-Reports mittels Mochawesome (http://antontelesh.github.io/testing/2019/02/04/mochawesome-merge.html)

Ein Beispiel für einen Custom-Reporter existiert für die TestbenchCS: https://github.com/testbench-cs-imbus/tbcs-api-cypress-parser

---

### Best-Practices

https://docs.cypress.io/guides/core-concepts/introduction-to-cypress
https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests
https://docs.cypress.io/guides/core-concepts/retry-ability
https://docs.cypress.io/guides/core-concepts/interacting-with-elements
https://docs.cypress.io/guides/core-concepts/variables-and-aliases
https://docs.cypress.io/guides/core-concepts/conditional-testing
https://docs.cypress.io/guides/core-concepts/test-runner
https://docs.cypress.io/guides/core-concepts/cypress-studio

---

- siehe: https://docs.cypress.io/guides/references/best-practices
- YouTube Talk: https://www.youtube.com/watch?v=5XQOK0v_YRE

---

### Plugins

- https://docs.cypress.io/guides/tooling/plugins-guide
- https://docs.cypress.io/plugins/directory

Es ist möglich Cypress auch mit eigenen Plugins zu erweitern :-)

---

### Roadmap

https://docs.cypress.io/guides/references/roadmap#Upcoming-features

| Status       | Feature                     | Released |
|--------------|-----------------------------|----------|
| Alpha        | Component Testing           | v7.0.0   |
| Experimental | Cypress Studio              | v6.3.0   |
| Experimental | Session API                 | v8.2.0   |
| in progress  | WebKit Support              | -        |
| in progress  | Visit multiple superdomains | -        |
| in progress  | Iframe Support              | -        |

---

## Ressourcen

- offizieller Cypress-Workshop: https://github.com/cypress-io/testing-workshop-cypress
- Cypress Blog: https://www.cypress.io/blog
- Recipes: https://docs.cypress.io/examples/examples/recipeshttps://docs.cypress.io/examples/examples/recipes
- Chrome-Plugins:
  - Cypress-Recorder: https://chrome.google.com/webstore/detail/cypress-scenario-recorder/fmpgoobcionmfneadjapdabmjfkmfekb
  - Cypress Scenario Recorder: https://chrome.google.com/webstore/detail/cypress-scenario-recorder/fmpgoobcionmfneadjapdabmjfkmfekb

---

## Fazit