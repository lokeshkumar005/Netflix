import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAKEokMJCOcgdD6JtNsNFmo5o_XJ0u1ydk",
  authDomain: "netflix-bdb67.firebaseapp.com",
  projectId: "netflix-bdb67",
  storageBucket: "netflix-bdb67.appspot.com",
  messagingSenderId: "683953168880",
  appId: "1:683953168880:web:731b28d4cc39d41bbd7d35",
};

export const firebaseApp = initializeApp(firebaseConfig);
