let users = JSON.parse(localStorage.getItem('ecolinkUsers')) || [];

function validateLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert("Login successful! 🌿");
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('personalDetails').style.display = 'block';
    } else {
        alert("⚠️ Invalid credentials. Please try again.");
    }
}

function registerUser(event) {
    event.preventDefault();
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('signupPassword').value.trim();

    if (!fullname || !email || !password) {
        alert("❗ Please fill all required fields");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("📧 Please enter a valid email address");
        return;
    }

    if (users.some(u => u.email === email)) {
        alert("👤 User already exists. Please login.");
        return;
    }

    const newUser = {
        username: fullname,
        email,
        password
    };

    users.push(newUser);
    localStorage.setItem('ecolinkUsers', JSON.stringify(users));
    
    alert("🎉 Registration successful! Redirecting...");
    document.getElementById('signupPage').style.display = 'none';
    document.getElementById('loginPage').style.display = 'block';
}

function showLoginPage() {
    document.getElementById('signupPage').style.display = 'none';
    document.getElementById('loginPage').style.display = 'block';
}

function showSignupPage() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('signupPage').style.display = 'block';
}

function submitPersonalDetails(event) {
    event.preventDefault();
    alert("Personal details submitted successfully!");
    document.getElementById('personalDetails').style.display = 'none';
    document.getElementById('homePage').style.display = 'block';
}

function showAgriculturePage() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('agriculturePage').style.display = 'block';
}

function showHealthPage() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('healthPage').style.display = 'block';
}

function showEducationPage() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('educationPage').style.display = 'block';
}

function showJobsPage() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('jobsPage').style.display = 'block';
}

function goBackToHomePage() {
    document.getElementById('agriculturePage').style.display = 'none';
    document.getElementById('healthPage').style.display = 'none';
    document.getElementById('educationPage').style.display = 'none';
    document.getElementById('jobsPage').style.display = 'none';
    document.getElementById('homePage').style.display = 'block';
}