function handleInput() {
  let inputs = document.querySelectorAll("input");
  let inputActive = true;

  inputs.forEach((input) => {
    let value = input.value.trim();

    if (value.length > 0) {
      input.parentElement.classList.add("active");
    } else {
      input.parentElement.classList.remove("active");
      inputActive = false; // input의 값이 하나라도 비어있으면 false
    }
  });

  let submitBtn = document.getElementById("submit-btn");

  if (inputActive) {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.setAttribute("disabled", true);
  }
}

let inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("keyup", handleInput);
});

// 비밀번호 표시 or 숨기기
let pwMode = document.getElementById("pw-mode");
let userPw = document.getElementById("userpw");

function pwVisible() {
  if (userPw.getAttribute("type") == "password") {
    userPw.setAttribute("type", "text");
    pwMode.innerHTML = `숨기기`;
  } else {
    userPw.setAttribute("type", "password");
    pwMode.innerHTML = `비밀번호 표시`;
  }
}

pwMode.addEventListener("click", pwVisible);

// 다크모드
let body = document.querySelector("body");
let modeBtn = document.getElementById("mode-toggle");

function modeToggle(e) {
  e.preventDefault();
  body.classList.toggle("dark");

  modeBtn.innerHTML = body.classList.contains("dark")
    ? `Lightmode`
    : `Darkmode`;
}

modeBtn.addEventListener("click", modeToggle);
