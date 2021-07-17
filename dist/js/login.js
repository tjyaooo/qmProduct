function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if ((username == "volunteer") && (password == "123")) {
        location.href = 'map.html';
    }
    else if ((username == "user") && (password == "123")) {
        location.href = 'map.html';
    }
    else {
        document.getElementById("fail").style.display = "block";
    }
}