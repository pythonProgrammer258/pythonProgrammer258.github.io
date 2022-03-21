
function myFunction1() {
    document.getElementById("github").innerHTML = "View github";
    document.getElementById("download").innerHTML = "Download"
    document.getElementById("click").innerHTML = "";
    document.getElementById("onclick").innerHTML = "Close"
}
function myFunction2(){
    document.getElementById("github").innerHTML = "";
    document.getElementById("download").innerHTML = "";
    document.getElementById("onclick").innerHTML = ""
    document.getElementById("click").innerHTML = "Github";
}

function changeTheme(){
    let target = document.body;
    target.classList.toggle("theme-dark")
}