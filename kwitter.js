function clicked() {
    username = document.getElementById("input1").value;
    localStorage.setItem("username", username);
    window.location = "kwitterroom.html";

}