//Password checker

document.querySelector('form').addEventListener('submit', e => {
    const pass1 = document.getElementById('password1').value;
    const pass2 = document.getElementById('password2').value;
    const help = document.getElementById('passwordHelp');
    if ((pass1 === pass2) && ((pass1.length || pass2.length) >= 6)) {
        help.style.color = 'green';
        help.textContent = 'Password OK.';
    } else {
        help.style.color = 'red';
        help.textContent = 'Error:';
        if ((pass1.length || pass2.length) === 0) {
            help.textContent += ' Password must cointain at least one digit!';
        } else {
            if (pass1 !== pass2) {
                help.textContent += ' Passwords are not identical!';
            }
            if ((pass1.length || pass2.length) < 6) {
                help.textContent += ' Password must be at least 6 characters long!';
            }
        }
    }
    e.preventDefault();
});