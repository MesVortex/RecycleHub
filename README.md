# RecycleHub
RecycleHub is a web application that allows users to find recycling centers, learn about recycling, and earn rewards for recycling.

## Table of Contents
1. [Project Structure](#project-structure)
2. [Development Server](#development-server)
3. [Code Scaffolding](#code-scaffolding)
4. [Building](#building)
5. [Running Unit Tests](#running-unit-tests)
6. [Running End-to-End Tests](#running-end-to-end-tests)
7. [Additional Resources](#additional-resources)

## Project Structure

The project is organized as follows:

```
src/
|   app/
|   |   core/
|   |   |   authentication/
|   |   |   guards/
|   |   |   services/
|   |   |   core.module.ts
|   |   |   core-routing.module.ts
|   |   shared/
|   |   |   components/
|   |   |   models/
|   |   |   services/
|   |   |   shared.module.ts
|   |   |   shared-routing.module.ts
|   |   features/
|   |   |   home/
|   |   |   |   components/
|   |   |   |   home.module.ts
|   |   |   |   home-routing.module.ts
|   |   |   account/
|   |   |   |   components/
|   |   |   |   account.module.ts
|   |   |   |   account-routing.module.ts
|   |   |   rewards/
|   |   |   |   components/
|   |   |   |   rewards.module.ts
|   |   |   |   rewards-routing.module.ts
|   |   |   search/
|   |   |   |   components/
|   |   |   |   search.module.ts
|   |   |   |   search-routing.module.ts
|   |   |   user/
|   |   |   |   components/
|   |   |   |   user.module.ts
|   |   |   |   user-routing.module.ts
|   |   |   app.component.ts
|   |   |   app.module.ts
|   |   |   app-routing.module.ts
|   assets/
|   environments/
|   index.html
|

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
