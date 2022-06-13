var firebaseConfig = { apiKey: "AIzaSyC0FfV281BhRbrXE_ihkgsO-K7O_uwUOf0", 
authDomain: "kwitter-294d1.firebaseapp.com", 
databaseURL: "https://kwitter-294d1-default-rtdb.firebaseio.com",
 projectId: "kwitter-294d1", 
 storageBucket: "kwitter-294d1.appspot.com",
  messagingSenderId: "767524309701", 
  appId: "1:767524309701:web:9056f07c7c03371c557eac" }; 
 firebase.initializeApp(firebaseConfig);

 user_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name");

 function send()
 {
       msg = document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
             name:user_name,
             message:msg,
             like:0
       });

       document.getElementById("msg").value = "";
 }
 function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}