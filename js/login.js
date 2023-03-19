let elInputText = document.querySelector(".input_text");
let elInputPass = document.querySelector(".input_pass");
let elBtn = document.querySelector(".btn");
let elEyeBtn = document.querySelector(".lbl");
let elImg = document.querySelector(".img");

elBtn.addEventListener("click", function(evt) {
    evt.preventDefault()

    if (elInputText.value == "yash1nov" && elInputPass.value == "2421") {
        window.location.replace("index.html");
    }else {
        alert("Ma'lumotlarni qayta tekshiring!");
    }
})

elEyeBtn.addEventListener("click", function() {
    if (elInputPass.type === "password") {
        elInputPass.type = "text"
        elImg.src = "img/eye-fill.svg";
    }else {
        elInputPass.type = "password"
        elImg.src = "img/eye-slash-fill.svg"
    }
})