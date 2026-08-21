<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDMYacgjfb6gW3J5lv7Jyu3bpJenpL0Nzo",
    authDomain: "mera-gaov.firebaseapp.com",
    databaseURL: "https://mera-gaov-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "mera-gaov",
    storageBucket: "mera-gaov.firebasestorage.app",
    messagingSenderId: "574021786245",
    appId: "1:574021786245:web:7f4c042f347d0cab54a7ec",
    measurementId: "G-757L4D3657"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
