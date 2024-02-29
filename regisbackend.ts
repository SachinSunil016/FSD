function registerUser() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // User registered successfully
                const user = userCredential.user;
                console.log('User registered:', user);
            })
            .catch((error) => {
                // Handle errors
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Registration error:', errorMessage);
            });
    }