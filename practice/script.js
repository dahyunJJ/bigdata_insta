//  Darkmode
let body = document.querySelector("body");
let darkModeBtn = document.querySelector(".darkmode-btn");

darkModeBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  darkModeBtn.innerHTML = body.classList.contains("dark")
    ? "Lightmode"
    : "Darkmode";
});

// input 포커스 될 때, span 상단 위치
let userId = document.getElementById("userid");
let userPw = document.getElementById("userpw");
let idSpan = document.querySelector(".id-box span");
let pwSpan = document.querySelector(".pw-box span");

let pwBtn = document.querySelector(".pw-mode");

let submitBtn = document.getElementById("submit-btn");

function handleInput() {
  idSpan.classList.toggle("active", userId.value !== "");
  pwSpan.classList.toggle("active", userPw.value !== "");
  pwBtn.classList.toggle("active", userPw.value !== "");

  // 아이디, 비밀번호 모두 입력하면 로그인 버튼 활성화
  let idValue = (pwValue = false);

  userId.value.trim().length > 0 ? (idValue = true) : false;
  userPw.value.trim().length > 0 ? (pwValue = true) : false;

  if (idValue && pwValue) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

userId.addEventListener("keyup", handleInput);
userPw.addEventListener("keyup", handleInput);

// 비밀번호 표시 or 숨기기
pwBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (userPw.type === "password") {
    userPw.type = "text";
    pwBtn.textContent = "숨기기";
  } else {
    userPw.type = "password";
    pwBtn.textContent = "비밀번호 표시";
  }
});

// 비밀번호 정규식
function handleCheck(e) {
  let pw = e.target.value;
  let pwdCheck = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{8,16}$/;

  if (pw.length > 0 && !pwdCheck.test(pw)) {
    alert("비밀번호를 확인해주세요.");
    return false;
  }
}

userPw.addEventListener("focusout", handleCheck);
