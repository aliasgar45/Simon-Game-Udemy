import { FirebaseOptions } from 'firebase/app';

let config: FirebaseOptions;
if (process.env.REACT_APP_ENV === 'production') {
  config = {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    databaseURL: ''
  };
} else {
  config = {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    databaseURL: ''
  };
}

export default config;
