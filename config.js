import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
      apiKey: "AIzaSyBpXWQhUCd0YiakwWoScpXeKjGfBuJI7V4",
      authDomain: "social-app-522a2.firebaseapp.com",
      projectId: "social-app-522a2",
      storageBucket: "social-app-522a2.appspot.com",
      messagingSenderId: "92507447430",
      appId: "1:92507447430:web:0ed5dec49bc43ff098b107",
      measurementId: "G-2C0GEVRLXF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);