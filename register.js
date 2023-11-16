
// import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
// import { auth } from './config.js';


// const registrationForm = document.getElementById('registrationForm');
// const username = document.getElementById('username').value;
// const email = document.getElementById('email').value;
// const password = document.getElementById('password').value;

// registrationForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     createUserWithEmailAndPassword(auth, email.value, password.value)
//   .then((userCredential) => {

//     const user = userCredential.user;
//     console.log(user);
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
// //    console.log(errorCode);
//   });
// })








import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

import { auth, db, storage } from './config.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { ref, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js'


const registrationForm = document.querySelector('#registrationForm');
const email = document.querySelector('#email');
const username = document.querySelector('#username');
const profile = document.querySelector('#profile');
const password = document.querySelector('#password');


registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            const file = profile.files[0]
            const storageRef = ref(storage, username.value);
            uploadBytes(storageRef, file).then(() => {
                getDownloadURL(storageRef).then((url) => {
                    addDoc(collection(db, "users"), {
                        name: username.value,
                        email: email.value,
                        uid: user.uid,
                        profileUrl: url
                    }).then((res) => {
                        console.log(res);
                        window.location = 'login.html'
                    }).catch((err) => {
                        console.log(err);
                    })
                })
            });
            Swal.fire({
                title: 'Registerd the User Successfully',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            }).then(() => {
                // Optionally, you can redirect to another page after successful registration
                window.location.href = 'login.html';
             
            })
            email.value = ''
            password.value = ''
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });

})


















/// parctice code 
registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            email.value = ''
            password.value = ''
            const file = profile.files[0]
            const storageRef = ref(storage, username.value);
            uploadBytes(storageRef, file).then(() => {
                getDownloadURL(storageRef).then((url) => {
                    addDoc(collection(db, "users"), {
                        name: username.value,
                        email: email.value,
                        uid: user.uid,
                        profileUrl: url
                    }).then((res) => {
                        console.log(res);
                        window.location = 'login.html'
                    }).catch((err) => {
                        console.log(err);
                    })
                })
            });

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });


})