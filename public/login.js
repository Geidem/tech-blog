const loginFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const username = document.querySelector('#username-login')
    const password = document.querySelector('#password-login')
    fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({
            username: username.value,
            password: password.value,
        }),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(response => {
        document.location.replace('/dashboard');
    })
    .catch(err => {
        console.log(err);
    }
    );
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);