 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
 import { getAuth, signInWithEmailAndPassword,  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyAZq7xVq6WhkDTrccXv9AosybQCQk6mR9Q",
   authDomain: "my-first-app-bd40a.firebaseapp.com",
   projectId: "my-first-app-bd40a",
   storageBucket: "my-first-app-bd40a.appspot.com",
   messagingSenderId: "346866070244",
   appId: "1:346866070244:web:8b89767d420e4ecda772f1"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 const auth = getAuth()

   var email = document.getElementById("email-id");
   var password = document.getElementById("password-id");

   window.login = function(e) {
    e.preventDefault();
    var obj = {
      email: email.value,
      password: password.value
    };
    signInWithEmailAndPassword(auth, obj.email, obj.password)
      .then(function(success) {
        console.log(success.uid);
        
        window.location.href = "todolist.html";
      })
      .catch(function(err) {
        alert("Login error: " + err);
      });
    console.log(obj);
 }
