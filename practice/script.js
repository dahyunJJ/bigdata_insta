//  Darkmode
let body = document.querySelector("body");
let darkModeBtn = document.querySelector(".darkmode-btn");

function modeToggel() {
  let modeTxt = darkModeBtn.innerHTML;

  if (modeTxt == "Darkmode") {
    body.classList.add("dark");
    darkModeBtn.innerHTML = `Lightmode`;
  } else {
    body.classList.remove("dark");
    darkModeBtn.innerHTML = `Darkmode`;
  }
}

darkModeBtn.addEventListener("click", modeToggel);

// input 포커스 될 때, span 상단 위치
let userId = document.getElementById("userid");
let userPw = document.getElementById("userpw");
let idSpan = document.querySelector(".id-box span");
let pwSpan = document.querySelector(".pw-box span");

let pwBtn = document.querySelector(".pw-mode");

userId.addEventListener("keyup", () => {
  idSpan.classList.toggle("position", userId.value !== "");
});

userPw.addEventListener("keyup", () => {
  pwSpan.classList.toggle("position", userPw.value !== "");
  pwBtn.classList.toggle("hide", pwBtn.value !== "");
});

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

// 아이디, 비밀번호 모두 입력하면 로그인 버튼 활성화
let submitBtn = document.getElementById("submit-btn");

if (submitBtn.disabled == true) {
  submitBtn.style.backgroundColor = "rgba(0, 149, 246, 0.3)";
}

document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("keyup", () => {
    let allInputsFilled = true;

    // 모든 입력 필드의 값이 비어 있는지 확인
    document.querySelectorAll("input").forEach((input) => {
      if (input.value.trim() === "") {
        allInputsFilled = false;
      }
    });

    // 모든 입력 필드의 값이 비어 있지 않은 경우 버튼 활성화
    if (allInputsFilled) {
      submitBtn.disabled = false;
      submitBtn.style.backgroundColor = "var(--btn-bg)";
    } else {
      submitBtn.disabled = true;
      submitBtn.style.backgroundColor = "rgba(0, 149, 246, 0.3)";
    }
  });
});
