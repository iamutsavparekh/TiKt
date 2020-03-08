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
  const usersRef = dbRef.child('Offenders');
  

  usersRef.on("child_added", snap =>{
  let user=snap.val();

  let $li= document.createElement("li");  
  $li.innerHTML=user.Id;
  $li.setAttribute("child-key", snap.key);
  
  $li.addEventListener("click", userClicked);
  document.getElementById("userLists").appendChild($li);

});

function userClicked(e)
{
  userID=e.target.getAttribute("child-key");
  console.log(userID);
  const userRef=dbRef.child('Offenders/'+userID);
  const userDetailsUI= document.getElementById("userDetails");
  userDetailsUI.innerHTML= ""
  userRef.on("child_added",snap => {
    var $p=document.createElement("p");
    console.log(snap.key);
    console.log(snap.val());
    if(snap.key=='Id')
    {
      $p.innerHTML = "Phone No: " +  snap.val()
    }
    else if(snap.key=='Current')
    {
        current=snap.val();
        current=parseInt(current);
        var name;
        
        
        switch(current)
        {

            case 1:
                {
                    name="Dadar";
                    break;
                }
            case 2:
                {  
                    name="Matunga";
                    break;
                }
            case 3:
                {  
                    name="Sion";
                    break;
                }
            case 4:
                {  
                    name="Kurla";
                    break;
                }    
            case 5:
                {  
                    name="Vidyavihar";
                    break;
                }
        }
        $p.innerHTML= "Current: "+name;

    }
    else if(snap.key=='Dest')
    {
        dest=snap.val();
        console.log(dest);
        dest=parseInt(dest);
        var name1;

        
        
        switch(dest)
        {

            case 1:
                {
                    name1="Dadar";
                    break;
                }
            case 2:
                {  
                    name1="Matunga";
                    break;
                }
            case 3:
                {  
                    name1="Sion";
                    break;
                }
            case 4:
                {  
                    name1="Kurla";
                    break;
                }    
            case 5:
                {  
                    name1="Vidyavihar";
                    break;
                }
                debugger
        }
        console.log(name1);
        $p.innerHTML= "Destination: "+name1;
    }
    else
    {
        current=parseInt(current);
      dest=parseInt(dest);  
        fine=(dest-current)*250;
        fine=Math.abs(fine);
       dir=snap.val();
       dir=parseInt(dir);
       console.log(dir);
       if(dir==1)
       {
        $p.innerHTML= "Direction: Up"+"<br><br>"+"Fine: "+fine;
        console.log("hi");
       }
       else
       {
        $p.innerHTML= "Direction: Down"+"<br><br>"+"Fine: "+fine;
       }
      
     
    } 
      document.getElementById("userDetails").append($p);

  });
}
