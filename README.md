# HolitionWeather

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# EXPLANATION

First problem: the API has difficulties to be accesses and returns an error 405 if the endpoint

http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=6145faa5ad3dafd8fb271ad16c0d7dab

included parameters is hit.

The solution for development was found here:

https://forum.freecodecamp.org/t/local-weather-api-for-people-stuck-because-of-the-https-request/50274/18

And uses a proxy service i.e. https://cors-anywhere.herokuapp.com/


