
///// past the congif link in firebase --------->

import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth, db } from "./config.js";
// firestore link pastt -------->
import { collection, addDoc, getDocs, query, Timestamp, orderBy } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";




/// onAuthsatechanged mehthoud use for  without login tu no entery home page --------->
//--- and  logout methoud use -------->

onAuthStateChanged(auth, (user) => {
      if (user) {
            const uid = user.uid;
            console.log(uid);
      } else {
            window.location = 'login.html'
      }
});


/// logout methoud use in social app ---------?> 
const logout = document.querySelector('#logout');

logout.addEventListener('click', () => {
      signOut(auth).then(() => {
            console.log('logout successfully');
            window.location = 'login.html'
      }).catch((error) => {
            console.log(error);
      });

})




// Add your JavaScript code here for interactivity
const title=document.querySelector('#tittle')

document.getElementById("post-form").addEventListener("submit", async (event) => {
      event.preventDefault();
      var postText = document.getElementById("post-text").value;
      // console.log(auth.currentUser.uid);
      try {
            
            const docRef = await addDoc(collection(db, "post"), {
                  Tittle: title.value,
                  discription:postText,
                  uid: auth.currentUser.uid,
                  postDate: Timestamp.fromDate(new Date()),

            });
            console.log("Document written with ID: ", docRef.id);
            gateDatafirebase()

      } catch (e) {
            console.error("Error adding document: ", e);
      }
      // Check if postText is not empty
      // if (postText.trim() !== "") {
      //       var postsContainer = document.getElementById("posts");
      //       var postElement = document.createElement("div");
      //       postElement.className = "post";
      //       postElement.innerHTML = "<h2>User</h2><p>" + postText + "</p>";
      //       postsContainer.appendChild(postElement);
      //       document.getElementById("post-text").value = "";
      // } else {
      //       // Handle the case when postText is empty (or contains only whitespace)
      //       alert("Please enter a valid post.");
      // }
});


// get firebasedata  in firestore------------>

const card = document.querySelector('#card');

let arry = []
async function gateDatafirebase() {
      arry.length= 0;
      // card.innerHTML= '';
      const postsQuery = query(collection(db, "post"), orderBy('postDate', 'desc'));
      const querySnapshot = await getDocs(postsQuery);
      querySnapshot.forEach((doc) => {
            arry.push(doc.data());
      });
      console.log(arry);
      arry.map((item) => {
            card.innerHTML += `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${item.Tittle}</h5>
            <p class="card-text">${item.discription}</p>
            <a href="#" class="btn btn-primary"></a>
            </div>
            </div>
          
            `
          
      })
}

gateDatafirebase()