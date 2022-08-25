// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBr5PZjdwR8Ik9S6gvJUaUwQ0Zod_NzCUY",
    authDomain: "lets-chat-web-app---project.firebaseapp.com",
    projectId: "lets-chat-web-app---project",
    storageBucket: "lets-chat-web-app---project.appspot.com",
    messagingSenderId: "63664581289",
    appId: "1:63664581289:web:5b431e9c18edecb47ad7b8"
  };

function addUser () {
 user_name = document.getElementById("user_name").value;
 localStorage.setItem("user_name", user_name);
 window.location = "kwitter_room.html";
}