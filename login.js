/// login form java script-------- start //

// const   loginForm =document.querySelector('#loginForm')
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

//     const enteredUsername = document.getElementById('username').value;
//     const enteredPassword = document.getElementById('password').value;

    const userData = JSON.parse(localStorage.getItem('user')) || [];
    
    let matchedUserdata = false;
    
    // Loop through user data to check for a match
    for (const user of userData) {
    
        if (user.username === enteredUsername && user.password === enteredPassword) {
            matchedUserdata = true;
            
        
            break; // match the value and exite the loop
        }
     
    }
    
    if (matchedUserdata) {
       
        Swal.fire({
            title: 'Login Successful!',
            text: 'Redirecting to the homepage...',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500,
            willClose: () => {
                window.location.href = 'index.html'; // Redirect after the alert is closed
            }
        });
        

        
    } else {
        Swal.fire({
            title: 'Login Failed!',
            text: 'Please check your username and password.',
            icon: 'error'
        });
    }
});

/// login form java script-------- end //







import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
import { auth } from './config.js';


// const form = document.querySelector('#form')
// const email = document.querySelector('#email')
// const password = document.querySelector('#password')

const   loginForm =document.querySelector('#loginForm')
const enteredUsername = document.getElementById('username').value;
const enteredPassword = document.getElementById('password').value;

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, enteredUsername.value, enteredPassword.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            window.location = 'index.html'
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
})