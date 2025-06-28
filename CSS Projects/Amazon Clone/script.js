function showSignup() {
    document.getElementById('login-box').style.display = 'none';
    document.getElementById('signup-box').style.display = 'block';
}

// Show login form
function showLogin() {
    document.getElementById('signup-box').style.display = 'none';
    document.getElementById('login-box').style.display = 'block';
}

// Register User
function registerUser() {
    let name = document.getElementById('signup-name').value;
    let email = document.getElementById('signup-email').value;
    let password = document.getElementById('signup-password').value;
    
    if (localStorage.getItem(email)) {
        alert('User already exists! Please log in.');
        return;
    }
    
    localStorage.setItem(email, JSON.stringify({ name, password }));
    alert('Signup successful! Please log in.');
    showLogin();
}

// Login User
function loginUser() {
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;
    let user = JSON.parse(localStorage.getItem(email));
    
    if (!user || user.password !== password) {
        alert('Invalid email or password!');
        return;
    }
    
    localStorage.setItem('loggedUser', email);
    alert('Login successful! Redirecting...');
    window.location.href = 'index.html';
}
