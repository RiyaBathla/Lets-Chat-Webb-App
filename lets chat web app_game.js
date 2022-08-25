// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBr5PZjdwR8Ik9S6gvJUaUwQ0Zod_NzCUY",
    authDomain: "lets-chat-web-app---project.firebaseapp.com",
    projectId: "lets-chat-web-app---project",
    storageBucket: "lets-chat-web-app---project.appspot.com",
    messagingSenderId: "63664581289",
    appId: "1:63664581289:web:5b431e9c18edecb47ad7b8"
  };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();

function logout (){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location ="index.html";
}
