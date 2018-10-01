# Exercise Notes
+ AngularJS services are substitutable objects that are wired together using dependency injection (DI). You can use services to organize and share code across your app. AngularJS services are: Lazily instantiated – AngularJS only instantiates a service when an application component depends on it.
+ Handle the global interface, data and methods.
+ Steps of using service, take get data as example:
    + Create the data set, as in dir of service;
    + Create the service and define the get data methods, as in app.article.service.ts;
    + In the component of using the service
        + import the services
        + Add 'providers' in @Component segment
        + In the component class:
            + Reference the service in constructor
            + Define the methods to using the services
            + Reference the methods in 'ngOnInit'

# JasonExerApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
