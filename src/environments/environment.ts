// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: "https://ccl-api.herokuapp.com/api",
  // api: "http://192.168.0.131:8080/api",
  radio: "https://sonic.mediatelekom.net/8032/stream"
  // radio: "http://listen.radioking.com/radio/226162/stream/269701",
  // radio: "http://rfcmedia.streamguys1.com/MusicPulse.mp3"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
