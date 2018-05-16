// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  api: 'https://localhost:3001',
  firebase: {
    apiKey: 'AIzaSyDd0gcPefZNNhbPEV5C9ed3XPEPhzXhwbM',
    authDomain: 'bruno-mineiro.firebaseapp.com',
    databaseURL: 'https://bruno-mineiro.firebaseio.com',
    projectId: 'bruno-mineiro',
    storageBucket: 'bruno-mineiro.appspot.com',
    messagingSenderId: '499213345210'
  }
};
