import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import config from '../../shared/config/firebase';

export const firebaseApp = initializeApp(config);
export const firebaseAuth = getAuth(firebaseApp);
