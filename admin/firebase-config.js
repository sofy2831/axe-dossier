import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAvC4Hae3huW_bpriic8RrGhHkfwD13dVs",
  authDomain: "axe-dossier-prod.firebaseapp.com",
  projectId: "axe-dossier-prod",
  storageBucket: "axe-dossier-prod.firebasestorage.app",
  messagingSenderId: "930002685598",
  appId: "1:930002685598:web:ccdc67eee45676aa28358f"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
