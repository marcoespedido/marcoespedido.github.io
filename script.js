document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('error');

    const validUsername = 'user';
    const validPassword = 'secret123';

    if (username === validUsername && password === validPassword) {
        window.location.href = 'ecom.html';
    } else {
        errorElement.textContent = 'Invalid username or password.';
    }
});
