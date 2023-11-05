import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./config.js";

const forgotpassword = document.querySelector('#forgotPassword');
const email = document.querySelector('#email');
// const password = document.querySelector('#password');


forgotpassword.addEventListener('submit', (event) => {
      event.preventDefault()

      sendPasswordResetEmail(auth, email.value)
            .then(() => {
                  // Password reset email sent!
                  // ..
                  // swal("congratetulation!",  "Your password Hass Been Resst!", "Please check your Email@")
                  Swal.fire({
                        title: 'congratetulation!",  "Your password Hass Been Resst!", "Please check your Email@',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })
            }) 
            .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  // ..
                  // swal("Sorry!",  "Please Enter the correct Email@", "Password has been reset suecssfully")
                  Swal.fire({
                        title: 'Sorry! Failed!',
                        text: '"Please Enter the correct Email@", "Password has been reset suecssfully',
                        icon: 'error'
                    });
            });


})