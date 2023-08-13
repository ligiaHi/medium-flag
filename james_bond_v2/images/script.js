// JavaScript source code
var users = [
    { id: 1, username: "chris", password: "mymoney", Money: "$0" },
    { id: 2, username: "vesper", password: "parola2", Money: "$5" },
    { id: 3, username: "john", password: "parola3", Money: "$10" },
    { id: 4, username: "james007", password: "parola4", Money: "$15,0000.000" },
    { id: 5, username: "buckye", password: "parola5", Money: "$12" },
    { id: 6, username: "michael", password: "parola6", Money: "$100" },
    { id: 7, username: "steve", password: "parola7", Money: "$0" },
    { id: 8, username: "smith", password: "parola8", Money: "$10" }
];

function logout() {
    window.location.href = "Main.html";
}

function performRedirect() {
    var nume = document.getElementById("nume").value;
    var parola = document.getElementById("parola").value;

    var isValid = false;
    var foundUser = null;

    for (var i = 0; i < users.length; i++) {
        if (nume === users[i].username && parola === users[i].password) {
            isValid = true;
            foundUser = users[i];
            break;
        }
    }

    if (isValid) {
        window.location.href = "detalii.html?id=" + encodeURIComponent(foundUser.id);
    } else {
        alert("Incorrect user or/and password");
    }
}

function loadDetails() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var userId = urlParams.get('id');

    var foundUser = users.find(function (user) {
        return user.id.toString() === userId;
    });

    if (foundUser) {
        var userIdElement = document.getElementById('userId');
        var usernameElement = document.getElementById('username');
        var MoneyElement = document.getElementById('Money');
        var userImageElement = document.getElementById('userImage'); 

        userIdElement.textContent = foundUser.id;
        usernameElement.textContent = foundUser.username;
        MoneyElement.textContent = foundUser.Money;

   
        userImageElement.src = 'images/' + foundUser.username + '.jpg';
        userImageElement.style.display = 'block'; 
    } else {
        var errorMessage = document.createElement('p');
        errorMessage.textContent = 'Utilizatorul nu a fost găsit.';
        document.body.appendChild(errorMessage);
    }
}


loadDetails();
