// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    secret: '$2a$04$xZQTx5i7csGt6MhzvRIQlOf7DvvY5l8OYQDMkyZoWuM1R9Yyu3Bji',
    client: 'clientapp',
    basic: 'Basic Y2xpZW50YXBwOnNlY3JldA==',
    grantType: 'password',
    scope: 'read write',
    url: 'http://localhost:8080/cap-agenda/api/',
    urlLogin: 'http://localhost:8080/cap-agenda/oauth/token'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
