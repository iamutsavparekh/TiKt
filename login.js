var firebaseConfig = {
    apiKey: "AIzaSyDFAR6bzYN7Yzj6bs_OaC6aQANfxYRm2d8",
    authDomain: "tikt-2292d.firebaseapp.com",
    databaseURL: "https://tikt-2292d.firebaseio.com",
    projectId: "tikt-2292d",
    storageBucket: "tikt-2292d.appspot.com",
    messagingSenderId: "851749016935",
    appId: "1:851749016935:web:3476bae0e60f44b3734bc2",
    measurementId: "G-HL27611SW1"
};
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  
const dbRef=firebase.database().ref();
const UserRef=dbRef.child("Users");

function clicker()
{
    name=document.getElementById("un").value;
    pass=document.getElementById("pw").value;
    const userRef = dbRef.child('Requests/'+name);
    pass1=userRef.pass;
    if(pass1=pass)
    {
        alert("Success");
        window.location.assign("Home.html");
        
    }
console.log(name);
}   



    