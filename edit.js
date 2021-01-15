this.userEmails = [];
this.userPasswords = [];

function initUsers(email, password, id){
    this.userEmails[id-1] = email;
    this.userPasswords[id-1] = password;

    console.log(this.userEmails);
    console.log(this.userPasswords);
}

function authenticateUser(){
    console.log("clicked")
    var emailInput = document.getElementById("emailAddress").value;
    var passwordInput = document.getElementById("password").value;
    var errorDiv = document.getElementById("errorDisplay");

    if((emailInput==this.userEmails[0] && passwordInput==this.userPasswords[0]) || emailInput==this.userEmails[1] && passwordInput==this.userPasswords[1])
        window.location.href ="update.html";
    else
        errorDiv.className = "error";
}