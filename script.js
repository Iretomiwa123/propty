function changeColor() {
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');

    
    signupBtn.addEventListener('click', function () {
        loginBtn.classList.remove('btn-outline-light');
        loginBtn.style.backgroundColor = '#1F48D9';
        loginBtn.style.color = '#ffffff';

        signupBtn.classList.add('btn-outline-light');
        signupBtn.classList.remove('btn');
    });
   
    loginBtn.addEventListener('click', function () {
        signupBtn.classList.remove('btn-outline-light');
        signupBtn.style.backgroundColor = '#1F48D9';
        signupBtn.style.color = '#ffffff';

        loginBtn.classList.add('btn-outline-light');
        loginBtn.classList.remove('btn');
    });
}

