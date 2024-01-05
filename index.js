const profileImage = document.querySelector("#profileImage");
const firstNameSpan = document.querySelector("#firstName");
const ageSpan = document.querySelector("#age");
const statusSpan = document.querySelector("#status")
const btnUpdateProfile = document.querySelector ("#updateBtn")

const isWizzard = confirm("Are you a wizzard?");

if(isWizzard === true){
    console.log("Welcome to Hogwarts!");
}
else {
    profileImage.src = "images/image2.jpg";
    firstNameSpan.innerHTML = "Dudley Dursley";
    ageSpan.innerHTML = "12";
    statusSpan.innerHTML = "Muggle";
}

btnUpdateProfile.addEventListener("click", () => {
    profileImage.src = "images/Screenshot 2023-11-22 232417.png";
    firstNameSpan.innerHTML = "Pink Puffer Jacket";
    ageSpan.innerHTML = 1;
    statusSpan.innerHTML = "Bape Jacket";
} );