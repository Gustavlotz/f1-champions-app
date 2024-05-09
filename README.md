# F1ChampionsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Architecture

Service Layer: 

Champions.service.ts used to encapsulate data access and business logic related to fetching and processing data from the ergast api, this seperation of concerns isolates data access from the componenets, promoting reuseability and testability.

Seperation of Concerns:

app demonstrates separation of concerns by keeping component classes focused on presentation logic and user interaction, while service classes handle data retrieval and manipulation.  
This separation enhances maintainability and makes components less dependent on specific data sources or APIs.

Observerable Pattern:

RxJS Observables and operators (e.g., forkJoin, map) are used extensively for managing asynchronous operations and handling data streams.
This reactive programming approach enables efficient handling of asynchronous data flows, such as concurrent HTTP requests.

Asynchronous Operations:

Asynchronous operations are managed using async/await syntax and RxJS operators like toPromise() and subscribe().
This approach ensures non-blocking behavior and enhances the responsiveness of the application.

Error Handling:

The application includes error handling strategies using try/catch blocks to gracefully handle exceptions and provide meaningful error messages to users or developers.
Error propagation using throw statements ensures that errors are appropriately managed across different layers of the application.

Dependency Injection:

Angular's dependency injection mechanism is utilized to inject services (HttpClient) into components and services through constructor injection.
This facilitates loose coupling between components and services, making it easier to replace or mock dependencies during testing.

State Management:

Although not explicitly shown in the provided code, the application can benefit from centralized state management using Angular services, RxJS BehaviorSubjects, or state management libraries like NgRx for managing application state in a predictable and scalable manner. (possible improvement).

Component-Based Architecture:

the application follows a component-based architecture with reusable and composable Angular components (SeasonInfoComponent).
This approach promotes reusability, encapsulation, and maintainability of UI elements.

Promises and Observables:

The codebase leverages both promises (Promise<any>) and observables (Observable<any>) based on the nature of asynchronous operations and API interactions.
Promises are used for awaiting async operations like HTTP requests, while observables are used for handling data streams and complex async scenarios.

Summary:

Overall, the architectural choices reflect a modern and best-practice approach to Angular development, emphasizing modularity, separation of concerns, reactive programming, and error handling. These patterns contribute to a more scalable, maintainable, and performant application, especially when dealing with asynchronous data operations and external API integrations.

## Possible improvments:

Could possibly import the loader into the list directly, have not looked too much into this.

Not sure if I should have trimmed the objects when calling them so i kept them as is, but could easily trim the object and only use the required data.


