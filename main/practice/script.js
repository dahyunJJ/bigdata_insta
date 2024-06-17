// 게시물 업로드 팝업
let uploadBtn = document.querySelector(".fa-square-plus");
let uploadPopup = document.querySelector(".upload-wrapper");
let uploadCloseBtn = document.querySelector(".post-close-btn");

function popupOpen(item) {
  item.classList.add("active");
}

function popupClose(item) {
  item.classList.remove("active");
}

// 매개변수가 없을 경우 => click 이벤트가 발생했을 때 해당 함수 호출
// uploadBtn.addEventListener("click", popupOpen());

// 매개 변수가 있을 경우에는 익명 함수로 감싸지 않으면 함수 즉시 실행됨
// () => {함수(매개변수)} 감싸서 사용
uploadBtn.addEventListener("click", () => {
  popupOpen(uploadPopup);
});
uploadCloseBtn.addEventListener("click", () => {
  popupClose(uploadPopup);
});

// 게시물 옵션 메뉴
let optionBtn = document.querySelectorAll(".fa-ellipsis");
let postOption = document.querySelector(".post-option");
let optionCloseBtn = document.querySelector(".option-close-btn");

optionBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    popupOpen(postOption);
  });
});

optionCloseBtn.addEventListener("click", () => {
  popupClose(postOption);
});

// Canvas image
let fileUploadBtn = document.getElementById("file-upload-btn");
let canvas = document.getElementById("img-canvas");
let ctx = canvas.getContext("2d");

function handleImage(e) {
  let reader = new FileReader(); // 파일을 읽기 위한 객체 생성
  // 'onload' 이벤트 설정. 파일 읽기가 완료되면 이 핸들러가 실행됨
  // 'event' 객체를 통해 읽은 데이터에 접근할 수 있음
  reader.onload = function (event) {
    let img = new Image();

    img.onload = function () {
      // 이미지가 로드됐을 때 실행되는 함수
      canvas.width = 500;
      canvas.height = 400;
      ctx.drawImage(img, 0, 0, 500, 400);
    };

    img.src = event.target.result; // 파일의 데이터 url을 할당하여 이미지 로드
  };

  // readAsDataURL 메서드를 호출하여 실제 파일을 읽기 시작
  // 매개변수에는 읽을 파일 객체(File 객체)를 전달
  reader.readAsDataURL(e.target.files[0]);
}

fileUploadBtn.addEventListener("change", handleImage);
