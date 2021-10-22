(function (window) {
    'use strict';
    var App = window.App || {};

    var FirebaseConfig ={
        apiKey: "AIzaSyDiTgUsYj3qXFGAqVZWHa7dNynqxUpHbCw",
        authDomain: "coffeerun-9f5fd.firebaseapp.com",      
        projectId: "coffeerun-9f5fd",      
        storageBucket: "coffeerun-9f5fd.appspot.com",      
        messagingSenderId: "103788575014",      
        appId: "1:103788575014:web:1afb430a0bf474786a69e7"
    };
    
    App.FirebaseConfig = FirebaseConfig;
    firebase.initializeApp(App.FirebaseConfig);
    
    window.App = App;  
        
  })(window);

  