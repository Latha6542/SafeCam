import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAg0xR6-AhCANyb4xIQa9OnlUW9qqNkbKY",
    authDomain: "safecam-9043e.firebaseapp.com",
    projectId: "safecam-9043e",
    storageBucket: "safecam-9043e.firebasestorage.app",
    messagingSenderId: "509100449469",
    appId: "1:509100449469:web:b3d6c070e8834f1d26a1d4"
  };


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {app, db };