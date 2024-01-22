// // Corrected JavaScript code
// document.addEventListener("DOMContentLoaded", function () {
//     const emailInput = document.getElementById("email-id");
//     const passwordInput = document.getElementById("password-id");
//     const loginBtn = document.getElementById("login-btn");

//     loginBtn.addEventListener("click", function () {
//         const emailValue = emailInput.value;
//         const passwordValue = passwordInput.value;

//         if (emailValue && passwordValue) {
//             console.log(passwordValue, emailValue);
           
//         } else {
//             alert("Please enter both email and password");
//         }
//     });
// });

// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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

//   getting all the objects of html
    var firstName = document.getElementById("First-name") 
    var lastName = document.getElementById("last-name")
    var email = document.getElementById("email-id")
    var password = document.getElementById("password-id")

    // funnction for storing data
    window.signup = function(e){
        e.preventDefault();
        var obj = {
            firstname: firstName.value,
            lastname:  lastName.value,
            email:     email.value,
            password: password.value
        }
        createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then(function(success){
            window.location.href = "todolist.html";
        })
        .catch(function(err){
            alert("error" + err)
        })
        console.log(obj)
    };

