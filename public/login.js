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
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        let result = await response.json();
        alert(result.message);
    }
};
   

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);