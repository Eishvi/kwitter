
var firebaseConfig = {
    apiKey: "AIzaSyBxhfr0yJdgaVTbg78PfgYHW-6HzH_Aocg",
    authDomain: "kwitternew-542c9.firebaseapp.com",
    databaseURL: "https://kwitternew-542c9-default-rtdb.firebaseio.com",
    projectId: "kwitternew-542c9",
    storageBucket: "kwitternew-542c9.appspot.com",
    messagingSenderId: "236055039597",
    appId: "1:236055039597:web:d74ace15e902eda917f964"
  };
 
  firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      console.log("Room Name-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      
      });});}
getData();
function redirectToRoomName(name1){

  console.log(name1);
  localStorage.setItem("room_name", name1);
  window.location="kwitter_page.html";
}
function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location="kwitter_page.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}

