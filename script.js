// 1. Ek hi Toggle Function rakhein (Avoid duplication)
function toggleView(view) {
    const wrapper = document.getElementById('mainWrapper');
    if (view === 'signup') {
        wrapper.classList.add('signup-active');
        wrapper.classList.remove('login-active');
    } else {
        wrapper.classList.add('login-active');
        wrapper.classList.remove('signup-active');
    }
}

// 2. Signup Logic
document.getElementById('btn').addEventListener('click', function () {
    const username = document.getElementById('signup-user').value.trim();
    const userpassw = document.getElementById('signup-pass').value.trim();

    if (!username || !userpassw) {
        alert('Please fill all fields!');
        return;
    }

    // Professional touch: Password bhi save karein
    localStorage.setItem("regUser", username);
    localStorage.setItem("regPass", userpassw);
    
    alert(`Welcome ${username}! Signup Successful.`);
    toggleView('login'); // Signup ke baad auto login par shift karein
});

// 3. Login Logic
document.getElementById('loginbutton').addEventListener('click', function () {
    const loguser = document.getElementById('login-user').value.trim();
    const logpass = document.getElementById('login-pass').value.trim();

    const savedUser = localStorage.getItem("regUser");
    const savedPass = localStorage.getItem("regPass");

    if (!loguser || !logpass) {
        alert('Please enter credentials!');
    } else if (loguser === savedUser && logpass === savedPass) {
        alert("Welcome back " + loguser + "!");
    
    } else {
        alert("Invalid Username or Password!");
    }
});
