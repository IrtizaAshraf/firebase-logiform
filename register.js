
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
import { auth } from "./config.js";


const registrationForm = document.querySelector('#registrationForm');
// const form = document.querySelector('#form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');


registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);

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