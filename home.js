
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

const rightNow = new Date();
const hours = rightNow.getHours();
const minutes = rightNow.getMinutes();
const ampm = hours >= 12 ? 'PM' : 'AM';
const hours12 = hours % 12 || 12;
const time = `${hours12}:${minutes} ${ampm}`;

// console.log(time);

// Add your JavaScript code here for interactivity
// const title = document.querySelector('#tittle')

// document.getElementById("post-form").addEventListener("submit", async (event) => {
//       event.preventDefault();
//       var postText = document.getElementById("post-text").value;
//       // console.log(auth.currentUser.uid);
//       try {

//             const docRef = await addDoc(collection(db, "post"), {
//                  const postObj={
//                   Tittle: title.value,
//                   discription: postText,
//                   uid: auth.currentUser.uid,
//                   postDate: Timestamp.fromDate(new Date()),
//                   time: time
//                   }

//             });
//             console.log("Document written with ID: ", docRef.id);
//             // gateDatafirebase()
//             postObj.docId = docRef.id;
//             arry = [postObj, ...arry]
//             console.log(arry);
//             renderpost()

//       } catch (e) {
//             console.error("Error adding document: ", e);
//       }
//       // Check if postText is not empty
//       // if (postText.trim() !== "") {
//       //       var postsContainer = document.getElementById("posts");
//       //       var postElement = document.createElement("div");
//       //       postElement.className = "post";
//       //       postElement.innerHTML = "<h2>User</h2><p>" + postText + "</p>";
//       //       postsContainer.appendChild(postElement);
//       //       document.getElementById("post-text").value = "";
//       // } else {
//       //       // Handle the case when postText is empty (or contains only whitespace)
//       //       alert("Please enter a valid post.");
//       // }
// });

const title = document.querySelector('#title'); // Fix typo in the ID selector

document.getElementById("post-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const postText = document.getElementById("post-text").value;
  
  // Assuming db, collection, auth, and Timestamp are defined elsewhere in your code
  try {
    const postObj = {
      Title: title.value, // Fix typo in property name
      description: postText,
      uid: auth.currentUser.uid,
      postDate: Timestamp.fromDate(new Date()), // Assuming Timestamp is correctly defined
      time: new Date().getTime() // Assuming you want to store the current timestamp in milliseconds
    };

    const docRef = await addDoc(collection(db, "post"), postObj); // Pass postObj here
    console.log("Document written with ID: ", docRef.id);
    
    postObj.docId = docRef.id;
    arry = [postObj, ...arry];
    console.log(arry);
    
    renderpost();
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});



function renderpost() {
      arry.map((item) => {
            card.innerHTML += `
            <div class="card text-center" style="width: 18rem;">
            <div class="card-body">
            <h6 class="card-title" class="text-right">${item.time}</h6><hr>
            <h5 class="card-title">${item.Tittle}</h5>
            <p class="card-text">${item.discription}</p>
            <a href="#" class="btn btn-primary"></a>
            </div>
            </div>
          
            `

      })
}

// get firebasedata  in firestore------------>

const card = document.querySelector('#card');

let arry = []
async function gateDatafirebase() {
      arry.length = 0;
      // card.innerHTML= '';
      const postsQuery = query(collection(db, "post"), orderBy('postDate', 'desc'));
      const querySnapshot = await getDocs(postsQuery);
      querySnapshot.forEach((doc) => {
            // console.log(doc.id);
            arry.push({ ...doc.data(), doc: doc.id });
      });
      console.log(arry);
      renderpost()
}

gateDatafirebase()


// form.addEventListener('submit', async (event) => {
//       event.preventDefault();
//       card.innerHTML = ''
//       try {
//             const docRef = await addDoc(collection(db, "posts"), {
//                   const postObj = {
//                         title: title.value,
//                         description: description.value,
//                         uid: auth.currentUser.uid,
//                         postDate: Timestamp.fromDate(new Date()),
//                         like: false
//                   });
//       }
//       const docRef = await addDoc(collection(db, "posts"), postObj);
//       console.log("Document written with ID: ", docRef.id);
//       getDataFromFirestore()
//       postObj.docId = docRef.id;
//       arry = [postObj, ...arry]
//       console.log(arry);
//       renderpost();
// } catch (e) {
//       console.error("Error adding document: ", e);
// }
 