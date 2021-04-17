function validate()
{
    var password = document.getElementById("pwd").value.toString();
    var check = document.getElementById("pwdcheck").value.toString();
    if (password.length < 8 || check.length < 8){
        alert("Password length must be longer that 8.");
    }
    if (password != check){
        alert("Passwords do not match.");
    }
}