
import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const app = initializeApp(firebaseConfig);
const auth = getAuth();