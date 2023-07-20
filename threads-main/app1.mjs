
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut  } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBX0Tuxe2RCcsVN_o2vU_pPkkujDFRv-f0",
    authDomain: "learnfirebase-c3c75.firebaseapp.com",
    projectId: "learnfirebase-c3c75",
    storageBucket: "learnfirebase-c3c75.appspot.com",
    messagingSenderId: "197023284500",
    appId: "1:197023284500:web:61a3169f1b0d618b3f5601",
    measurementId: "G-GTB7JMSFXQ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  var signin = document.getElementById('signin')

  signin.addEventListener('click', function(){

    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    localStorage.setItem('email', email);
    var successlogin = true;
    // ...
    // alert('Sign in Successful')
    location.href = './app.html'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert('Error: ' + errorMessage)
    location.href = './index.html'

  });


  })






  const handleAuthStateChange = (user) => {
    if (user) {
      
      console.log('User is logged in:', user.email);

      location.href = `./app.html`;

    } else {
    
      console.log('User is logged out');
    }
  };
  

onAuthStateChanged(auth, handleAuthStateChange);